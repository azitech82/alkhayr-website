const base64UrlEncode = (input) => Buffer.from(input).toString('base64url');

const signJwtRs256 = (header, payload, privateKeyPem) => {
  const crypto = require('crypto');
  const headerB64 = base64UrlEncode(JSON.stringify(header));
  const payloadB64 = base64UrlEncode(JSON.stringify(payload));
  const unsigned = `${headerB64}.${payloadB64}`;
  const signature = crypto.createSign('RSA-SHA256').update(unsigned).end().sign(privateKeyPem).toString('base64url');
  return `${unsigned}.${signature}`;
};

const readJsonBody = (req, maxBytes) =>
  new Promise((resolve, reject) => {
    let total = 0;
    const chunks = [];

    req.on('data', (chunk) => {
      total += chunk.length;
      if (total > maxBytes) {
        reject(new Error('Payload too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });

    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8');
        resolve(raw ? JSON.parse(raw) : {});
      } catch (err) {
        reject(err);
      }
    });

    req.on('error', reject);
  });

const sendJson = (res, statusCode, body, origin) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.end(JSON.stringify(body));
};

module.exports = async (req, res) => {
  const origin = req.headers.origin || '';

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { success: false, message: 'Method not allowed' }, origin);
    return;
  }

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || '').replace(/\\n/g, '\n');
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || '1BZ0X6G2IqtHaf9LnACqbuUcDOXBVE465';

  if (!clientEmail || !privateKey || !folderId) {
    sendJson(res, 500, { success: false, message: 'Server is not configured for uploads.' }, origin);
    return;
  }

  let body;
  try {
    body = await readJsonBody(req, 7 * 1024 * 1024);
  } catch (err) {
    sendJson(res, 400, { success: false, message: 'Invalid request body.' }, origin);
    return;
  }

  const filename = typeof body.filename === 'string' ? body.filename.trim() : '';
  const mimeType = typeof body.mimeType === 'string' ? body.mimeType.trim() : '';
  const dataBase64 = typeof body.dataBase64 === 'string' ? body.dataBase64.trim() : '';

  if (!filename || !mimeType || !dataBase64) {
    sendJson(res, 400, { success: false, message: 'Missing upload data.' }, origin);
    return;
  }

  const isAllowedType = mimeType === 'application/pdf' || mimeType.startsWith('image/');
  if (!isAllowedType) {
    sendJson(res, 400, { success: false, message: 'Unsupported file type.' }, origin);
    return;
  }

  let fileBuffer;
  try {
    fileBuffer = Buffer.from(dataBase64, 'base64');
  } catch {
    sendJson(res, 400, { success: false, message: 'Invalid file data.' }, origin);
    return;
  }

  if (!fileBuffer.length) {
    sendJson(res, 400, { success: false, message: 'Empty file.' }, origin);
    return;
  }

  if (fileBuffer.length > 4 * 1024 * 1024) {
    sendJson(res, 400, { success: false, message: 'File too large. Max 4MB.' }, origin);
    return;
  }

  const nowSeconds = Math.floor(Date.now() / 1000);
  const jwt = signJwtRs256(
    { alg: 'RS256', typ: 'JWT' },
    {
      iss: clientEmail,
      scope: 'https://www.googleapis.com/auth/drive.file',
      aud: 'https://oauth2.googleapis.com/token',
      iat: nowSeconds,
      exp: nowSeconds + 60 * 55
    },
    privateKey
  );

  let accessToken;
  try {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt
      })
    });
    const tokenJson = await tokenRes.json().catch(() => ({}));
    if (!tokenRes.ok || !tokenJson.access_token) {
      sendJson(res, 502, { success: false, message: 'Failed to authorize upload.' }, origin);
      return;
    }
    accessToken = tokenJson.access_token;
  } catch {
    sendJson(res, 502, { success: false, message: 'Failed to authorize upload.' }, origin);
    return;
  }

  const safeName = filename.replace(/[^\w.\- ()]/g, '_');
  const driveName = `${Date.now()}_${safeName}`;
  const metadata = { name: driveName, parents: [folderId] };
  const boundary = `aak_upload_${Math.random().toString(16).slice(2)}`;

  const metaPart = Buffer.from(
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(metadata)}\r\n`,
    'utf8'
  );
  const fileHeaderPart = Buffer.from(`--${boundary}\r\nContent-Type: ${mimeType}\r\n\r\n`, 'utf8');
  const closingPart = Buffer.from(`\r\n--${boundary}--\r\n`, 'utf8');
  const multipartBody = Buffer.concat([metaPart, fileHeaderPart, fileBuffer, closingPart]);

  try {
    const uploadRes = await fetch(
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': `multipart/related; boundary=${boundary}`
        },
        body: multipartBody
      }
    );

    const uploadJson = await uploadRes.json().catch(() => ({}));
    if (!uploadRes.ok || !uploadJson.id) {
      sendJson(res, 502, { success: false, message: 'Upload failed.' }, origin);
      return;
    }

    const fileId = uploadJson.id;
    const webViewLink = uploadJson.webViewLink || `https://drive.google.com/file/d/${fileId}/view`;

    sendJson(res, 200, { success: true, fileId, webViewLink }, origin);
  } catch {
    sendJson(res, 502, { success: false, message: 'Upload failed.' }, origin);
  }
};
