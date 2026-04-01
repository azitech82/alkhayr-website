const chatbotStyles = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap');
@keyframes chatbot-pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.7), 0 0 18px rgba(255, 255, 255, 0.8);
        filter: brightness(1);
    }
    50% {
        box-shadow: 0 0 0 12px rgba(250, 204, 21, 0), 0 0 26px rgba(250, 204, 21, 0.9);
        filter: brightness(1.05);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(250, 204, 21, 0), 0 0 18px rgba(255, 255, 255, 0.7);
        filter: brightness(1);
    }
}
.chatbot-button {
    position: fixed;
    right: 1.25rem;
    bottom: 1.25rem;
    z-index: 60;
    background: transparent;
    color: #fff;
    border-radius: 9999px;
    border: 1.5px solid #f97316;
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 18px rgba(255, 255, 255, 0.75), 0 0 28px rgba(250, 204, 21, 0.7);
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    animation: chatbot-pulse 1.6s ease-in-out infinite;
}
.chatbot-button:hover {
    transform: translateY(-2px) scale(1.03);
    border-color: #f59e0b;
    box-shadow: 0 0 22px rgba(255, 255, 255, 0.9), 0 0 36px rgba(250, 204, 21, 0.9);
}
.chatbot-window {
    position: fixed;
    right: 1.25rem;
    bottom: 5.5rem;
    width: 330px;
    max-width: calc(100vw - 2.5rem);
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 16px 40px rgba(17, 24, 39, 0.2);
    z-index: 60;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.chatbot-hidden {
    display: none;
}
.chatbot-header {
    background: #6d28d9;
    color: #fff;
    padding: 0.75rem 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.chatbot-modes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    gap: 0.45rem;
    padding: 0.6rem;
    background: #ffffff;
    border: 1px solid rgba(148, 163, 184, 0.45);
    border-radius: 12px;
}
.chatbot-mode-btn {
    width: 100%;
    border-radius: 10px;
    border: 1px solid rgba(148, 163, 184, 0.7);
    background: transparent;
    padding: 0.55rem 0.75rem;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #475569;
    transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}
.chatbot-mode-btn:hover {
    background: rgba(15, 23, 42, 0.04);
}
.chatbot-mode-active {
    box-shadow: none;
    transform: none;
}
#mode-quran.chatbot-mode-active {
    background: rgba(124, 58, 237, 0.10);
    border-color: rgba(124, 58, 237, 0.65);
    color: #5b21b6;
}
#mode-school.chatbot-mode-active {
    background: rgba(37, 99, 235, 0.10);
    border-color: rgba(37, 99, 235, 0.65);
    color: #1d4ed8;
}
#mode-school {
    grid-column: 1 / -1;
}
#mode-arabic.chatbot-mode-active {
    background: rgba(15, 118, 110, 0.10);
    border-color: rgba(15, 118, 110, 0.65);
    color: #0f766e;
}
#mode-hadeeth.chatbot-mode-active {
    background: rgba(245, 158, 11, 0.12);
    border-color: rgba(245, 158, 11, 0.7);
    color: #b45309;
}
.chatbot-messages {
    padding: 0.75rem;
    height: 280px;
    overflow-y: auto;
    background: #f8fafc;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.chatbot-message {
    max-width: 85%;
    padding: 0.5rem 0.75rem;
    border-radius: 12px;
    font-size: 0.9rem;
    line-height: 1.4;
    white-space: pre-line;
}
.chatbot-link {
    color: #2563eb;
    text-decoration: underline;
    text-underline-offset: 2px;
}
.chatbot-link:hover {
    color: #1d4ed8;
}
.chatbot-quran-title {
    font-weight: 700;
    color: #4c1d95;
    margin-bottom: 0.4rem;
}
.chatbot-ayah-text {
    direction: rtl;
    text-align: right;
    font-family: 'KFGQPC HAFS Uthmanic Script', 'Amiri', 'Scheherazade New', serif;
    font-size: clamp(1.05rem, 0.95rem + 0.6vw, 1.35rem);
    line-height: 2.35;
    letter-spacing: 0.01em;
    word-spacing: 0.08em;
    padding-top: 0.12em;
    padding-bottom: 0.08em;
    text-rendering: optimizeLegibility;
    margin-bottom: 0.6rem;
}
.chatbot-hadith-text {
    direction: rtl;
    text-align: right;
    font-family: 'Noto Naskh Arabic', 'Noto Sans Arabic', 'Amiri', 'Scheherazade New', 'Geeza Pro', 'Tahoma',
        'Arial', sans-serif;
    font-feature-settings: "mark" 0, "mkmk" 0;
    font-size: clamp(0.98rem, 0.92rem + 0.45vw, 1.18rem);
    line-height: 2.1;
    letter-spacing: 0;
    word-spacing: 0.04em;
    padding-top: 0.1em;
    padding-bottom: 0.06em;
    text-rendering: optimizeLegibility;
    margin-bottom: 0.55rem;
}
.chatbot-waqf {
    font-size: 1.15em;
    vertical-align: middle;
    line-height: 1;
    padding: 0 0.08em;
    display: inline-block;
    transform: translateY(-0.06em);
}
.chatbot-dict-arabic {
    direction: rtl;
    text-align: right;
    font-family: 'KFGQPC HAFS Uthmanic Script', 'Amiri', 'Scheherazade New', serif;
    font-size: 1.25rem;
    line-height: 2.1;
    font-weight: 700;
    margin-bottom: 0.2rem;
}
.chatbot-dict-forms {
    direction: rtl;
    text-align: right;
    font-family: 'KFGQPC HAFS Uthmanic Script', 'Amiri', 'Scheherazade New', serif;
    font-size: 1.05rem;
    line-height: 1.9;
    color: #1f2937;
    margin-bottom: 0.35rem;
}
.chatbot-dict-forms-line {
    display: flex;
    gap: 0.35rem;
    align-items: baseline;
    justify-content: flex-end;
}
.chatbot-dict-forms-label {
    font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    font-size: 0.78rem;
    color: #6b7280;
    font-weight: 600;
    direction: ltr;
    display: inline-block;
    margin-right: 0.35rem;
}
.chatbot-dict-meaning {
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: #1f2937;
}
.chatbot-dict-translation {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-bottom: 0.6rem;
    font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}
.chatbot-dict-translation-line {
    display: flex;
    gap: 0.4rem;
    align-items: baseline;
    font-size: 1.05rem;
    color: #111827;
    font-weight: 600;
}
.chatbot-dict-translation-label {
    font-size: 0.8rem;
    color: #6b7280;
    font-weight: 600;
}
.chatbot-translation-text {
    margin-bottom: 0.6rem;
}
.chatbot-translation-label {
    font-weight: 700;
    margin-bottom: 0.2rem;
    color: #4c1d95;
}
.chatbot-tafseer-label {
    font-weight: 700;
    margin-bottom: 0.25rem;
}
.chatbot-tafseer-text {
    direction: rtl;
    text-align: right;
    line-height: 1.8;
}
.chatbot-audio {
    width: 100%;
    margin: 0.35rem 0 0.75rem;
    border-radius: 9999px;
}
.chatbot-audio-label {
    font-weight: 600;
    color: #4c1d95;
    margin-bottom: 0.3rem;
}
.chatbot-quran-nav {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.75rem;
}
.chatbot-quran-nav button {
    flex: 1;
    border-radius: 9999px;
    padding: 0.45rem 0.75rem;
    font-size: 0.85rem;
    font-weight: 600;
    background: #ede9fe;
    color: #4c1d95;
    border: 1px solid #ddd6fe;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.chatbot-quran-nav button:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    box-shadow: none;
}
.chatbot-quran-nav button:not(:disabled):hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 16px rgba(76, 29, 149, 0.18);
}
.chatbot-hadith-options {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin: 0.25rem 0 0.65rem;
}
.chatbot-hadith-option-btn {
    border: 1px solid rgba(148, 163, 184, 0.7);
    border-radius: 10px;
    background: #ffffff;
    color: #334155;
    padding: 0.42rem 0.65rem;
    font-size: 0.82rem;
    font-weight: 650;
    transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}
.chatbot-hadith-option-btn:hover {
    background: rgba(15, 23, 42, 0.04);
}
.chatbot-hadith-option-active {
    background: rgba(124, 58, 237, 0.10);
    border-color: rgba(124, 58, 237, 0.65);
    color: #5b21b6;
}
.chatbot-logo {
    width: 58px;
    height: 58px;
    border-radius: 9999px;
    object-fit: cover;
    background: transparent;
}
.chatbot-bot {
    align-self: flex-start;
    background: #ede9fe;
    color: #4c1d95;
}
.chatbot-user {
    align-self: flex-end;
    background: #7c3aed;
    color: #fff;
}
.chatbot-input {
    display: flex;
    gap: 0.5rem;
    padding: 0.75rem;
    border-top: 1px solid #e5e7eb;
    background: #fff;
}
.chatbot-input input {
    flex: 1;
    border: 1px solid #e5e7eb;
    border-radius: 9999px;
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
}
.chatbot-input button {
    background: #7c3aed;
    color: #fff;
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
}
.chatbot-quran-tools {
    display: grid;
    grid-template-columns: 1fr 70px 52px;
    gap: 0.4rem;
    padding: 0.6rem 0.75rem;
    border-top: 1px solid #eef2f7;
    background: #fbfbfe;
    align-items: center;
}
.chatbot-quran-tools select,
.chatbot-quran-tools input {
    border: 1px solid #e5e7eb;
    border-radius: 9999px;
    padding: 0.4rem 0.7rem;
    font-size: 0.85rem;
    width: 100%;
    min-width: 0;
}
.chatbot-quran-tools select {
    direction: rtl;
    text-align: right;
}
.chatbot-quran-tools input {
    min-width: 0;
    text-align: center;
}
.chatbot-quran-tools button {
    background: #7c3aed;
    color: #fff;
    border-radius: 9999px;
    padding: 0.4rem 0.9rem;
    font-size: 0.85rem;
    font-weight: 600;
}
.chatbot-quran-tools-hidden {
    display: none;
}
@media (max-width: 639px) {
    .chatbot-window {
        right: 1.25rem;
        left: 1.25rem;
        width: auto;
        max-width: 310px;
        bottom: 5rem;
        max-height: 70vh;
    }
    .chatbot-quran-tools {
        grid-template-columns: 1fr 62px 48px;
        gap: 0.35rem;
    }
    .chatbot-messages {
        height: 32vh;
    }
    .chatbot-input {
        padding: 0.5rem;
    }
    .chatbot-button {
        right: 0.75rem;
        bottom: 0.75rem;
    }
}
`;

const chatbotMarkup = `
<button id="chatbot-toggle" class="chatbot-button" aria-label="Open chatbot">
    <img class="chatbot-logo" src="aakchatbotlogo.png" alt="AAK Chatbot" />
</button>
<div id="chatbot-window" class="chatbot-window chatbot-hidden" aria-live="polite">
    <div class="chatbot-header">
        <span>Akademي Al Khayr Chat</span>
        <button id="chatbot-close" class="text-white/80 hover:text-white" aria-label="Close chatbot">
            <i class="fas fa-times"></i>
        </button>
    </div>
    <div class="chatbot-modes">
        <button id="mode-school" class="chatbot-mode-btn" type="button">School</button>
        <button id="mode-quran" class="chatbot-mode-btn chatbot-mode-active" type="button">Quranic</button>
        <button id="mode-hadeeth" class="chatbot-mode-btn" type="button">Hadeeth</button>
        <button id="mode-arabic" class="chatbot-mode-btn" type="button">Arabic</button>
    </div>
    <div id="chatbot-quran-tools" class="chatbot-quran-tools">
        <select id="chatbot-surah-select" aria-label="Select surah"></select>
        <input id="chatbot-ayah-input" type="number" min="1" placeholder="Ayah" />
        <button id="chatbot-quran-go" type="button">Go</button>
    </div>
    <div id="chatbot-messages" class="chatbot-messages">
        <div class="chatbot-message chatbot-bot">Hi! Ask about admissions, programs, fees, calendar, campus location, or contact info.</div>
    </div>
    <div class="chatbot-input">
        <input id="chatbot-input" type="text" placeholder="Type your question..." />
    </div>
