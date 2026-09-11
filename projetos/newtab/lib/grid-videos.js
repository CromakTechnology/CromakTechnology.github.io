// ==========================================
// PAINEL ÚNICO: VÍDEOS E STREAMING
// ==========================================

// Inicia o objeto global se ele não existir
window.defaultTiles = window.defaultTiles || {};

// Adiciona os dados exclusivos desta tela
window.defaultTiles['grid-videos'] = [
    { pos: 'pos-1', url: 'https://netflix.com.br/', bg: '#b1000e', img: 'lib/thumbs/netflix.png', title: 'Netflix' },
    { pos: 'pos-2', url: 'https://dailymotion.com/', bg: '#4849a6', img: 'lib/thumbs/dailymotion.png', title: 'dailymotion' },
    { pos: 'pos-3', url: '#', bg: '#cd432d', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-4', url: '#', bg: '#438143', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-5', url: '#', bg: '#972453', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-6', url: 'https://primevideo.com', bg: '#303030', img: 'lib/thumbs/amazon-prime-video.png', title: 'Prime Video' },
    { pos: 'pos-7', url: '#', bg: '#400b39', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-8', url: 'newtab.html', bg: '#f57c00', img: 'lib/thumbs/voltar.png', title: 'Voltar' },
    { pos: 'pos-9', url: '#', bg: '#486806', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-10', url: '#', bg: '#193f79', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-11', url: '#', bg: '#5e151a', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-12', url: '#', bg: '#1a1a1a', img: 'lib/thumbs/personalize.png', title: 'Personalizar' }
];

// O SEGREDO DA INJEÇÃO NA MEMÓRIA:
// Puxa a memória atual (com os grids 1 a 4) e injeta o grid de vídeos lá dentro.
let currentMemory = JSON.parse(localStorage.getItem('customTiles')) || {};
if (!currentMemory['grid-videos']) {
    currentMemory['grid-videos'] = window.defaultTiles['grid-videos'];
    localStorage.setItem('customTiles', JSON.stringify(currentMemory));
}