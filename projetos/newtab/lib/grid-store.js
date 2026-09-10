// ==========================================
// PAINEL ÚNICO: LOJAS ONLINE
// ==========================================

// Inicia o objeto global se ele não existir
window.defaultTiles = window.defaultTiles || {};

// Adiciona os dados exclusivos desta tela extraídos do backup[cite: 4]
window.defaultTiles['grid-store'] = [
    { pos: 'pos-1', url: 'https://casasbahia.com.br/', bg: '#334dbd', img: 'lib/thumbs/casas-bahia.png', title: 'Casas Bahia' },
    { pos: 'pos-2', url: 'http://olx.com.br', bg: '#4849a6', img: 'lib/thumbs/olx.png', title: 'OLX' },
    { pos: 'pos-3', url: 'https://pichaugaming.com.br/', bg: '#cd432d', img: 'lib/thumbs/pichau.png', title: 'Pichau' },
    { pos: 'pos-4', url: 'https://aliexpress.com/', bg: '#a1000a', img: 'lib/thumbs/aliexpress.png', title: 'Aliexpress' },
    { pos: 'pos-5', url: 'https://zoom.com.br/', bg: '#7d9f2a', img: 'lib/thumbs/zoom.png', title: 'Zoom' },
    { pos: 'pos-6', url: 'https://shopee.com.br/', bg: '#f67a19', img: 'lib/thumbs/shopee.png', title: 'Shopee' },
    { pos: 'pos-7', url: 'https://kabum.com.br/', bg: '#621354', img: 'lib/thumbs/kabum.png', title: 'Kabum' },
    { pos: 'pos-8', url: 'newtab.html', bg: '#f57c00', img: 'lib/thumbs/voltar.png', title: 'Voltar' },
    { pos: 'pos-9', url: 'http://shein.com/', bg: '#404040', img: 'lib/thumbs/shein.png', title: 'Shein' },
    { pos: 'pos-10', url: 'https://mercadolivre.com.br', bg: '#03417a', img: 'lib/thumbs/mercado-livre.png', title: 'Mercado Livre' },
    { pos: 'pos-11', url: 'https://amazon.com', bg: '#f8af1d', img: 'lib/thumbs/amazon.png', title: 'Amazon' },
    { pos: 'pos-12', url: 'https://magazineluiza.com.br', bg: '#3c8dd9', img: 'lib/thumbs/magalu.png', title: 'Magazine Luiza' }
];

// Injeção de Memória
let currentMemory = JSON.parse(localStorage.getItem('customTiles')) || {};
if (!currentMemory['grid-store']) {
    currentMemory['grid-store'] = window.defaultTiles['grid-store'];
    localStorage.setItem('customTiles', JSON.stringify(currentMemory));
}