</div>
`;

const ensureChatbotStyles = () => {
    if (document.getElementById('chatbot-styles')) return;
    const style = document.createElement('style');
    style.id = 'chatbot-styles';
    style.textContent = chatbotStyles;
    document.head.appendChild(style);
};

const ensureChatbotMarkup = () => {
    if (document.getElementById('chatbot-toggle')) return;
    const container = document.createElement('div');
    container.innerHTML = chatbotMarkup;
    document.body.appendChild(container);
};

const initChatbot = () => {
    ensureChatbotStyles();
    ensureChatbotMarkup();

    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const modeSchool = document.getElementById('mode-school');
    const modeQuran = document.getElementById('mode-quran');
    const modeHadeeth = document.getElementById('mode-hadeeth');
    const modeArabic = document.getElementById('mode-arabic');
    const chatbotQuranTools = document.getElementById('chatbot-quran-tools');
    const chatbotSurahSelect = document.getElementById('chatbot-surah-select');
    const chatbotAyahInput = document.getElementById('chatbot-ayah-input');
    const chatbotQuranGo = document.getElementById('chatbot-quran-go');
    let activeMode = 'quran';
    let lastMode = null;
    let tafsirEditionId = null;
    let surahListCache = null;
    let pendingSurahNumber = null;
    const surahAliasMap = {
        imran: 3,
        alimran: 3,
        aliimran: 3,
        aalimran: 3
    };
    const quranVariants = {
        قرد: 'قردة'
    };
    const arabicDictionaryDefaults = {
        الله: { arabic: 'الله', english: 'allah', malay: 'allah', exampleSearch: 'allah' },
        كتاب: { arabic: 'كتاب', english: 'book', malay: 'buku', exampleSearch: 'book', plural: 'كتب' },
        مدرسة: { arabic: 'مدرسة', english: 'school', malay: 'sekolah', exampleSearch: 'school', plural: 'مدارس' },
        طالب: { arabic: 'طالب', english: 'student', malay: 'pelajar', exampleSearch: 'student', plural: 'طلاب' },
        معلم: { arabic: 'معلم', english: 'teacher', malay: 'guru', exampleSearch: 'teacher', plural: 'معلمون' },
        قرآن: { arabic: 'قرآن', english: 'quran', malay: 'al-quran', exampleSearch: 'quran' },
        صلاة: { arabic: 'صلاة', english: 'prayer', malay: 'solat', exampleSearch: 'prayer' },
        صوم: { arabic: 'صوم', english: 'fasting', malay: 'puasa', exampleSearch: 'fasting' },
        زكاة: { arabic: 'زكاة', english: 'alms', malay: 'zakat', exampleSearch: 'alms' },
        صدقة: { arabic: 'صدقة', english: 'charity', malay: 'sedekah', exampleSearch: 'charity' },
        حج: { arabic: 'حج', english: 'pilgrimage', malay: 'haji', exampleSearch: 'pilgrimage' },
        دعاء: { arabic: 'دعاء', english: 'supplication', malay: 'doa', exampleSearch: 'supplication' },
        مسجد: { arabic: 'مسجد', english: 'mosque', malay: 'masjid', exampleSearch: 'mosque', plural: 'مساجد' },
        صبر: { arabic: 'صبر', english: 'patience', malay: 'sabar', exampleSearch: 'patience' },
        رحمة: { arabic: 'رحمة', english: 'mercy', malay: 'rahmat', exampleSearch: 'mercy' },
        نور: { arabic: 'نور', english: 'light', malay: 'cahaya', exampleSearch: 'light' },
        علم: { arabic: 'علم', english: 'knowledge', malay: 'ilmu', exampleSearch: 'knowledge' },
        إيمان: { arabic: 'إيمان', english: 'faith', malay: 'iman', exampleSearch: 'faith' },
        سلام: { arabic: 'سلام', english: 'peace', malay: 'damai', exampleSearch: 'peace' },
        خير: { arabic: 'خير', english: 'goodness', malay: 'kebaikan', exampleSearch: 'goodness' },
        شر: { arabic: 'شر', english: 'evil', malay: 'kejahatan', exampleSearch: 'evil' },
        حق: { arabic: 'حق', english: 'truth', malay: 'kebenaran', exampleSearch: 'truth' },
        جنة: { arabic: 'جنة', english: 'paradise', malay: 'syurga', exampleSearch: 'paradise' },
        نار: { arabic: 'نار', english: 'fire', malay: 'api', exampleSearch: 'fire' },
        ماء: { arabic: 'ماء', english: 'water', malay: 'air', exampleSearch: 'water' },
        شمس: { arabic: 'شمس', english: 'sun', malay: 'matahari', exampleSearch: 'sun', plural: 'شموس' },
        قمر: { arabic: 'قمر', english: 'moon', malay: 'bulan', exampleSearch: 'moon', plural: 'أقمار' },
        مفتاح: { arabic: 'مفتاح', english: 'key', malay: 'kunci', exampleSearch: 'key', plural: 'مفاتيح' },
        يوم: { arabic: 'يوم', english: 'day', malay: 'hari', exampleSearch: 'day', plural: 'أيام' },
        ليلة: { arabic: 'ليلة', english: 'night', malay: 'malam', exampleSearch: 'night', plural: 'ليالٍ' },
        وقت: { arabic: 'وقت', english: 'time', malay: 'masa', exampleSearch: 'time' },
        بيت: { arabic: 'بيت', english: 'house', malay: 'rumah', exampleSearch: 'house', plural: 'بيوت' },
        أب: { arabic: 'أب', english: 'father', malay: 'bapa', exampleSearch: 'father' },
        أم: { arabic: 'أم', english: 'mother', malay: 'ibu', exampleSearch: 'mother' },
        ولد: { arabic: 'ولد', english: 'boy', malay: 'budak lelaki', exampleSearch: 'boy', plural: 'أولاد' },
        بنت: { arabic: 'بنت', english: 'girl', malay: 'budak perempuan', exampleSearch: 'girl', plural: 'بنات' },
        بقرة: { arabic: 'بقرة', english: 'cow', malay: 'lembu', exampleSearch: 'cow', plural: 'بقر' },
        قرد: {
            arabic: 'قرد',
            english: 'monkey',
            malay: 'monyet',
            exampleSearch: 'monkey',
            plural: 'قرود',
            quranSearch: 'قردة'
        }
    };
    const arabicDictionaryStorageKey = 'aak_arabic_dictionary_v2';
    const loadArabicDictionary = () => {
        try {
            const raw = localStorage.getItem(arabicDictionaryStorageKey);
            const parsed = raw ? JSON.parse(raw) : null;
            return parsed && typeof parsed === 'object' ? parsed : null;
        } catch {
            return null;
        }
    };
    const persistArabicDictionary = (dictionary) => {
        try {
            localStorage.setItem(arabicDictionaryStorageKey, JSON.stringify(dictionary));
        } catch {}
    };
    let arabicDictionary = { ...arabicDictionaryDefaults, ...(loadArabicDictionary() || {}) };
    const arabicExampleHistoryStorageKey = 'aak_arabic_example_history_v1';
    const loadArabicExampleHistory = () => {
        try {
            const raw = localStorage.getItem(arabicExampleHistoryStorageKey);
            const parsed = raw ? JSON.parse(raw) : null;
            return parsed && typeof parsed === 'object' ? parsed : {};
        } catch {
            return {};
        }
    };
    const persistArabicExampleHistory = (history) => {
        try {
            localStorage.setItem(arabicExampleHistoryStorageKey, JSON.stringify(history));
        } catch {}
    };
    let arabicExampleHistory = loadArabicExampleHistory();
    const aiDictionaryEndpoints = [
        'https://libretranslate.de/translate',
        'https://translate.argosopentech.com/translate'
    ];
const fallbackHadithSnippets = [
    {
        arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
        english: 'Actions are judged by intentions, and each person will have what they intended.',
        reference: 'Sahih Bukhari 1',
        keywords: ['intentions', 'actions', 'niyyah', 'purpose', 'sincerity']
    },
    {
        arabic: 'الدِّينُ النَّصِيحَةُ',
        english: 'Religion is sincere advice.',
        reference: 'Sahih Muslim 55',
        keywords: ['advice', 'sincerity', 'nasihah', 'religion']
    },
    {
        arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
        english: 'None of you truly believes until he loves for his brother what he loves for himself.',
        reference: 'Sahih Bukhari 13',
        keywords: ['love', 'brotherhood', 'faith', 'belief']
    },
    {
        arabic: 'الصَّلَاةُ نُورٌ',
        english: 'Prayer is light.',
        reference: 'Sahih Muslim 223',
        keywords: ['prayer', 'light', 'salah']
    },
    {
        arabic: 'الصِّيَامُ جُنَّةٌ',
        english: 'Fasting is a shield.',
        reference: 'Sahih Bukhari 1904',
        keywords: ['fasting', 'shield', 'sawm', 'ramadan']
    },
    {
        arabic: 'وَالصَّدَقَةُ بُرْهَانٌ',
        english: 'Charity is a proof.',
        reference: 'Sahih Muslim 223',
        keywords: ['charity', 'sadaqah', 'proof']
    },
    {
        arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
        english: 'Whoever believes in Allah and the Last Day should say what is good or remain silent.',
        reference: 'Sahih Bukhari 6018',
        keywords: ['speech', 'silence', 'good words', 'faith']
    },
    {
        arabic: 'الْمُؤْمِنُ لَا يُلْدَغُ مِنْ جُحْرٍ وَاحِدٍ مَرَّتَيْنِ',
        english: 'A believer is not stung twice from the same hole.',
        reference: 'Sahih Bukhari 6133',
        keywords: ['wisdom', 'caution', 'believer', 'experience']
    },
    {
        arabic: 'إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَلَا إِلَى أَجْسَادِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ',
        english: 'Allah does not look at your appearance or your bodies, but He looks at your hearts.',
        reference: 'Sahih Muslim 2564',
        keywords: ['heart', 'intention', 'appearance', 'character']
    },
    {
        arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
        english: 'The best of you are those who learn the Qur’an and teach it.',
        reference: 'Sahih Bukhari 5027',
        keywords: ['quran', 'learn', 'teach', 'best']
    },
    {
        arabic: 'لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ',
        english: 'The strong person is not the one who overcomes others, but the one who controls himself when angry.',
        reference: 'Sahih Bukhari 6114',
        keywords: ['anger', 'patience', 'strength', 'self-control']
    },
    {
        arabic: 'مَنْ بَنَى مَسْجِدًا لِلَّهِ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ',
        english: 'Whoever builds a mosque for Allah, Allah will build for him a house in Paradise.',
        reference: 'Sahih Bukhari 450',
        keywords: ['mosque', 'paradise', 'build', 'reward']
    },
    {
        arabic: 'الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ',
        english: 'The merciful are shown mercy by the Most Merciful. Be merciful to those on earth and the One above the heavens will show mercy to you.',
        reference: 'Jami` at-Tirmidhi 1924 (Hasan Sahih)',
        keywords: ['mercy', 'rahmah', 'compassion']
    }
];

