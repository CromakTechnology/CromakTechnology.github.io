// ==========================================
// PAINEL ÚNICO: MÚSICAS, RÁDIO E CIFRAS
// ==========================================

// Inicia o objeto global se ele não existir
window.defaultTiles = window.defaultTiles || {};

// Adiciona os dados exclusivos desta tela
window.defaultTiles['grid-musicas'] = [
    { pos: 'pos-1', url: 'https://palcomp3.com/', bg: '#409da5', img: 'lib/thumbs/palco-mp3.png', title: 'Palco MP3' },
    { pos: 'pos-2', url: 'https://deezer.com/', bg: '#4849a6', img: 'lib/thumbs/deezer.png', title: 'Deezer' },
    { pos: 'pos-3', url: 'https://kboing.com.br', bg: '#cd432d', img: 'lib/thumbs/kboing.png', title: 'Kboing' },
    { pos: 'pos-4', url: 'https://music.youtube.com/', bg: '#da8515', img: 'lib/thumbs/youtube-music.png', title: 'YouTube Music' },
    { pos: 'pos-5', url: 'https://spotify.com/', bg: '#7d9f2a', img: 'lib/thumbs/spotify.png', title: 'Spotify' },
    { pos: 'pos-6', url: 'https://vagalume.com.br/', bg: '#672c9b', img: 'lib/thumbs/vagalume.png', title: 'Vagalume' },
    { pos: 'pos-7', url: 'https://tchedownload.com.br/', bg: '#621354', img: 'lib/thumbs/cds-completos.png', title: 'CDs Completos' },
    { pos: 'pos-8', url: 'newtab.html', bg: '#f57c00', img: 'lib/thumbs/voltar.png', title: 'Voltar' },
    { pos: 'pos-9', url: 'https://soundcloud.com/', bg: '#7d9f2a', img: 'lib/thumbs/sound-cloud.png', title: 'SoundCloud' },
    { pos: 'pos-10', url: 'https://music.amazon.com/', bg: '#03417a', img: 'lib/thumbs/amazon-music.png', title: 'Amazon Music' },
    { pos: 'pos-11', url: 'https://cifraclub.com.br/', bg: '#409da5', img: 'lib/thumbs/cifra-club.png', title: 'Cifra Club' },
    { pos: 'pos-12', url: 'https://apple.com/itunes/', bg: '#da8515', img: 'lib/thumbs/itunes.png', title: 'iTunes' }
];

// O SEGREDO DA INJEÇÃO NA MEMÓRIA:
// Puxa a memória atual (com os outros grids) e injeta o grid de músicas lá dentro.
let currentMemory = JSON.parse(localStorage.getItem('customTiles')) || {};
if (!currentMemory['grid-musicas']) {
    currentMemory['grid-musicas'] = window.defaultTiles['grid-musicas'];
    localStorage.setItem('customTiles', JSON.stringify(currentMemory));
}