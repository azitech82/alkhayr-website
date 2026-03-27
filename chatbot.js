const chatbotStyles = `
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
    display: flex;
    gap: 0.5rem;
    padding: 0.4rem;
    background: rgba(15, 23, 42, 0.05);
    border: 1px solid rgba(148, 163, 184, 0.25);
    border-radius: 9999px;
}
.chatbot-mode-btn {
    flex: 1;
    border-radius: 9999px;
    border: 1px solid transparent;
    background: transparent;
    padding: 0.45rem 0.75rem;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #64748b;
    transition: all 0.2s ease;
}
.chatbot-mode-active {
    color: #fff;
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.18);
    transform: translateY(-1px);
}
#mode-quran.chatbot-mode-active {
    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
    color: #fff;
}
#mode-school.chatbot-mode-active {
    background: linear-gradient(135deg, #2563eb 0%, #38bdf8 100%);
    color: #fff;
}
#mode-arabic.chatbot-mode-active {
    background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
    color: #fff;
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
        <button id="mode-quran" class="chatbot-mode-btn chatbot-mode-active" type="button">Quran</button>
        <button id="mode-school" class="chatbot-mode-btn" type="button">School</button>
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
        قرد: { arabic: 'قرد', english: 'monkey', malay: 'monyet', exampleSearch: 'monkey', plural: 'قرود' }
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
    const aiDictionaryEndpoints = [
        'https://libretranslate.de/translate',
        'https://translate.argosopentech.com/translate'
    ];

    const addMessage = (text, type) => {
        const message = document.createElement('div');
        message.className = `chatbot-message ${type === 'user' ? 'chatbot-user' : 'chatbot-bot'}`;
        message.textContent = text;
        chatbotMessages.appendChild(message);
        return message;
    };

    const scrollMessageToTop = (message) => {
        if (!message) return;
        message.scrollIntoView({ block: 'start' });
    };

    const getSchoolReply = (text) => {
        const value = text.toLowerCase();
        if (value.includes('fee') || value.includes('fees')) {
            return 'Fees details are available in the Fees payment section and the Guidebook.';
        }
        if (value.includes('program') || value.includes('course') || value.includes('curriculum')) {
            return 'We offer integrated Hifz, Arabic, and academic modules with holistic programs across primary, secondary, and co-curriculum activities.';
        }
        if (value.includes('apply') || value.includes('admission') || value.includes('register')) {
            return 'You can apply using the Apply Now button at the top of the page.';
        }
        if (value.includes('calendar') || value.includes('calender') || value.includes('takwim')) {
            return 'The academic calendar is available in the AAK Takwim section.';
        }
        if (value.includes('tahfiz') || value.includes('hifz') || value.includes('memorisation') || value.includes('quran memorisation')) {
            return 'Our Quran memorisation program uses the Photo Memory Memorisation Method (PMMM) for strong retention.';
        }
        if (value.includes('pmmm') || value.includes('photo memory')) {
            return 'PMMM stands for Photo Memory Memorisation Method, a visualisation-based approach used in our Quran memorisation program.';
        }
        if (value.includes('arabic') || value.includes('bahasa arab') || value.includes('language of the quran')) {
            return 'Arabic is offered as a core program focused on the language of the Quran.';
        }
        if (value.includes('character') || value.includes('akhlak') || value.includes('leadership')) {
            return 'Character development is a core pillar focused on building future leaders with strong values.';
        }
        if (value.includes('primary') || value.includes('kssr')) {
            return 'Primary education blends the KSSR syllabus with Islamic values.';
        }
        if (value.includes('secondary') || value.includes('kssm') || value.includes('cambridge')) {
            return 'Secondary education follows a dual syllabus approach (KSSM & Cambridge) with Islamic values.';
        }
        if (value.includes('co-curriculum') || value.includes('club') || value.includes('sports') || value.includes('arts')) {
            return 'Co-curriculum includes sports, arts, and clubs to support well-rounded development.';
        }
        if (value.includes('online') || value.includes('kelas online') || value.includes('remote')) {
            return 'Online Tahfiz & Arabic is available for flexible learning.';
        }
        if (value.includes('eco campus') || value.includes('camp') || value.includes('resort') || value.includes('white resort')) {
            return 'Our eco campus is at White Resort Camp, Kampung Genting, Balik Pulau, Penang.';
        }
        if (value.includes('learning style') || value.includes('ability based') || value.includes('learning approach')) {
            return 'Our learning style is ability-based learning to support students at their level.';
        }
        if (value.includes('teacher') || value.includes('principal') || value.includes('staff') || value.includes('educator')) {
            return 'Our educators and leadership details can be shared upon request. Please contact us for more.';
        }
        if (value.includes('admission period') || value.includes('intake') || value.includes('deadline')) {
            return 'Intake is open throughout the year. Contact us to get the latest availability and steps.';
        }
        if (value.includes('contact') || value.includes('email') || value.includes('phone') || value.includes('whatsapp')) {
            return 'Reach us via WhatsApp: +60 19-381 8616 or email: akademialkhayrofficial@gmail.com.';
        }
        if (value.includes('location') || value.includes('address') || value.includes('visit')) {
            return 'Akademi Al Khayr is located at White Resort Camp, Kampung Genting, 11000 Balik Pulau, Penang.';
        }
        if (value.includes('time') || value.includes('hours') || value.includes('schedule')) {
            return 'School hours are shared during registration. Contact us if you need the schedule.';
        }
        return 'I can help with admissions, programs, fees, calendar, campus location, or contact info. Ask about any of these.';
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
        return text
            .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
            .replace(/\u0640/g, '')
            .replace(/[^\u0600-\u06FF\s]/g, '')
            .trim();
    };

    const normalizeArabicForSearch = (text) => {
        return (text || '')
            .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
            .replace(/\u0640/g, '')
            .replace(/[^\u0600-\u06FF]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    };

    const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const containsArabicWord = (text, term) => {
        const normalizedText = normalizeArabicForSearch(text);
        const normalizedTerm = normalizeArabicForSearch(term);
        if (!normalizedText || !normalizedTerm) return false;
        const pattern = new RegExp(`(^|\\s)${escapeRegExp(normalizedTerm)}(\\s|$)`);
        return pattern.test(normalizedText);
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
        const term = word || '';
        const templates = [
            `يَرتكزُ الفهمُ الدقيقُ على إدراكِ معنى ${term} في موضعه.`,
            `يَسْتَبِينُ المقصودُ عند توظيف ${term} في جملةٍ واضحة.`,
            `تجيءُ كلمةُ ${term} في سياقٍ فصيحٍ يُوضِّحُ المعنى المراد.`,
            `يُستعانُ بـ${term} لإبراز الفكرة بأسلوبٍ عربيٍّ رصين.`,
            `يُوظَّفُ ${term} في التعبير المعياري للدلالة على المقصود.`,
            `تَرِدُ ${term} في النصوص الرصينة لتأكيد المعنى بدقّة.`
        ];
        const index = Math.floor(Math.random() * templates.length);
        return templates[index];
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
            const exactMatches = matches.filter((match) => containsArabicWord(match?.text || '', term));
            const selectedMatches = exactMatches.length ? exactMatches : matches;
            if (!selectedMatches.length) {
                return `No Quran matches found for "${term}".`;
            }
            const firstMatch = selectedMatches[0];
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

        await ensureArabicForms(resolvedEntry);

        const arabicForExample = resolvedEntry.arabic;
        const exampleSnippet = arabicForExample ? await fetchArabicQuranSnippet(arabicForExample) : null;
        if (exampleSnippet && typeof exampleSnippet !== 'string') {
            return {
                entry: resolvedEntry,
                exampleSnippet: exampleSnippet.snippet,
                exampleLabel: exampleSnippet.label,
                exampleSnippetClass: exampleSnippet.className,
                exampleRef: exampleSnippet.ref,
                exampleSentence: null,
                exampleError: null
            };
        }

        return {
            entry: resolvedEntry,
            exampleSnippet: null,
            exampleLabel: 'Example sentence:',
            exampleSentence: buildArabicExampleSentence(resolvedEntry.arabic),
            exampleError: null
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

        if (payload.exampleSentence) {
            const sentenceLabel = document.createElement('div');
            sentenceLabel.className = 'chatbot-translation-label';
            sentenceLabel.textContent = payload.exampleLabel || 'Example sentence:';
            container.appendChild(sentenceLabel);
            const sentence = document.createElement('div');
            sentence.className = 'chatbot-ayah-text';
            sentence.textContent = payload.exampleSentence;
            container.appendChild(sentence);
            return;
        }

        if (payload.exampleError) {
            const error = document.createElement('div');
            error.className = 'chatbot-translation-text';
            error.textContent = payload.exampleError;
            container.appendChild(error);
            return;
        }

        if (payload.exampleSnippet) {
            const snippet = document.createElement('div');
            snippet.className = payload.exampleSnippetClass || 'chatbot-translation-text';
            snippet.textContent = payload.exampleSnippet;
            container.appendChild(snippet);
            if (payload.exampleRef) {
                const reference = document.createElement('div');
                reference.className = 'chatbot-quran-title';
                reference.textContent = `[${payload.exampleRef}]`;
                container.appendChild(reference);
            }
            return;
        }

        if (payload.example) {
            const label = document.createElement('div');
            label.className = 'chatbot-translation-label';
            label.textContent = payload.exampleLabel || 'Example ayah:';
            container.appendChild(label);
            const exampleWrap = document.createElement('div');
            container.appendChild(exampleWrap);
            renderQuranReply(exampleWrap, payload.example);
        }
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
        const prevButton = document.createElement('button');
        prevButton.type = 'button';
        prevButton.textContent = 'Previous';
        const nextButton = document.createElement('button');
        nextButton.type = 'button';
        nextButton.textContent = 'Next';
        nav.appendChild(prevButton);
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
    };

    const setMode = (mode) => {
        activeMode = mode;
        if (modeSchool) {
            modeSchool.classList.toggle('chatbot-mode-active', mode === 'school');
        }
        if (modeQuran) {
            modeQuran.classList.toggle('chatbot-mode-active', mode === 'quran');
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
            chatbotInput.value = `surah ${surahNumber} ayah ${ayahNumber}`;
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
                const response = addMessage(reply, 'bot');
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
    if (modeArabic) {
        modeArabic.addEventListener('click', () => setMode('arabic'));
    }
    if (chatbotSurahSelect) {
        chatbotSurahSelect.addEventListener('change', () => {
            if (chatbotAyahInput) {
                chatbotAyahInput.focus();
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