const hadithApiBase = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1';
const hadithCollections = {
    bukhari: { label: 'Sahih Bukhari', englishEdition: 'eng-bukhari', arabicEdition: 'ara-bukhari' },
    muslim: { label: 'Sahih Muslim', englishEdition: 'eng-muslim', arabicEdition: 'ara-muslim' },
    abudawud: { label: 'Sunan Abi Dawud', englishEdition: 'eng-abudawud', arabicEdition: 'ara-abudawud' },
    tirmidhi: { label: 'Jami` at-Tirmidhi', englishEdition: 'eng-tirmidhi', arabicEdition: 'ara-tirmidhi' },
    nasai: { label: "Sunan an-Nasa'i", englishEdition: 'eng-nasai', arabicEdition: 'ara-nasai' },
    ibnmajah: { label: 'Sunan Ibn Majah', englishEdition: 'eng-ibnmajah', arabicEdition: 'ara-ibnmajah' },
    malik: { label: 'Muwatta Malik', englishEdition: 'eng-malik', arabicEdition: 'ara-malik' },
    ahmad: { label: 'Musnad Ahmad', englishEdition: 'eng-ahmad', arabicEdition: 'ara-ahmad' },
    darimi: { label: 'Sunan ad-Darimi', englishEdition: 'eng-darimi', arabicEdition: 'ara-darimi' }
};
const hadithPrimarySearchCollections = ['bukhari', 'muslim'];
const hadithExtendedSearchCollections = ['tirmidhi', 'abudawud', 'nasai', 'ibnmajah', 'darimi'];
const hadithIndexCache = Object.keys(hadithCollections).reduce((acc, key) => {
    acc[key] = { english: null, arabic: null };
    return acc;
}, {});
const hadithDetailCache = new Map();
let unicodeMarkRegex = null;
try {
    unicodeMarkRegex = new RegExp('\\p{M}+', 'gu');
} catch {}
let unicodeFormatRegex = null;
let unicodeSymbolRegex = null;
try {
    unicodeFormatRegex = new RegExp('\\p{Cf}+', 'gu');
    unicodeSymbolRegex = new RegExp('\\p{So}+', 'gu');
} catch {}
const stripUnicodeMarks = (value) => {
    const raw = value || '';
    if (!raw) return '';
    let result = '';
    for (let i = 0; i < raw.length; i += 1) {
        const codePoint = raw.codePointAt(i);
        if (codePoint > 0xffff) i += 1;
        if (codePoint === 0x25cc) continue;
        if (codePoint >= 0x0300 && codePoint <= 0x036f) continue;
        if (codePoint >= 0x0610 && codePoint <= 0x061a) continue;
        if (codePoint >= 0x064b && codePoint <= 0x065f) continue;
        if (codePoint === 0x0670) continue;
        if (codePoint >= 0x06d6 && codePoint <= 0x06ed) continue;
        if (codePoint >= 0x08d3 && codePoint <= 0x08ff) continue;
        result += String.fromCodePoint(codePoint);
    }
    if (unicodeMarkRegex) return result.replace(unicodeMarkRegex, '');
    return result;
};
const stripUnicodeFormat = (value) => {
    const raw = value || '';
    if (unicodeFormatRegex) return raw.replace(unicodeFormatRegex, '');
    return raw.replace(/[\u00AD\u061C\u200B\u200C\u200D\u200E\u200F\u202A-\u202E\u2060\u2066-\u2069\uFEFF]/g, '');
};
const stripUnicodeSymbols = (value) => {
    const raw = value || '';
    if (unicodeSymbolRegex) return raw.replace(unicodeSymbolRegex, '');
    return raw
        .replace(/[\u0600-\u0605\u0608\u060B\u060E-\u060F]/g, '')
        .replace(/[\u06DD\u06DE\u06E9\u06D4]/g, '')
        .replace(/[\u25CC]/g, '');
};

    const addMessage = (text, type) => {
        const message = document.createElement('div');
        message.className = `chatbot-message ${type === 'user' ? 'chatbot-user' : 'chatbot-bot'}`;
        message.textContent = text;
        chatbotMessages.appendChild(message);
        return message;
    };

    const addMessageParts = (parts, type) => {
        const message = document.createElement('div');
        message.className = `chatbot-message ${type === 'user' ? 'chatbot-user' : 'chatbot-bot'}`;
        parts.forEach((part) => {
            if (!part) return;
            if (typeof part === 'string') {
                message.appendChild(document.createTextNode(part));
                return;
            }
            if (part && typeof part === 'object' && part.href) {
                const link = document.createElement('a');
                link.href = part.href;
                link.textContent = part.label || part.href;
                link.className = 'chatbot-link';
                if (part.external) {
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                }
                message.appendChild(link);
            }
        });
        chatbotMessages.appendChild(message);
        return message;
    };

    const scrollMessageToTop = (message) => {
        if (!message) return;
        message.scrollIntoView({ block: 'start' });
    };

    const getSchoolReply = (text) => {
        const value = text.toLowerCase();
        if (value.includes('fee') || value.includes('fees') || value.includes('yuran') || value.includes('bayaran')) {
            return [
                'Fees details are here: ',
                { label: 'Fees payment', href: 'fees.html' },
                ' and ',
                {
                    label: 'Guidebook AAK 2026',
                    href: 'Download/GuideBook%20AAK_2026%20(1).pdf',
                    external: true
                },
                '.'
            ];
        }
        if (value.includes('chalet') || value.includes('booking') || value.includes('stay')) {
            return 'AAK Chalet booking: RM149 per night, check-in after 2:00 PM, check-out before 12:00 PM. Amenities include a master bedroom (queen bed), a spacious hall (single bed + sofa set), and a dry pantry. Check-in contact: En Hairozaman, 012-263 7082.';
        }
        if (value.includes('form') || value.includes('forms') || value.includes('borang')) {
            return [
                'Forms available: ',
                { label: 'Outing Form', href: 'outing_form.html' },
                ', ',
                { label: 'Parcel Delivery Form', href: 'parcel_form.html' },
                ', ',
                { label: 'Transportation/Pickup Form', href: 'transportation_form.html' },
                ', ',
                { label: 'Activity Form', href: 'concern_form.html' },
                ', and ',
                { label: 'Suggestion/Complain Form', href: 'suggestion_form.html' },
                '. You can also visit the full ',
                { label: 'Forms page', href: 'forms.html' },
                '.'
            ];
        }
        if (value.includes('parcel') || value.includes('delivery') || value.includes('courier') || value.includes('tracking') || value.includes('poslaju') || value.includes('kurier')) {
            return [
                'Use the ',
                { label: 'Parcel Delivery Form', href: 'parcel_form.html' },
                '. You will need the student name, delivery date, courier service, tracking number, parcel content, sender name, contact number, and relationship.'
            ];
        }
        if (value.includes('outing')) {
            return ['Outing requests are submitted via the ', { label: 'Outing Form', href: 'outing_form.html' }, '.'];
        }
        if (value.includes('transport') || value.includes('pickup') || value.includes('pick up') || value.includes('pengangkutan') || value.includes('ambil')) {
            return [
                'Transportation or pickup requests are submitted via the ',
                { label: 'Transportation/Pickup Form', href: 'transportation_form.html' },
                '.'
            ];
        }
        if (value.includes('suggestion') || value.includes('complain') || value.includes('complaint') || value.includes('cadangan') || value.includes('aduan')) {
            return [
                'Suggestions or complaints can be sent using the ',
                { label: 'Suggestion/Complain Form', href: 'suggestion_form.html' },
                '.'
            ];
        }
        if (value.includes('activity form') || value.includes('activity') || value.includes('aktiviti')) {
            return [
                'Activity-related requests are submitted via the ',
                { label: 'Activity Form', href: 'concern_form.html' },
                '.'
            ];
        }
        if (
            value.includes('co-curriculum') ||
            value.includes('co curriculum') ||
            value.includes('co-curricular') ||
            value.includes('cocurriculum') ||
            value.includes('cocurricular') ||
            value.includes('club') ||
            value.includes('clubs') ||
            value.includes('society') ||
            value.includes('societies') ||
            value.includes('kelab') ||
            value.includes('persatuan') ||
            value.includes('kokurikulum') ||
            value.includes('ko kurikulum') ||
            value.includes('ko-kurikulum') ||
            value.includes('extracurricular') ||
            value.includes('extra curricular') ||
            value.includes('sukan') ||
            value.includes('sports') ||
            value.includes('seni') ||
            value.includes('arts')
        ) {
            return [
                'English: For clubs & co-curriculum (sports, arts, societies), please visit ',
                { label: 'Clubs & Co-Curriculum', href: 'co_curriculum.html#clubs' },
                '. ',
                'BM: Untuk kelab & kokurikulum (sukan, seni, persatuan), sila lawati ',
                { label: 'Kelab & Kokurikulum', href: 'co_curriculum.html#clubs' },
                '.'
            ];
        }
        if (value.includes('program') || value.includes('course') || value.includes('curriculum') || value.includes('kurikulum')) {
            return 'We offer integrated Hifz, Arabic, and academic modules with holistic programs across primary, secondary, and co-curriculum activities.';
        }
        if (value.includes('apply') || value.includes('admission') || value.includes('register') || value.includes('daftar') || value.includes('pendaftaran') || value.includes('permohonan') || value.includes('kemasukan')) {
            return ['Apply here: ', { label: 'Student Registration', href: 'registration.html' }, '.'];
        }
        if (value.includes('calendar') || value.includes('calender') || value.includes('takwim') || value.includes('kalendar')) {
            return [
                'Academic calendar: ',
                { label: 'AAK Takwim 2026', href: 'Download/AAK%20TAKWIM%202026.pdf', external: true },
                '.'
            ];
        }
        if (value.includes('tahfiz') || value.includes('hifz') || value.includes('memorisation') || value.includes('quran memorisation') || value.includes('hafazan')) {
            return 'Our Quran memorisation program uses the Photo Memory Memorisation Method (PMMM) for strong retention.';
        }
        if (value.includes('pmmm') || value.includes('photo memory')) {
            return 'PMMM stands for Photo Memory Memorisation Method, a visualisation-based approach used in our Quran memorisation program.';
        }
        if (value.includes('arabic') || value.includes('bahasa arab') || value.includes('language of the quran')) {
            return 'Arabic is offered as a core program focused on the language of the Quran.';
        }
        if (value.includes('character') || value.includes('akhlak') || value.includes('leadership') || value.includes('sahsiah')) {
            return 'Character development is a core pillar focused on building future leaders with strong values.';
        }
        if (value.includes('primary') || value.includes('kssr') || value.includes('rendah')) {
            return 'Primary education blends the KSSR syllabus with Islamic values.';
        }
        if (value.includes('secondary') || value.includes('kssm') || value.includes('cambridge') || value.includes('menengah')) {
            return 'Secondary education follows a dual syllabus approach (KSSM & Cambridge) with Islamic values.';
        }
        if (value.includes('online') || value.includes('kelas online') || value.includes('remote') || value.includes('dalam talian')) {
            return 'Online Tahfiz & Arabic is available for flexible learning.';
        }
        if (value.includes('eco campus') || value.includes('camp') || value.includes('resort') || value.includes('white resort')) {
            return 'Our eco campus is at White Resort Camp, Kampung Genting, Balik Pulau, Penang.';
        }
        if (value.includes('learning style') || value.includes('ability based') || value.includes('learning approach') || value.includes('gaya pembelajaran')) {
            return 'Our learning style is ability-based learning to support students at their level.';
        }
        if (value.includes('teacher') || value.includes('principal') || value.includes('staff') || value.includes('educator') || value.includes('guru') || value.includes('pengetua')) {
            return 'Our educators and leadership details can be shared upon request. Please contact us for more.';
        }
        if (value.includes('admission period') || value.includes('intake') || value.includes('deadline') || value.includes('tarikh akhir') || value.includes('pengambilan')) {
            return 'Intake is open throughout the year. Contact us to get the latest availability and steps.';
        }
        if (value.includes('contact') || value.includes('email') || value.includes('phone') || value.includes('whatsapp') || value.includes('hubungi')) {
            return [
                'Reach us via ',
                { label: 'WhatsApp', href: 'https://wa.me/60193818616', external: true },
                ' or ',
                { label: 'email', href: 'mailto:akademialkhayrofficial@gmail.com' },
                '.'
            ];
        }
        if (value.includes('location') || value.includes('address') || value.includes('visit') || value.includes('alamat') || value.includes('lawat') || value.includes('lokasi') || value.includes('kampus')) {
            return 'Akademi Al Khayr is located at White Resort Camp, Kampung Genting, 11000 Balik Pulau, Penang.';
        }
        if (value.includes('time') || value.includes('hours') || value.includes('schedule') || value.includes('masa')) {
            return 'School hours are shared during registration. Contact us if you need the schedule.';
        }
        return 'I can help with admissions, programs, fees, forms, calendar, campus location, or contact info. Ask about any of these.';
    };

    const getSurahList = async () => {
        if (surahListCache !== null) return surahListCache;
        try {
            const res = await fetch('https://api.alquran.cloud/v1/surah');
            const data = await res.json();
            surahListCache = Array.isArray(data?.data) ? data.data : [];
        } catch {
            surahListCache = [];
        }
        return surahListCache;
    };

    const normalizeSurah = (value) => {
        return value.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, '').trim();
    };

    const matchSurahNumberByName = async (name) => {
        const list = await getSurahList();
        const inputNorm = normalizeSurah(name);
        if (!inputNorm) return null;
        if (surahAliasMap[inputNorm]) {
            return surahAliasMap[inputNorm];
        }
        const inputNoAl = inputNorm.replace(/^al/, '');
        if (inputNorm === 'baqarah' || inputNoAl === 'baqarah') {
            return 2;
        }
        for (const surah of list) {
            const candidates = [surah.englishName, surah.englishNameTranslation];
            for (const candidate of candidates) {
                if (!candidate) continue;
                const candidateNorm = normalizeSurah(candidate);
                const candidateNoAl = candidateNorm.replace(/^al/, '');
                if (
                    inputNorm === candidateNorm ||
                    inputNoAl === candidateNorm ||
                    inputNorm === candidateNoAl
                ) {
                    return surah.number;
                }
            }
        }
        return null;
    };

    const parseAyahRef = async (text) => {
        const input = text.toLowerCase().trim();
        if (!input) return null;
        const directMatch = input.match(/\b(\d{1,3})\s*[:.]\s*(\d{1,3})\b/);
        if (directMatch) {
            const surahNumber = Number(directMatch[1]);
            const ayahNumber = Number(directMatch[2]);
            if (!Number.isFinite(surahNumber) || !Number.isFinite(ayahNumber)) return null;
            return `${surahNumber}:${ayahNumber}`;
        }
        const wordMatch = input.match(/\b(surah|sura|surat|chapter)\s+([a-z\s]+)\s+(?:ayah|ayat|verse)\s*(\d{1,3})\b/);
        if (wordMatch) {
            const surahName = wordMatch[2].trim();
            const ayahNumber = Number(wordMatch[3]);
            if (!surahName || !Number.isFinite(ayahNumber)) return null;
            const surahNumber = await matchSurahNumberByName(surahName);
            if (!surahNumber) return null;
            return `${surahNumber}:${ayahNumber}`;
        }
        const shortMatch = input.match(/\b([a-z]+)\s+(\d{1,3})\b/);
        if (shortMatch) {
            const surahName = shortMatch[1].trim();
            const ayahNumber = Number(shortMatch[2]);
            if (!surahName || !Number.isFinite(ayahNumber)) return null;
            const surahNumber = await matchSurahNumberByName(surahName);
            if (!surahNumber) return null;
            return `${surahNumber}:${ayahNumber}`;
        }
        if (pendingSurahNumber) {
            const ayahNumber = Number(input.match(/\d{1,3}/)?.[0] || '');
            if (Number.isFinite(ayahNumber)) {
                const ref = `${pendingSurahNumber}:${ayahNumber}`;
                pendingSurahNumber = null;
                return ref;
            }
        }
        return null;
    };

    const parsePageNumber = (text) => {
        const input = text.toLowerCase().trim();
        const match = input.match(/\b(page|pg|halaman)\s*(\d{1,3})\b/);
        if (!match) return null;
        const page = Number(match[2]);
        if (!Number.isFinite(page) || page < 1 || page > 604) return null;
        return page;
    };

    const parseTranslationSearchTerm = (text) => {
        const input = text.toLowerCase().trim();
        if (!input || /\d/.test(input)) return null;
        const keywordMatch = input.match(/(?:search|meaning|word|find)\s+(.+)/);
        const term = (keywordMatch ? keywordMatch[1] : input).trim();
        if (!term || term.length < 3) return null;
        if (!/^[a-z\s'-]+$/.test(term)) return null;
        return term;
    };

    const normalizeArabicTerm = (text) => {
        const normalized = typeof (text || '').normalize === 'function' ? (text || '').normalize('NFC') : text || '';
        return stripUnicodeSymbols(stripUnicodeFormat(stripUnicodeMarks(normalized)))
            .replace(/\u0640/g, '')
            .replace(/[۝۞۩﴿﴾]/g, '')
            .replace(/[•·●○◌]/g, '')
            .replace(/[\u060C\u061B\u061F\u00B7\u2219\u22C5\u2022\u25CF\u25CC\u06D4]/g, '')
            .replace(/[^\u0600-\u06FF\s]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    };

    const normalizeArabicForSearch = (text) => {
        const normalized =
            typeof (text || '').normalize === 'function' ? (text || '').normalize('NFC') : text || '';
        return stripUnicodeSymbols(stripUnicodeFormat(stripUnicodeMarks(normalized)))
            .replace(/\u0640/g, '')
            .replace(/[۝۞۩﴿﴾]/g, ' ')
            .replace(/[•·●○◌]/g, ' ')
            .replace(/[\u060C\u061B\u061F\u00B7\u2219\u22C5\u2022\u25CF\u25CC\u06D4]/g, ' ')
            .replace(/[^\u0600-\u06FF]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    };

    const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const normalizeArabicWithMap = (text) => {
        const raw = text || '';
        const normalizedChars = [];
        const indexMap = [];
        let lastWasSpace = false;
        for (let i = 0; i < raw.length; i += 1) {
            const char = raw[i];
            if (/[\u064B-\u065F\u0670\u06D6-\u06ED]/.test(char) || char === '\u0640') {
                continue;
            }
            if (/[\u0600-\u06FF]/.test(char)) {
                normalizedChars.push(char);
                indexMap.push(i);
                lastWasSpace = false;
                continue;
            }
            if (/\s/.test(char)) {
                if (!lastWasSpace) {
                    normalizedChars.push(' ');
                    indexMap.push(i);
                    lastWasSpace = true;
                }
                continue;
            }
            if (!lastWasSpace) {
                normalizedChars.push(' ');
                indexMap.push(i);
                lastWasSpace = true;
            }
        }
        return { normalized: normalizedChars.join('').trim(), indexMap };
    };

    const findArabicWordMatchRange = (text, term) => {
        const normalizedTerm = normalizeArabicTerm(term || '');
        if (!normalizedTerm) return null;
        const { normalized, indexMap } = normalizeArabicWithMap(text);
        if (!normalized) return null;
        const matcher = new RegExp(`(^|\\s)(${escapeRegExp(normalizedTerm)})(?=\\s|$)`);
        const match = normalized.match(matcher);
        if (!match || match.index == null) return null;
        const termStart = match.index + (match[1]?.length || 0);
        const termEnd = termStart + match[2].length;
        if (termStart >= indexMap.length || termEnd - 1 >= indexMap.length) return null;
        if (!indexMap[termStart] || !indexMap[termEnd - 1]) return null;
        return { start: indexMap[termStart], end: indexMap[termEnd - 1] + 1 };
    };

    const containsArabicWord = (text, term) => {
        const normalizedText = normalizeArabicForSearch(text);
        const normalizedTerm = normalizeArabicForSearch(term);
        if (!normalizedText || !normalizedTerm) return false;
        const pattern = new RegExp(`(^|\\s)${escapeRegExp(normalizedTerm)}(\\s|$)`);
        return pattern.test(normalizedText);
    };

    const simplifyHadithArabic = (text) => {
        const normalized =
            typeof (text || '').normalize === 'function' ? (text || '').normalize('NFC') : text || '';
        const raw = stripUnicodeSymbols(stripUnicodeFormat(stripUnicodeMarks(normalized)))
            .replace(/\u0640/g, '')
            .replace(/[۝۞۩﴿﴾]/g, '')
            .replace(/[•·●○◌]/g, '')
            .replace(/[^\u0621-\u063A\u0641-\u064A\u0660-\u0669\u0671-\u06D3\u06FA-\u06FC\uFDF0-\uFDFF\s]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        if (!raw) return '';
        const normalizeCandidate = (value) => {
            return (value || '')
                .replace(/^[\s:：،-]+/, '')
                .replace(/[\"«»]/g, '')
                .replace(/\s+/g, ' ')
                .trim();
        };

        const withEllipsis = (value, _truncated) => {
            const candidate = normalizeCandidate(value);
            if (!candidate) return '';
            if (/^عن(\s|$)/.test(candidate)) return candidate;
            return candidate.startsWith('…') || candidate.startsWith('...') ? candidate : `… ${candidate}`;
        };

        const markers = [
            'عن النبي',
            'عن النبى',
            'عن رسول الله',
            'قال رسول الله',
            'قال النبي',
            'قال النبى',
            'أن رسول الله',
            'أن النبي',
            'أن النبى'
        ];

        const markerIndex = markers
            .map((marker) => ({ marker, index: raw.indexOf(marker) }))
            .filter((entry) => entry.index >= 0)
            .sort((a, b) => a.index - b.index)[0];

        const anWordPattern = /(^|\s)(عن)(?=\s)/g;
        const findLastAnBefore = (limitIndex) => {
            const segment = raw.slice(0, Math.max(0, limitIndex));
            anWordPattern.lastIndex = 0;
            let match = null;
            let last = null;
            while ((match = anWordPattern.exec(segment)) !== null) {
                last = match.index + (match[1]?.length || 0);
            }
            return typeof last === 'number' ? last : -1;
        };

        const findFirstAn = () => {
            const match = raw.match(/(^|\s)عن(?=\s)/);
            if (!match || match.index == null) return -1;
            return match.index + (match[1]?.length || 0);
        };

        const chooseStartFromAn = () => {
            if (raw.startsWith('عن ')) return { start: 0, truncated: false };
            if (markerIndex) {
                const startFromAn = findLastAnBefore(markerIndex.index + markerIndex.marker.length);
                if (startFromAn >= 0) return { start: startFromAn, truncated: true };
                return { start: markerIndex.index, truncated: markerIndex.index > 0 };
            }
            const firstAn = findFirstAn();
            if (firstAn >= 0) return { start: firstAn, truncated: true };
            return { start: 0, truncated: false };
        };

        const anStart = chooseStartFromAn();
        if (anStart.start > 0 || raw.startsWith('عن ')) {
            const candidate = raw.slice(anStart.start);
            const normalizedCandidate = normalizeCandidate(candidate);
            if (normalizedCandidate && normalizedCandidate.length >= 10 && normalizedCandidate.startsWith('عن')) {
                return withEllipsis(normalizedCandidate, anStart.truncated);
            }
        }

        if (markerIndex) {
            const candidate = raw.slice(markerIndex.index);
            const normalizedCandidate = normalizeCandidate(candidate);
            if (normalizedCandidate && normalizedCandidate.length >= 10) {
                return withEllipsis(normalizedCandidate, markerIndex.index > 0);
            }
        }

        const probe = raw.slice(0, 380);
        const pattern = /(قَالَتْ|قَالَ|يَقُولُ)\s*[:：،]?\s*/g;
        let lastIndex = -1;
        let lastMatchLen = 0;
        let match = null;
        while ((match = pattern.exec(probe)) !== null) {
            lastIndex = match.index;
            lastMatchLen = match[0].length;
        }
        if (lastIndex >= 0) {
            const candidate = raw.slice(lastIndex + lastMatchLen);
            const normalizedCandidate = normalizeCandidate(candidate);
            if (normalizedCandidate && normalizedCandidate.length >= 10) {
                return withEllipsis(normalizedCandidate, lastIndex > 0);
            }
        }

        return normalizeCandidate(raw);
    };

    const simplifyHadithEnglish = (text) => {
        const raw = (text || '').replace(/\s+/g, ' ').trim();
        if (!raw) return '';
        const lower = raw.toLowerCase();
        if (
            lower.startsWith('narrated') ||
            lower.startsWith('reported') ||
            lower.startsWith('it was narrated') ||
            lower.startsWith('it is narrated')
        ) {
            const colonIndex = raw.indexOf(':');
            if (colonIndex >= 0 && colonIndex < 180) {
                const candidate = raw.slice(colonIndex + 1).trim();
                if (candidate && candidate.length >= 10) return candidate;
            }
        }
        return raw;
    };

    const normalizeLatinText = (text) => {
        return (text || '')
            .toLowerCase()
            .replace(/[^a-z0-9\s'-]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    };

    const tokenizeLatinText = (text) => {
        const normalized = normalizeLatinText(text);
        if (!normalized) return [];
        return normalized.split(' ').filter((token) => token.length >= 3);
    };

    const extractArabicTokens = (text) => {
        const rawTokens = (text || '').match(/[\u0600-\u06FF]+/g) || [];
        return rawTokens.map((token) => normalizeArabicTerm(token)).filter(Boolean);
    };

    const parseHadithReferenceInput = (text) => {
        const input = (text || '').toLowerCase();
        const match = input.match(
            /(bukhari|muslim|nasai|nasa'i|abu\s*dawud|abudawud|tirmidhi|ibn\s*majah|ibnmajah|malik|muwatta|ahmad|darimi)\s*(\d+)/i
        );
        if (!match) return null;
        const rawKey = match[1].replace(/[^a-z]/g, '');
        const number = Number(match[2]);
        if (!Number.isFinite(number)) return null;
        const collectionKeyMap = {
            bukhari: 'bukhari',
            muslim: 'muslim',
            abudawud: 'abudawud',
            nasai: 'nasai',
            tirmidhi: 'tirmidhi',
            ibnmajah: 'ibnmajah',
            malik: 'malik',
            muwatta: 'malik',
            ahmad: 'ahmad',
            darimi: 'darimi'
        };
        const collectionKey = collectionKeyMap[rawKey] || null;
        if (!collectionKey) return null;
        return { collectionKey, number };
    };

    const fetchHadithEdition = async (collectionKey, lang) => {
        const collection = hadithCollections[collectionKey];
        if (!collection) return null;
        const edition =
            lang === 'arabic' ? collection.arabicEdition : collection.englishEdition;
        if (!edition) return null;
        const url = `${hadithApiBase}/editions/${edition}.min.json`;
        try {
            const res = await fetch(url);
            if (!res.ok) return null;
            return await res.json();
        } catch {
            return null;
        }
    };

    const loadHadithIndex = async (collectionKey, lang) => {
        const cache = hadithIndexCache[collectionKey];
        if (!cache) return null;
        if (lang === 'arabic') {
            if (cache.arabic) return cache.arabic;
            cache.arabic = await fetchHadithEdition(collectionKey, 'arabic');
            return cache.arabic;
        }
        if (cache.english) return cache.english;
        cache.english = await fetchHadithEdition(collectionKey, 'english');
        return cache.english;
    };

    const scoreEnglishMatch = (text, tokens) => {
        const normalized = normalizeLatinText(text);
        if (!normalized) return 0;
        let score = 0;
        tokens.forEach((token) => {
            if (normalized.includes(token)) {
                score += 1;
            }
        });
        return score;
    };

    const scoreArabicMatch = (text, tokens) => {
        if (!text) return 0;
        let score = 0;
        tokens.forEach((token) => {
            if (containsArabicWord(text, token)) {
                score += 1;
            }
        });
        return score;
    };

    const isSahihGrade = (grades) => {
        if (!Array.isArray(grades) || !grades.length) return false;
        return grades.some((entry) => {
            const grade = (entry?.grade || '').toString().toLowerCase();
            return grade.includes('sahih');
        });
    };

    const isAuthenticHadith = (collectionKey, hadith) => {
        if (hadithPrimarySearchCollections.includes(collectionKey)) return true;
        return isSahihGrade(hadith?.grades);
    };

    const searchHadithCollection = async (collectionKey, tokens, lang) => {
        if (!tokens.length) return [];
        const index = await loadHadithIndex(collectionKey, lang);
        const hadiths = Array.isArray(index?.hadiths) ? index.hadiths : [];
        const matches = [];
        hadiths.forEach((hadith) => {
            if (!isAuthenticHadith(collectionKey, hadith)) return;
            const text = hadith?.text || '';
            const score = lang === 'arabic' ? scoreArabicMatch(text, tokens) : scoreEnglishMatch(text, tokens);
            if (score > 0) {
                matches.push({
                    collectionKey,
                    number: hadith.hadithnumber || hadith.arabicnumber || hadith.number,
                    score
                });
            }
        });
        return matches;
    };

    const fetchHadithDetail = async (collectionKey, number) => {
        const cacheKey = `${collectionKey}:${number}`;
        if (hadithDetailCache.has(cacheKey)) {
            return hadithDetailCache.get(cacheKey);
        }
        const collection = hadithCollections[collectionKey];
        if (!collection) return null;
        const englishEdition = collection.englishEdition;
        const arabicEdition = collection.arabicEdition;
        const englishUrl = `${hadithApiBase}/editions/${englishEdition}/${number}.min.json`;
        const arabicUrl = `${hadithApiBase}/editions/${arabicEdition}/${number}.min.json`;
        try {
            const [englishRes, arabicRes] = await Promise.allSettled([fetch(englishUrl), fetch(arabicUrl)]);
            const englishData =
                englishRes.status === 'fulfilled' && englishRes.value.ok ? await englishRes.value.json() : null;
            const arabicData =
                arabicRes.status === 'fulfilled' && arabicRes.value.ok ? await arabicRes.value.json() : null;
            const englishHadith = Array.isArray(englishData?.hadiths) ? englishData.hadiths[0] : null;
            const arabicHadith = Array.isArray(arabicData?.hadiths) ? arabicData.hadiths[0] : null;
            const gradeProbe = englishHadith?.grades || arabicHadith?.grades;
            if (!hadithPrimarySearchCollections.includes(collectionKey) && !isSahihGrade(gradeProbe)) {
                return null;
            }
            const englishText = englishHadith?.text || '';
            const arabicText = arabicHadith?.text || '';
            const hadithNumber = englishHadith?.hadithnumber || arabicHadith?.hadithnumber || number;
            if (!englishText && !arabicText) return null;
            const referenceLabel = `${collection.label} ${hadithNumber}`;
            const detail = {
                collectionKey,
                arabic: arabicText,
                english: englishText,
                reference: referenceLabel
            };
            hadithDetailCache.set(cacheKey, detail);
            return detail;
        } catch {
            return null;
        }
    };

    const searchFallbackHadiths = (text) => {
        const tokens = tokenizeLatinText(text);
        const arabicTokens = extractArabicTokens(text);
        const matches = fallbackHadithSnippets.filter((snippet) => {
            if (arabicTokens.length) {
                return arabicTokens.some((token) => containsArabicWord(snippet.arabic, token));
            }
            if (!tokens.length) return false;
            const englishText = normalizeLatinText(snippet.english);
            const keywordText = normalizeLatinText((snippet.keywords || []).join(' '));
            return tokens.some((token) => englishText.includes(token) || keywordText.includes(token));
        });
        return matches;
    };

    const searchHadithByText = async (text) => {
        const arabicTokens = extractArabicTokens(text);
        const latinTokens = tokenizeLatinText(text);
        const useArabic = arabicTokens.length > 0;
        const tokens = useArabic ? arabicTokens : latinTokens;
        if (!tokens.length) return [];
        const lang = useArabic ? 'arabic' : 'english';
        const allMatches = [];
        for (const collectionKey of hadithPrimarySearchCollections) {
            const matches = await searchHadithCollection(collectionKey, tokens, lang);
            allMatches.push(...matches);
        }
        const unique = new Map();
        allMatches.forEach((match) => {
            const key = `${match.collectionKey}:${match.number}`;
            const existing = unique.get(key);
            if (!existing || match.score > existing.score) {
                unique.set(key, match);
            }
        });
        const primaryResults = Array.from(unique.values()).sort((a, b) => b.score - a.score).slice(0, 3);
        if (primaryResults.length >= 3) return primaryResults;

        const extendedMatches = [];
        for (const collectionKey of hadithExtendedSearchCollections) {
            const matches = await searchHadithCollection(collectionKey, tokens, lang);
            extendedMatches.push(...matches);
            if (extendedMatches.length >= 60) break;
        }
        extendedMatches.forEach((match) => {
            const key = `${match.collectionKey}:${match.number}`;
            const existing = unique.get(key);
            if (!existing || match.score > existing.score) {
                unique.set(key, match);
            }
        });
        return Array.from(unique.values()).sort((a, b) => b.score - a.score).slice(0, 3);
    };

    const findHadithSnippet = (term) => {
        if (!term) return null;
        const normalizedTerm = normalizeArabicTerm(term);
        if (!normalizedTerm) return null;
        const match = fallbackHadithSnippets.find((snippet) => containsArabicWord(snippet.arabic, normalizedTerm));
        return match || null;
    };

    const parseArabicTerm = (text) => {
        const cleaned = normalizeArabicTerm(text);
        if (!cleaned) return null;
        const match = cleaned.match(/[\u0600-\u06FF]+/);
        return match ? match[0] : null;
    };

    const normalizeEnglishTerm = (text) => {
        const cleaned = text.toLowerCase().replace(/[^a-z\s'-]/g, ' ').replace(/\s+/g, ' ').trim();
        if (!cleaned) return null;
        const match = cleaned.match(/[a-z]{3,}/);
        return match ? match[0] : null;
    };

    const normalizeMalayTerm = (text) => {
        const cleaned = text.toLowerCase().replace(/[^a-z\s'-]/g, ' ').replace(/\s+/g, ' ').trim();
        if (!cleaned) return null;
        const match = cleaned.match(/[a-z]{3,}/);
        return match ? match[0] : null;
    };

    const hasArabicLetters = (text) => /[\u0600-\u06FF]/.test(text);

    const getHadithReply = async (text) => {
        const input = (text || '').trim();
        if (!input) {
            const random = fallbackHadithSnippets[Math.floor(Math.random() * fallbackHadithSnippets.length)];
            return {
                items: random ? [random] : [],
                isFallback: true
            };
        }
        const refRequest = parseHadithReferenceInput(input);
        if (refRequest) {
            const direct = await fetchHadithDetail(refRequest.collectionKey, refRequest.number);
            if (direct) {
                return { items: [direct], isFallback: false };
            }
        }
        const matches = await searchHadithByText(input);
        if (matches.length) {
            const details = await Promise.all(
                matches.map((match) => fetchHadithDetail(match.collectionKey, match.number))
            );
            const items = details.filter(Boolean);
            if (items.length) {
                const sourceLabels = Array.from(
                    new Set(
                        items
                            .map((item) => hadithCollections[item.collectionKey]?.label)
                            .filter(Boolean)
                    )
                );
                const includesExtended = items.some(
                    (item) => item.collectionKey && !hadithPrimarySearchCollections.includes(item.collectionKey)
                );
                return {
                    items,
                    isFallback: false,
                    searchSummary: sourceLabels.length
                        ? `Top matches from: ${sourceLabels.join(', ')}.${
                              includesExtended ? ' (Sahih-graded only for non-Bukhari/Muslim.)' : ''
                          }`
                        : 'Top matches from authentic hadeeth collections.'
                };
            }
        }
        const fallbackMatches = searchFallbackHadiths(input);
        if (fallbackMatches.length) {
            return {
                items: fallbackMatches.slice(0, 3),
                isFallback: true,
                searchSummary: 'Closest matches from curated sahih hadiths.'
            };
        }
        const random = fallbackHadithSnippets[Math.floor(Math.random() * fallbackHadithSnippets.length)];
        return {
            items: random ? [random] : [],
            isFallback: true
        };
    };

    const translateText = async (text, source, target) => {
        const q = (text || '').trim();
        if (!q || !target) return null;
        const sl = source || 'auto';

        const tryLibreTranslate = async (endpoint) => {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ q, source: sl, target, format: 'text' })
            });
            const data = await res.json();
            const translated = data?.translatedText?.trim();
            return translated || null;
        };

        for (const endpoint of aiDictionaryEndpoints) {
            try {
                const translated = await tryLibreTranslate(endpoint);
                if (translated) return translated;
            } catch {}
        }

        try {
            const res = await fetch(
                `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${encodeURIComponent(
                    sl
                )}&tl=${encodeURIComponent(target)}&dt=t&q=${encodeURIComponent(q)}`
            );
            const data = await res.json();
            const segments = Array.isArray(data?.[0]) ? data[0] : [];
            const translated = segments.map((seg) => (Array.isArray(seg) ? seg[0] : '')).join('').trim();
            return translated || null;
        } catch {
            return null;
        }
    };

    const escapeHtml = (text) => {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    const stripAyahMarkers = (text) => {
        return (text || '')
            .replace(/[\u06D6-\u06ED]/g, '')
            .replace(/[\u08D4-\u08FE]/g, '');
    };

    const enhanceWaqfSymbols = (text) => {
        const escaped = escapeHtml(stripAyahMarkers(text));
        return escaped;
    };

    const extractSurahNameOnly = async (text) => {
        const input = text.toLowerCase().trim();
        if (/\d/.test(input)) return null;
        const namePart = input.replace(/surah|ayah|verse|ayat/gi, ' ').trim();
        if (!namePart) return null;
        const surahNumber = await matchSurahNumberByName(namePart);
        if (!surahNumber) return null;
        return { surahNumber, surahName: namePart };
    };

    const getTafsirEditionId = async () => {
        if (tafsirEditionId !== null) return tafsirEditionId;
        try {
            const res = await fetch('https://api.alquran.cloud/v1/edition/type/tafsir');
            const data = await res.json();
            const editions = Array.isArray(data?.data) ? data.data : [];
            const english = editions.find((ed) => ed.language === 'en' && ed.format === 'text');
            const anyText = editions.find((ed) => ed.format === 'text');
            tafsirEditionId = (english || anyText || {}).identifier || null;
        } catch {
            tafsirEditionId = null;
        }
        return tafsirEditionId;
    };

    const buildRefFromNumbers = (surahNumber, ayahNumber) => `${surahNumber}:${ayahNumber}`;

    const getAdjacentRef = async (payload, direction) => {
        const surahNumber = Number(payload?.surahNumber);
        const ayahNumber = Number(payload?.ayahNumber);
        if (!Number.isFinite(surahNumber) || !Number.isFinite(ayahNumber)) return null;
        const list = await getSurahList();
        const current = list.find((surah) => surah.number === surahNumber);
        if (!current) return null;
        if (direction === 'prev') {
            if (ayahNumber > 1) {
                return buildRefFromNumbers(surahNumber, ayahNumber - 1);
            }
            if (surahNumber > 1) {
                const prevSurah = list.find((surah) => surah.number === surahNumber - 1);
                if (!prevSurah) return null;
                return buildRefFromNumbers(prevSurah.number, prevSurah.numberOfAyahs);
            }
            return null;
        }
        if (ayahNumber < current.numberOfAyahs) {
            return buildRefFromNumbers(surahNumber, ayahNumber + 1);
        }
        if (surahNumber < list.length) {
            return buildRefFromNumbers(surahNumber + 1, 1);
        }
        return null;
    };

    const fetchAyahByRef = async (ref) => {
        pendingSurahNumber = null;
        const arabicUrl = `https://api.alquran.cloud/v1/ayah/${encodeURIComponent(ref)}/quran-uthmani`;
        const translationUrl = `https://api.alquran.cloud/v1/ayah/${encodeURIComponent(ref)}/en.sahih`;
        const translationMalayUrl = `https://api.alquran.cloud/v1/ayah/${encodeURIComponent(ref)}/ms.basmeih`;
        const tafsirId = await getTafsirEditionId();
        const tafsirUrl = tafsirId ? `https://api.alquran.cloud/v1/ayah/${encodeURIComponent(ref)}/${tafsirId}` : null;
        try {
            const requests = [fetch(arabicUrl), fetch(translationUrl), fetch(translationMalayUrl)];
            if (tafsirUrl) requests.push(fetch(tafsirUrl));
            const results = await Promise.allSettled(requests);
            const arabicData = results[0].status === 'fulfilled' ? await results[0].value.json() : null;
            const translationData = results[1].status === 'fulfilled' ? await results[1].value.json() : null;
            const translationMalayData = results[2]?.status === 'fulfilled' ? await results[2].value.json() : null;
            const tafsirData = results[3]?.status === 'fulfilled' ? await results[3].value.json() : null;
            const arabicText = arabicData?.data?.text || '';
            const translationText = translationData?.data?.text || '';
            const translationMalayText = translationMalayData?.data?.text || '';
            const tafsirText = tafsirData?.data?.text || '';
            if (!arabicText && !translationText) {
                return 'I could not fetch that ayah. Please check the reference and try again.';
            }
            const surahNumber = arabicData?.data?.surah?.number || Number(ref.split(':')[0]);
            const ayahNumber = arabicData?.data?.numberInSurah || Number(ref.split(':')[1]);
            return {
                ref,
                surahNumber,
                ayahNumber,
                arabicText,
                translationText,
                translationMalayText,
                tafsirText
            };
        } catch {
            return 'I could not fetch Quranic content at the moment. Please try again.';
        }
    };

    const fetchFirstAyahByPage = async (pageNumber) => {
        pendingSurahNumber = null;
        try {
            const res = await fetch(`https://api.alquran.cloud/v1/page/${pageNumber}/quran-uthmani`);
            const data = await res.json();
            const firstAyah = data?.data?.ayahs?.[0];
            const surahNumber = firstAyah?.surah?.number;
            const ayahNumber = firstAyah?.numberInSurah;
            if (!Number.isFinite(surahNumber) || !Number.isFinite(ayahNumber)) {
                return `I could not find a first ayah for page ${pageNumber}.`;
            }
            return fetchAyahByRef(`${surahNumber}:${ayahNumber}`);
        } catch {
            return `I could not fetch page ${pageNumber} right now. Please try again.`;
        }
    };

    const fetchTranslationSearch = async (term) => {
        pendingSurahNumber = null;
        try {
            const res = await fetch(
                `https://api.alquran.cloud/v1/search/${encodeURIComponent(term)}/all/en.sahih`
            );
            const data = await res.json();
            const matches = Array.isArray(data?.data?.matches) ? data.data.matches : [];
            if (!matches.length) {
                return `No translation matches found for "${term}".`;
            }
            const firstMatch = matches[0];
            const surahNumber = firstMatch?.surah?.number;
            const ayahNumber = firstMatch?.numberInSurah;
            if (!Number.isFinite(surahNumber) || !Number.isFinite(ayahNumber)) {
                return `I could not open the first match for "${term}".`;
            }
            const result = await fetchAyahByRef(`${surahNumber}:${ayahNumber}`);
            if (typeof result === 'string') return result;
            result.searchSummary = `Found ${matches.length} matches for "${term}". Showing ${surahNumber}:${ayahNumber}.`;
            return result;
        } catch {
            return `I could not search translations for "${term}" right now. Please try again.`;
        }
    };

    const buildSnippet = (text, term) => {
        const cleaned = (text || '').replace(/\s+/g, ' ').trim();
        if (!cleaned) return null;
        if (!term) return cleaned.slice(0, 120);
        const arabicMatch = findArabicWordMatchRange(text, term);
        if (arabicMatch) {
            const start = Math.max(0, arabicMatch.start - 40);
            const end = Math.min(text.length, arabicMatch.end + 40);
            let snippet = text.slice(start, end).replace(/\s+/g, ' ').trim();
            if (start > 0) snippet = `…${snippet}`;
            if (end < text.length) snippet = `${snippet}…`;
            return snippet;
        }
        const index = cleaned.indexOf(term);
        if (index === -1) return cleaned.slice(0, 120);
        const start = Math.max(0, index - 40);
        const end = Math.min(cleaned.length, index + term.length + 40);
        let snippet = cleaned.slice(start, end).trim();
        if (start > 0) snippet = `…${snippet}`;
        if (end < cleaned.length) snippet = `${snippet}…`;
        return snippet;
    };

    const buildArabicExampleSentence = (word) => {
        const term = (word || '').trim();
        if (!term) return 'Type an Arabic, English, or Malay word like بقرة, cow, or monyet.';
        const templates = [
            `أحاول كلَّ يومٍ أن أفهم معنى «${term}» وأن أستعمله في جملةٍ صحيحةٍ عند الكلام.`,
            `قرأتُ درسًا اليوم وتعلّمتُ كلمة «${term}»، ثم كتبتُ بها جملةً حتى تثبت في ذهني.`,
            `إذا سمعتُ كلمة «${term}» في قراءةٍ أو حديثٍ، أسأل عن معناها وأبحث عنها حتى أفهم السياق.`,
            `من الجميل أن نتعلّم كلماتٍ مثل «${term}» ونربطها بموقفٍ من حياتنا لنستخدمها بسهولة.`,
            `أكتب كلمة «${term}» في دفتري، وأضع لها معنىً واضحًا، ثم أكررها في جملٍ قصيرةٍ مفيدة.`,
            `عندما أتدرّب على العربية، أختار كلمة «${term}» وأحاول أن أستعملها في جملةٍ لطيفةٍ ومفهومة.`
        ];
        const previousIndex = Number.isFinite(arabicExampleHistory[term]) ? arabicExampleHistory[term] : -1;
        const nextIndex = (previousIndex + 1) % templates.length;
        arabicExampleHistory[term] = nextIndex;
        persistArabicExampleHistory(arabicExampleHistory);
        return templates[nextIndex];
    };

    const pluralizeEnglishTerm = (term) => {
        const word = (term || '').trim().toLowerCase();
        if (!word) return '';
        if (word.endsWith('ch') || word.endsWith('sh') || word.endsWith('s') || word.endsWith('x') || word.endsWith('z')) {
            return `${word}es`;
        }
        if (word.endsWith('y') && !/[aeiou]y$/.test(word)) {
            return `${word.slice(0, -1)}ies`;
        }
        if (word.endsWith('f')) {
            return `${word.slice(0, -1)}ves`;
        }
        if (word.endsWith('fe')) {
            return `${word.slice(0, -2)}ves`;
        }
        return `${word}s`;
    };

    const ensureArabicForms = async (entry) => {
        if (!entry) return entry;
        const singular = entry.singular || entry.arabic || '';
        let plural = entry.plural || '';
        if (!plural) {
            const english = entry.english || '';
            const pluralEnglish = pluralizeEnglishTerm(english);
            if (pluralEnglish && pluralEnglish !== english) {
                const aiPluralArabic = await translateText(pluralEnglish, 'en', 'ar');
                const normalized = normalizeArabicTerm(aiPluralArabic || '');
                if (normalized && normalized !== singular) {
                    plural = normalized;
                }
            }
        }
        entry.singular = singular;
        entry.plural = plural;
        persistArabicDictionary(arabicDictionary);
        return entry;
    };

    const fetchArabicQuranSnippet = async (term) => {
        pendingSurahNumber = null;
        const searchEditions = ['quran-simple-clean', 'quran-simple', 'quran-uthmani-quran-academy', 'quran-uthmani'];
        try {
            let data = null;
            for (const edition of searchEditions) {
                try {
                    const res = await fetch(
                        `https://api.alquran.cloud/v1/search/${encodeURIComponent(term)}/all/${encodeURIComponent(
                            edition
                        )}`
                    );
                    if (!res.ok) continue;
                    data = await res.json();
                    break;
                } catch {}
            }
            const matches = Array.isArray(data?.data?.matches) ? data.data.matches : [];
            const exactMatches = matches.filter((match) => findArabicWordMatchRange(match?.text || '', term));
            if (!exactMatches.length) {
                return `No exact Quran matches found for "${term}". Try a different word.`;
            }
            const firstMatch = exactMatches[0];
            const surahNumber = firstMatch?.surah?.number;
            const ayahNumber = firstMatch?.numberInSurah;
            const surahName = firstMatch?.surah?.englishName || firstMatch?.surah?.name || null;
            const ref =
                Number.isFinite(surahNumber) && Number.isFinite(ayahNumber)
                    ? surahName
                        ? `${surahName}:${ayahNumber}`
                        : `${surahNumber}:${ayahNumber}`
                    : null;
            const snippet = buildSnippet(firstMatch?.text || '', term);
            if (!snippet) {
                return `I could not build a snippet for "${term}".`;
            }
            return {
                snippet,
                label: 'Quran snippet:',
                className: 'chatbot-ayah-text',
                ref
            };
        } catch {
            return `I could not search the Quran for "${term}" right now. Please try again.`;
        }
    };

    const getArabicReply = async (text) => {
        const raw = (text || '').trim();
        if (!raw) return 'Type an Arabic, English, or Malay word like بقرة, cow, or monyet.';

        const inputArabicTerm = parseArabicTerm(raw);
        const englishTerm = inputArabicTerm ? null : normalizeEnglishTerm(raw);
        const malayTerm = inputArabicTerm || englishTerm ? null : normalizeMalayTerm(raw);

        const findExistingByEnglish = (term) =>
            Object.values(arabicDictionary).find((item) => item.english === term) || null;
        const findExistingByMalay = (term) =>
            Object.values(arabicDictionary).find((item) => item.malay === term) || null;

        let resolvedEntry = null;
        if (inputArabicTerm && arabicDictionary[inputArabicTerm]) {
            resolvedEntry = arabicDictionary[inputArabicTerm];
        } else if (englishTerm) {
            resolvedEntry = findExistingByEnglish(englishTerm);
        } else if (malayTerm) {
            resolvedEntry = findExistingByMalay(malayTerm);
        }

        if (!resolvedEntry) {
            if (hasArabicLetters(raw) && inputArabicTerm) {
                const [aiEnglish, aiMalay] = await Promise.all([
                    translateText(inputArabicTerm, 'ar', 'en'),
                    translateText(inputArabicTerm, 'ar', 'ms')
                ]);
                const english = aiEnglish ? aiEnglish.toLowerCase() : '';
                const malay = aiMalay ? aiMalay.toLowerCase() : '';
                if (!english && !malay) {
                    return 'I could not translate that word right now. Please try again.';
                }
                resolvedEntry = {
                    arabic: inputArabicTerm,
                    english,
                    malay,
                    exampleSearch: (english || malay).trim()
                };
                arabicDictionary[inputArabicTerm] = resolvedEntry;
                persistArabicDictionary(arabicDictionary);
            } else {
                const latinTerm = (englishTerm || malayTerm || '').trim();
                if (!latinTerm) {
                    return 'Type an Arabic, English, or Malay word like بقرة, cow, or monyet.';
                }

                const [aiArabicFromEnglish, aiMalayFromEnglish, aiArabicFromMalay, aiEnglishFromMalay] =
                    await Promise.all([
                        translateText(latinTerm, 'en', 'ar'),
                        translateText(latinTerm, 'en', 'ms'),
                        translateText(latinTerm, 'ms', 'ar'),
                        translateText(latinTerm, 'ms', 'en')
                    ]);

                const englishFromMalay = aiEnglishFromMalay ? aiEnglishFromMalay.toLowerCase() : '';
                const malayFromEnglish = aiMalayFromEnglish ? aiMalayFromEnglish.toLowerCase() : '';
                const arabicFromEnglish = aiArabicFromEnglish ? normalizeArabicTerm(aiArabicFromEnglish) : '';
                const arabicFromMalay = aiArabicFromMalay ? normalizeArabicTerm(aiArabicFromMalay) : '';

                const isMalayInput = Boolean(malayTerm) && !englishTerm;
                if (isMalayInput) {
                    if (arabicFromMalay && englishFromMalay) {
                        resolvedEntry = {
                            arabic: arabicFromMalay,
                            english: englishFromMalay,
                            malay: latinTerm.toLowerCase(),
                            exampleSearch: englishFromMalay
                        };
                        arabicDictionary[arabicFromMalay] = resolvedEntry;
                        persistArabicDictionary(arabicDictionary);
                    } else if (arabicFromEnglish) {
                        resolvedEntry = {
                            arabic: arabicFromEnglish,
                            english: englishFromMalay || latinTerm.toLowerCase(),
                            malay: malayFromEnglish || latinTerm.toLowerCase(),
                            exampleSearch: englishFromMalay || latinTerm.toLowerCase()
                        };
                        arabicDictionary[arabicFromEnglish] = resolvedEntry;
                        persistArabicDictionary(arabicDictionary);
                    }
                } else {
                    if (arabicFromEnglish) {
                        resolvedEntry = {
                            arabic: arabicFromEnglish,
                            english: latinTerm.toLowerCase(),
                            malay: malayFromEnglish,
                            exampleSearch: latinTerm.toLowerCase()
                        };
                        arabicDictionary[arabicFromEnglish] = resolvedEntry;
                        persistArabicDictionary(arabicDictionary);
                    } else if (arabicFromMalay && englishFromMalay) {
                        resolvedEntry = {
                            arabic: arabicFromMalay,
                            english: englishFromMalay,
                            malay: malayFromEnglish || latinTerm.toLowerCase(),
                            exampleSearch: englishFromMalay
                        };
                        arabicDictionary[arabicFromMalay] = resolvedEntry;
                        persistArabicDictionary(arabicDictionary);
                    }
                }
            }
        }

        if (!resolvedEntry) {
            return 'I could not translate that word right now. Please try again.';
        }

        if (englishTerm) {
            const currentMalay = (resolvedEntry.malay || '').toLowerCase();
            const currentEnglish = (resolvedEntry.english || '').toLowerCase();
            const normalizedEnglish = englishTerm.toLowerCase();
            if (!currentMalay || currentMalay === currentEnglish || currentMalay === normalizedEnglish) {
                try {
                    const refreshedMalay = await translateText(normalizedEnglish, 'en', 'ms');
                    const normalizedMalay = refreshedMalay ? refreshedMalay.toLowerCase() : '';
                    if (normalizedMalay && normalizedMalay !== currentMalay) {
                        resolvedEntry.malay = normalizedMalay;
                        if (resolvedEntry.arabic) {
                            arabicDictionary[resolvedEntry.arabic] = resolvedEntry;
                        }
                        persistArabicDictionary(arabicDictionary);
                    }
                } catch {}
            }
        }

        if (resolvedEntry.english === 'key' && resolvedEntry.malay === 'key') {
            resolvedEntry.malay = 'kunci';
            if (resolvedEntry.arabic) {
                arabicDictionary[resolvedEntry.arabic] = resolvedEntry;
            }
            persistArabicDictionary(arabicDictionary);
        }

        const quranVariant = resolvedEntry.arabic ? quranVariants[resolvedEntry.arabic] : null;
        if (quranVariant && !resolvedEntry.quranSearch) {
            resolvedEntry.quranSearch = quranVariant;
            if (resolvedEntry.arabic) {
                arabicDictionary[resolvedEntry.arabic] = resolvedEntry;
            }
            persistArabicDictionary(arabicDictionary);
        }

        await ensureArabicForms(resolvedEntry);

        const arabicForExample = resolvedEntry.quranSearch || resolvedEntry.arabic;
        const quranSnippetResult = arabicForExample ? await fetchArabicQuranSnippet(arabicForExample) : null;
        const hadithMatch = arabicForExample ? findHadithSnippet(arabicForExample) : null;
        const quranSnippet =
            quranSnippetResult && typeof quranSnippetResult !== 'string' ? quranSnippetResult.snippet : null;
        const quranRef = quranSnippetResult && typeof quranSnippetResult !== 'string' ? quranSnippetResult.ref : null;
        const hasQuran = Boolean(quranSnippet);
        const hasHadith = Boolean(hadithMatch);

        const exampleSource = hasQuran ? 'quran' : hasHadith ? 'hadith' : null;
        const exampleSentence = hasQuran
            ? quranSnippet
            : hasHadith
            ? (hadithMatch ? hadithMatch.arabic : null)
            : buildArabicExampleSentence(resolvedEntry.arabic);
        const exampleRef = hasQuran ? quranRef : hasHadith ? (hadithMatch ? hadithMatch.reference : null) : null;

        return {
            entry: resolvedEntry,
            quranSnippet,
            quranRef,
            hadithSnippet: hadithMatch ? hadithMatch.arabic : null,
            hadithEnglish: hadithMatch ? hadithMatch.english : null,
            hadithRef: hadithMatch ? hadithMatch.reference : null,
            exampleSentence,
            exampleSource,
            exampleRef
        };
    };

    const getQuranReply = async (text) => {
        const pageNumber = parsePageNumber(text);
        if (pageNumber) {
            return fetchFirstAyahByPage(pageNumber);
        }
        const surahOnly = await extractSurahNameOnly(text);
        if (surahOnly) {
            pendingSurahNumber = surahOnly.surahNumber;
            return `surah ${surahOnly.surahNumber} found. ayah?`;
        }
        const ref = await parseAyahRef(text);
        if (ref) {
            return fetchAyahByRef(ref);
        }
        const term = parseTranslationSearchTerm(text);
        if (term) {
            return fetchTranslationSearch(term);
        }
        return 'enter an ayah like 2:255, "surah 2 ayah 255", "imran 200", "page 3", or a word like "cow".';
    };

    const renderArabicReply = (container, payload) => {
        container.textContent = '';
        const arabicWord = document.createElement('div');
        arabicWord.className = 'chatbot-dict-arabic';
        arabicWord.textContent = payload.entry.arabic;
        container.appendChild(arabicWord);

        const forms = document.createElement('div');
        forms.className = 'chatbot-dict-forms';
        const singularLine = document.createElement('div');
        singularLine.className = 'chatbot-dict-forms-line';
        const singularLabel = document.createElement('span');
        singularLabel.className = 'chatbot-dict-forms-label';
        singularLabel.textContent = '(singular)';
        const singularText = document.createElement('span');
        singularText.textContent = payload.entry.singular || payload.entry.arabic || '';
        singularLine.appendChild(singularText);
        singularLine.appendChild(singularLabel);
        const pluralLine = document.createElement('div');
        pluralLine.className = 'chatbot-dict-forms-line';
        const pluralLabel = document.createElement('span');
        pluralLabel.className = 'chatbot-dict-forms-label';
        pluralLabel.textContent = '(plural)';
        const pluralText = document.createElement('span');
        pluralText.textContent = payload.entry.plural || 'غير متوفر';
        pluralLine.appendChild(pluralText);
        pluralLine.appendChild(pluralLabel);
        forms.appendChild(singularLine);
        forms.appendChild(pluralLine);
        container.appendChild(forms);

        const capitalizeFirst = (value) => {
            if (!value) return '';
            return value.charAt(0).toUpperCase() + value.slice(1);
        };
        const meaning = document.createElement('div');
        meaning.className = 'chatbot-dict-translation';
        const englishLine = document.createElement('div');
        englishLine.className = 'chatbot-dict-translation-line';
        const englishText = document.createElement('span');
        englishText.textContent = capitalizeFirst(payload.entry.english || '');
        const englishLabel = document.createElement('span');
        englishLabel.className = 'chatbot-dict-translation-label';
        englishLabel.textContent = '(eng)';
        englishLine.appendChild(englishText);
        englishLine.appendChild(englishLabel);
        const malayLine = document.createElement('div');
        malayLine.className = 'chatbot-dict-translation-line';
        const malayText = document.createElement('span');
        malayText.textContent = payload.entry.malay || '';
        const malayLabel = document.createElement('span');
        malayLabel.className = 'chatbot-dict-translation-label';
        malayLabel.textContent = '(malay)';
        malayLine.appendChild(malayText);
        malayLine.appendChild(malayLabel);
        meaning.appendChild(englishLine);
        meaning.appendChild(malayLine);
        container.appendChild(meaning);

        if (payload.quranSnippet && payload.exampleSource !== 'quran') {
            const quranLabel = document.createElement('div');
            quranLabel.className = 'chatbot-translation-label';
            quranLabel.textContent = 'Quran snippet:';
            container.appendChild(quranLabel);
            const quranSnippet = document.createElement('div');
            quranSnippet.className = 'chatbot-ayah-text';
            quranSnippet.textContent = payload.quranSnippet;
            container.appendChild(quranSnippet);
            if (payload.quranRef) {
                const reference = document.createElement('div');
                reference.className = 'chatbot-quran-title';
                reference.textContent = `[${payload.quranRef}]`;
                container.appendChild(reference);
            }
        }

        if (payload.hadithSnippet && payload.exampleSource !== 'hadith') {
            const hadithLabel = document.createElement('div');
            hadithLabel.className = 'chatbot-translation-label';
            hadithLabel.textContent = 'Hadith snippet:';
            container.appendChild(hadithLabel);
            const hadithArabic = document.createElement('div');
            hadithArabic.className = 'chatbot-hadith-text';
            hadithArabic.textContent = simplifyHadithArabic(payload.hadithSnippet);
            container.appendChild(hadithArabic);
            if (payload.hadithEnglish) {
                const hadithEnglishLabel = document.createElement('div');
                hadithEnglishLabel.className = 'chatbot-translation-label';
                hadithEnglishLabel.textContent = 'English:';
                container.appendChild(hadithEnglishLabel);
                const hadithEnglish = document.createElement('div');
                hadithEnglish.className = 'chatbot-translation-text';
                hadithEnglish.textContent = payload.hadithEnglish;
                container.appendChild(hadithEnglish);
            }
            if (payload.hadithRef) {
                const hadithRef = document.createElement('div');
                hadithRef.className = 'chatbot-quran-title';
                hadithRef.textContent = `[${payload.hadithRef}]`;
                container.appendChild(hadithRef);
            }
        }

        if (payload.exampleSentence) {
            const sentenceLabel = document.createElement('div');
            sentenceLabel.className = 'chatbot-translation-label';
            sentenceLabel.textContent = 'Example sentence:';
            container.appendChild(sentenceLabel);
            const sentence = document.createElement('div');
            sentence.className = payload.exampleSource === 'hadith' ? 'chatbot-hadith-text' : 'chatbot-ayah-text';
            sentence.textContent = payload.exampleSentence;
            container.appendChild(sentence);
            if (payload.exampleRef) {
                const exRef = document.createElement('div');
                exRef.className = 'chatbot-quran-title';
                exRef.textContent = `[${payload.exampleRef}]`;
                container.appendChild(exRef);
            }
        }
    };

    const renderHadithReply = (container, payload) => {
        const baseItems = Array.isArray(payload.items) && payload.items.length ? payload.items : [payload];

        const renderHeader = (mode) => {
            container.textContent = '';
            if (payload.searchSummary) {
                const summary = document.createElement('div');
                summary.className = 'chatbot-translation-label';
                summary.textContent = payload.searchSummary;
                container.appendChild(summary);
            }
            if (payload.isFallback && mode !== 'options') {
                const fallback = document.createElement('div');
                fallback.className = 'chatbot-translation-label';
                fallback.textContent = 'No exact match found. Here is a Hadeeth snippet:';
                container.appendChild(fallback);
            }
        };

        const renderHadithItem = (item) => {
            const hadithLabel = document.createElement('div');
            hadithLabel.className = 'chatbot-translation-label';
            hadithLabel.textContent = 'Hadeeth snippet:';
            container.appendChild(hadithLabel);
            const hadithArabic = document.createElement('div');
            hadithArabic.className = 'chatbot-hadith-text';
            hadithArabic.textContent = simplifyHadithArabic(item.arabic || '');
            container.appendChild(hadithArabic);
            if (item.english) {
                const hadithEnglishLabel = document.createElement('div');
                hadithEnglishLabel.className = 'chatbot-translation-label';
                hadithEnglishLabel.textContent = 'English:';
                container.appendChild(hadithEnglishLabel);
                const hadithEnglish = document.createElement('div');
                hadithEnglish.className = 'chatbot-translation-text';
                hadithEnglish.textContent = simplifyHadithEnglish(item.english);
                container.appendChild(hadithEnglish);
            }
            if (item.reference) {
                const hadithRef = document.createElement('div');
                hadithRef.className = 'chatbot-quran-title';
                hadithRef.textContent = `[${item.reference}]`;
                container.appendChild(hadithRef);
            }
        };

        const renderOptions = () => {
            renderHeader('options');
            const prompt = document.createElement('div');
            prompt.className = 'chatbot-translation-label';
            prompt.textContent = `Found ${baseItems.length} hadeeths. Choose one:`;
            container.appendChild(prompt);

            const options = document.createElement('div');
            options.className = 'chatbot-hadith-options';
            container.appendChild(options);

            baseItems.forEach((item, index) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'chatbot-hadith-option-btn';
                button.textContent = item.reference ? item.reference : `Result ${index + 1}`;
                button.addEventListener('click', () => {
                    renderSelected(item, index);
                });
                options.appendChild(button);
            });
        };

        const renderSelected = (item, activeIndex) => {
            renderHeader('item');
            const options = document.createElement('div');
            options.className = 'chatbot-hadith-options';
            container.appendChild(options);
            baseItems.forEach((candidate, index) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = `chatbot-hadith-option-btn${
                    index === activeIndex ? ' chatbot-hadith-option-active' : ''
                }`;
                button.textContent = candidate.reference ? candidate.reference : `Result ${index + 1}`;
                button.addEventListener('click', () => renderSelected(candidate, index));
                options.appendChild(button);
            });
            renderHadithItem(item);
        };

        if (baseItems.length > 1) {
            renderOptions();
            return;
        }

        renderHeader('item');
        renderHadithItem(baseItems[0] || {});
    };

    const buildAbuBakarSyateeriAudioUrl = (ref) => {
        if (!ref || !ref.includes(':')) return null;
        const [surahStr, ayahStr] = ref.split(':');
        const surah = Number(surahStr);
        const ayah = Number(ayahStr);
        if (!Number.isFinite(surah) || !Number.isFinite(ayah)) return null;
        const key = `${String(surah).padStart(3, '0')}${String(ayah).padStart(3, '0')}`;
        return `https://www.everyayah.com/data/Abu_Bakr_Ash-Shaatree_64kbps/${key}.mp3`;
    };

    const buildQuranCopyText = (payload) => {
        const parts = [];
        if (payload.ref) parts.push(`Ayah ${payload.ref}`);
        if (payload.arabicText) parts.push(payload.arabicText);
        if (payload.translationText) parts.push(`English: ${payload.translationText}`);
        if (payload.translationMalayText) parts.push(`Malay: ${payload.translationMalayText}`);
        if (payload.tafsirText) parts.push(`Tafseer: ${payload.tafsirText}`);
        return parts.filter(Boolean).join('\n\n');
    };

    const copyToClipboard = async (text) => {
        if (!text) return false;
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
            return false;
        }
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            return false;
        }
    };

    const renderQuranReply = (container, payload) => {
        container.textContent = '';
        if (payload.searchSummary) {
            const summary = document.createElement('div');
            summary.className = 'chatbot-translation-label';
            summary.textContent = payload.searchSummary;
            container.appendChild(summary);
        }
        const title = document.createElement('div');
        title.className = 'chatbot-quran-title';
        title.textContent = `ayah ${payload.ref}`;
        container.appendChild(title);

        const audioUrl = buildAbuBakarSyateeriAudioUrl(payload.ref);
        if (audioUrl) {
            const audioLabel = document.createElement('div');
            audioLabel.className = 'chatbot-audio-label';
            audioLabel.textContent = 'Reciter: Abu Bakar Syateeri';
            container.appendChild(audioLabel);
            const audio = document.createElement('audio');
            audio.className = 'chatbot-audio';
            audio.controls = true;
            audio.preload = 'none';
            audio.src = audioUrl;
            container.appendChild(audio);
        }

        if (payload.arabicText) {
            const arabic = document.createElement('div');
            arabic.className = 'chatbot-ayah-text';
            arabic.innerHTML = enhanceWaqfSymbols(payload.arabicText);
            container.appendChild(arabic);
        }

        if (payload.translationText) {
            const translationLabel = document.createElement('div');
            translationLabel.className = 'chatbot-translation-label';
            translationLabel.textContent = 'English:';
            container.appendChild(translationLabel);
            const translation = document.createElement('div');
            translation.className = 'chatbot-translation-text';
            translation.textContent = payload.translationText;
            container.appendChild(translation);
        }

        if (payload.translationMalayText) {
            const translationMalayLabel = document.createElement('div');
            translationMalayLabel.className = 'chatbot-translation-label';
            translationMalayLabel.textContent = 'Malay:';
            container.appendChild(translationMalayLabel);
            const translationMalay = document.createElement('div');
            translationMalay.className = 'chatbot-translation-text';
            translationMalay.textContent = payload.translationMalayText;
            container.appendChild(translationMalay);
        }

        if (payload.tafsirText) {
            const tafseerLabel = document.createElement('div');
            tafseerLabel.className = 'chatbot-tafseer-label';
            tafseerLabel.textContent = 'Tafseer:';
            container.appendChild(tafseerLabel);
            const tafseer = document.createElement('div');
            tafseer.className = 'chatbot-tafseer-text';
            tafseer.textContent = payload.tafsirText;
            container.appendChild(tafseer);
        } else {
            const tafseerMissing = document.createElement('div');
            tafseerMissing.className = 'chatbot-tafseer-text';
            tafseerMissing.textContent = 'Tafseer is not available right now.';
            container.appendChild(tafseerMissing);
        }

        const nav = document.createElement('div');
        nav.className = 'chatbot-quran-nav';
        const copyButton = document.createElement('button');
        copyButton.type = 'button';
        copyButton.className = 'chatbot-quran-copy';
        copyButton.textContent = 'Copy';
        const prevButton = document.createElement('button');
        prevButton.type = 'button';
        prevButton.textContent = '<<';
        const nextButton = document.createElement('button');
        nextButton.type = 'button';
        nextButton.textContent = '>>';
        nav.appendChild(prevButton);
        nav.appendChild(copyButton);
        nav.appendChild(nextButton);
        container.appendChild(nav);

        const updateNavButton = async (button, direction) => {
            button.disabled = true;
            const nextRef = await getAdjacentRef(payload, direction);
            if (!nextRef) {
                button.disabled = true;
                return;
            }
            button.disabled = false;
            button.onclick = async () => {
                button.disabled = true;
                const loading = addMessage('Fetching Quranic response...', 'bot');
                const reply = await fetchAyahByRef(nextRef);
                if (typeof reply === 'string') {
                    loading.textContent = reply;
                } else {
                    renderQuranReply(loading, reply);
                }
                requestAnimationFrame(() => scrollMessageToTop(loading));
            };
        };

        updateNavButton(prevButton, 'prev');
        updateNavButton(nextButton, 'next');
        copyButton.addEventListener('click', async () => {
            const text = buildQuranCopyText(payload);
            const success = await copyToClipboard(text);
            copyButton.textContent = success ? 'Copied' : 'Copy failed';
            setTimeout(() => {
                copyButton.textContent = 'Copy';
            }, 1200);
        });
    };

    const setMode = (mode) => {
        activeMode = mode;
        if (modeSchool) {
            modeSchool.classList.toggle('chatbot-mode-active', mode === 'school');
        }
        if (modeQuran) {
            modeQuran.classList.toggle('chatbot-mode-active', mode === 'quran');
        }
        if (modeHadeeth) {
            modeHadeeth.classList.toggle('chatbot-mode-active', mode === 'hadeeth');
        }
        if (modeArabic) {
            modeArabic.classList.toggle('chatbot-mode-active', mode === 'arabic');
        }
        if (chatbotQuranTools) {
            chatbotQuranTools.classList.toggle('chatbot-quran-tools-hidden', mode !== 'quran');
        }
        if (chatbotInput) {
            if (mode === 'quran') {
                chatbotInput.placeholder = 'surah name and ayah (e.g., imran 200), page 3, or word like cow';
            } else if (mode === 'hadeeth') {
                chatbotInput.placeholder = 'type a topic like intentions or a reference like bukhari 1, muslim 55';
            } else if (mode === 'arabic') {
                chatbotInput.placeholder = 'type Arabic, English, or Malay (e.g., بقرة, cow, monyet)';
            } else {
                chatbotInput.placeholder = 'Type your question...';
            }
        }
        if (mode === 'quran' && lastMode !== 'quran') {
            addMessage(
                'quran mode: type a surah name and ayah number, use "page 3", or search a word like "cow".',
                'bot'
            );
        }
        if (mode === 'hadeeth' && lastMode !== 'hadeeth') {
            addMessage(
                'hadeeth mode: type a topic like intentions, advice, prayer, fasting, charity, or a reference like bukhari 1, muslim 55.',
                'bot'
            );
        }
        if (mode === 'arabic' && lastMode !== 'arabic') {
            addMessage('arabic mode: type Arabic, English, or Malay to see translations and an example.', 'bot');
        }
        lastMode = mode;
    };

    const populateSurahIndex = async () => {
        if (!chatbotSurahSelect) return;
        const list = await getSurahList();
        chatbotSurahSelect.innerHTML = '';
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = 'اختر السورة / Select surah';
        placeholder.disabled = true;
        placeholder.selected = true;
        chatbotSurahSelect.appendChild(placeholder);
        list.forEach((surah) => {
            const option = document.createElement('option');
            option.value = surah.number;
            option.textContent = `${surah.name} - ${surah.englishName}`;
            chatbotSurahSelect.appendChild(option);
        });
    };

    const sendFromSurahPicker = () => {
        if (!chatbotSurahSelect) return;
        const surahNumber = chatbotSurahSelect.value;
        if (!surahNumber) return;
        const ayahNumber = chatbotAyahInput ? chatbotAyahInput.value.trim() : '';
        if (!ayahNumber) {
            addMessage(`surah ${surahNumber}`, 'user');
            pendingSurahNumber = Number(surahNumber);
            addMessage(`surah ${surahNumber} found. ayah?`, 'bot');
            return;
        }
        if (chatbotInput) {
            chatbotInput.value = `${surahNumber}:${ayahNumber}`;
            sendMessage();
        }
    };

    const sendMessage = async () => {
        const text = chatbotInput.value.trim();
        if (!text) return;
        addMessage(text, 'user');
        chatbotInput.value = '';
        if (activeMode === 'quran') {
            const loading = addMessage('Fetching Quranic response...', 'bot');
            const reply = await getQuranReply(text);
            if (typeof reply === 'string') {
                loading.textContent = reply;
            } else {
                renderQuranReply(loading, reply);
            }
            requestAnimationFrame(() => scrollMessageToTop(loading));
        } else if (activeMode === 'hadeeth') {
            const loading = addMessage('Finding Hadeeth...', 'bot');
            const reply = await getHadithReply(text);
            renderHadithReply(loading, reply);
            requestAnimationFrame(() => scrollMessageToTop(loading));
        } else if (activeMode === 'arabic') {
            const loading = addMessage('Searching dictionary...', 'bot');
            const reply = await getArabicReply(text);
            if (typeof reply === 'string') {
                loading.textContent = reply;
            } else {
                renderArabicReply(loading, reply);
            }
            requestAnimationFrame(() => scrollMessageToTop(loading));
        } else {
            const reply = getSchoolReply(text);
            setTimeout(() => {
                const response =
                    Array.isArray(reply) ? addMessageParts(reply, 'bot') : addMessage(reply, 'bot');
                scrollMessageToTop(response);
            }, 300);
        }
    };

    if (chatbotToggle && chatbotWindow) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('chatbot-hidden');
            if (!chatbotWindow.classList.contains('chatbot-hidden')) {
                chatbotInput.focus();
            }
        });
    }
    if (chatbotClose && chatbotWindow) {
        chatbotClose.addEventListener('click', () => {
            chatbotWindow.classList.add('chatbot-hidden');
        });
    }
    if (chatbotQuranGo) {
        chatbotQuranGo.addEventListener('click', sendFromSurahPicker);
    }
    if (chatbotInput) {
        chatbotInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });
    }
    if (modeSchool) {
        modeSchool.addEventListener('click', () => setMode('school'));
    }
    if (modeQuran) {
        modeQuran.addEventListener('click', () => setMode('quran'));
    }
    if (modeHadeeth) {
        modeHadeeth.addEventListener('click', () => setMode('hadeeth'));
    }
    if (modeArabic) {
        modeArabic.addEventListener('click', () => setMode('arabic'));
    }
    if (chatbotSurahSelect) {
        chatbotSurahSelect.addEventListener('change', () => {
            if (chatbotAyahInput) {
                chatbotAyahInput.focus();
            }
        });
        chatbotSurahSelect.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                sendFromSurahPicker();
            }
        });
    }
    if (chatbotAyahInput) {
        chatbotAyahInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                sendFromSurahPicker();
            }
        });
    }
    populateSurahIndex();
    setMode('quran');
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}
