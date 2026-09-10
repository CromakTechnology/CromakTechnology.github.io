// ==========================================
// PAINEL ÚNICO: SERVIÇOS GOOGLE
// ==========================================

// Inicia o objeto global se ele não existir
window.defaultTiles = window.defaultTiles || {};

// Adiciona os dados exclusivos desta tela (Usando grid-google para não conflitar com o grid-1 da aba principal)
window.defaultTiles['grid-google'] = [
    { pos: 'pos-1', url: 'https://gemini.google.com/', bg: '#409da5', img: 'lib/thumbs/Gemini.png', title: 'Gemini' },
    { pos: 'pos-2', url: 'https://translate.google.com/', bg: '#4849a6', img: 'lib/thumbs/GoogleTranslate.png', title: 'Google Translate' },
    { pos: 'pos-3', url: 'https://news.google.com/', bg: '#cd432d', img: 'lib/thumbs/GoogleNews.png', title: 'Google News' },
    { pos: 'pos-4', url: 'https://www.blogger.com/', bg: '#da8515', img: 'lib/thumbs/GoogleBlogger.png', title: 'Google Blogger' },
    { pos: 'pos-5', url: 'https://drive.google.com/', bg: '#7d9f2a', img: 'lib/thumbs/GoogleDrive.png', title: 'Google Drive' },
    { pos: 'pos-6', url: 'https://google.com/', bg: '#672c9b', img: 'lib/thumbs/Google.png', title: 'Google' },
    { pos: 'pos-7', url: 'https://calendar.google.com/', bg: '#621354', img: 'lib/thumbs/GoogleCalendar.png', title: 'Google Calendar' },
    { pos: 'pos-8', url: 'newtab.html', bg: '#f57c00', img: 'lib/thumbs/Voltar.png', title: 'Voltar' },
    { pos: 'pos-9', url: 'https://maps.google.com/', bg: '#7d9f2a', img: 'lib/thumbs/GoogleMaps.png', title: 'Google Maps' },
    { pos: 'pos-10', url: 'https://mail.google.com/', bg: '#03417a', img: 'lib/thumbs/GoogleGmail.png', title: 'Google Gmail' },
    { pos: 'pos-11', url: 'https://play.google.com/', bg: '#409da5', img: 'lib/thumbs/GooglePlay.png', title: 'Google Play' },
    { pos: 'pos-12', url: 'https://support.google.com/', bg: '#da8515', img: 'lib/thumbs/GoogleSupport.png', title: 'Google Suporte' }
];

// INJEÇÃO NA MEMÓRIA:
let currentMemory = JSON.parse(localStorage.getItem('customTiles')) || {};
if (!currentMemory['grid-google']) {
    currentMemory['grid-google'] = window.defaultTiles['grid-google'];
    localStorage.setItem('customTiles', JSON.stringify(currentMemory));
}