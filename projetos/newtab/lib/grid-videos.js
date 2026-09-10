// ==========================================
// PAINEL ÚNICO: VÍDEOS E STREAMING
// ==========================================

// Inicia o objeto global se ele não existir
window.defaultTiles = window.defaultTiles || {};

// Adiciona os dados exclusivos desta tela
window.defaultTiles['grid-videos'] = [
    { pos: 'pos-1', url: 'https://netflix.com.br/', bg: '#409da5', img: 'lib/thumbs/netflix.png', title: 'Netflix' },
    { pos: 'pos-2', url: 'https://www.dailymotion.com/', bg: '#4849a6', img: 'lib/thumbs/dailymotion.png', title: 'dailymotion' },
    { pos: 'pos-3', url: '#', bg: '#cd432d', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-4', url: '#', bg: '#da8515', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-5', url: '#', bg: '#7d9f2a', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-6', url: 'https://www.primevideo.com', bg: '#672c9b', img: 'lib/thumbs/amazon-prime-video.png', title: 'Prime Video' },
    { pos: 'pos-7', url: '#', bg: '#621354', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-8', url: 'newtab.html', bg: '#f57c00', img: 'lib/thumbs/voltar.png', title: 'Voltar' },
    { pos: 'pos-9', url: '#', bg: '#7d9f2a', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-10', url: '#', bg: '#03417a', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-11', url: '#', bg: '#409da5', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-12', url: '#', bg: '#1a1a1a', img: 'lib/thumbs/personalize.png', title: 'Personalizar' }
];

// O SEGREDO DA INJEÇÃO NA MEMÓRIA:
// Puxa a memória atual (com os grids 1 a 4) e injeta o grid de vídeos lá dentro.
let currentMemory = JSON.parse(localStorage.getItem('customTiles')) || {};
if (!currentMemory['grid-videos']) {
    currentMemory['grid-videos'] = window.defaultTiles['grid-videos'];
    localStorage.setItem('customTiles', JSON.stringify(currentMemory));
}
