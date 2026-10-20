const FEED_SOURCE_URL =
  'https://r.jina.ai/https://www.facebook.com/akademialkhayrofficial/videos';
const FACEBOOK_PAGE_URL = 'https://www.facebook.com/akademialkhayrofficial/';

const sendJson = (res, statusCode, body, origin) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.end(JSON.stringify(body));
};

const findNextNonEmptyLine = (lines, startIndex) => {
  for (let index = startIndex; index < lines.length; index += 1) {
    const value = lines[index].trim();
    if (value) return { index, value };
  }
  return null;
};

const cleanText = (value) =>
  String(value || '')
    .replace(/\s+/g, ' ')
    .replace(/\u00a0/g, ' ')
    .trim();

const shortenText = (value, maxLength) => {
  const text = cleanText(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
};

const parseLatestVideo = (markdown) => {
  const lines = String(markdown || '').split(/\r?\n/);
  const videosIndex = lines.findIndex((line) => line.trim() === 'Videos');
  if (videosIndex === -1) return null;

  for (let index = videosIndex + 1; index < lines.length; index += 1) {
    const line = lines[index].trim();
    const thumbnailMatch = line.match(
      /^\[!\[Image \d+: Video thumbnail\]\((.+?)\)\s+([0-9:]+)\]\((https:\/\/www\.facebook\.com\/[^)]+)\)$/
    );

    if (!thumbnailMatch) continue;

    const [, thumbnailUrl, duration, postUrl] = thumbnailMatch;
    let cursor = index + 1;

    const titleLine = findNextNonEmptyLine(lines, cursor);
    if (!titleLine) return null;

    const titleMatch = titleLine.value.match(/^\[(.+)\]\((https:\/\/www\.facebook\.com\/[^)]+)\)$/);
    if (!titleMatch) continue;

    const [, fullText, linkedUrl] = titleMatch;
    cursor = titleLine.index + 1;

    const relativeTimeLine = findNextNonEmptyLine(lines, cursor);
    if (!relativeTimeLine) return null;
    const relativeTime = cleanText(relativeTimeLine.value);
    cursor = relativeTimeLine.index + 1;

    const maybeDividerLine = findNextNonEmptyLine(lines, cursor);
    if (!maybeDividerLine) return null;
    if (maybeDividerLine.value === '·') {
      cursor = maybeDividerLine.index + 1;
    } else {
      cursor = maybeDividerLine.index;
    }

    const viewsLine = findNextNonEmptyLine(lines, cursor);
    const views = viewsLine ? cleanText(viewsLine.value) : '';
    cursor = viewsLine ? viewsLine.index + 1 : cursor;

    let reactions = '';
    for (let probe = cursor; probe < lines.length; probe += 1) {
      const value = lines[probe].trim();
      if (!value) continue;
      if (value.startsWith('[![Image ') || value === 'See more on Facebook') break;
      if (/^\d+$/.test(value)) {
        reactions = value;
        break;
      }
    }

    return {
      pageUrl: FACEBOOK_PAGE_URL,
      postUrl: linkedUrl || postUrl,
      title: shortenText(fullText, 150),
      fullText: cleanText(fullText),
      relativeTime,
      duration,
      views,
      reactions: reactions ? `${reactions} reactions` : '',
      thumbnailUrl,
      mediaType: 'video',
      source: 'facebook-videos-tab'
    };
  }

  return null;
};

module.exports = async (req, res) => {
  const origin = req.headers.origin || '';

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.end();
    return;
  }

  if (req.method !== 'GET') {
    sendJson(res, 405, { success: false, message: 'Method not allowed.' }, origin);
    return;
  }

  try {
    const response = await fetch(FEED_SOURCE_URL, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      sendJson(res, 502, { success: false, message: 'Failed to load Facebook feed source.' }, origin);
      return;
    }

    const markdown = await response.text();
    const latestPost = parseLatestVideo(markdown);

    if (!latestPost) {
      sendJson(
        res,
        502,
        { success: false, message: 'Latest Facebook video could not be parsed.' },
        origin
      );
      return;
    }

    sendJson(res, 200, { success: true, latestPost }, origin);
  } catch {
    sendJson(res, 502, { success: false, message: 'Failed to load Facebook feed source.' }, origin);
  }
};
