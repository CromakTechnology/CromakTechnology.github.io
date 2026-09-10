// ==========================================
// PAINEL ÚNICO: VÍDEOS E STREAMING
// ==========================================

// Inicia o objeto global se ele não existir
window.defaultTiles = window.defaultTiles || {};

// Adiciona os dados exclusivos desta tela
window.defaultTiles['grid-videos'] = [
    { pos: 'pos-1', url: 'https://netflix.com.br/', bg: '#409da5', img: 'lib/thumbs/Netflix.png', title: 'Netflix' },
    { pos: 'pos-2', url: 'https://www.dailymotion.com/', bg: '#4849a6', img: 'lib/thumbs/dailymotion.png', title: 'dailymotion' },
    { pos: 'pos-3', url: 'https://gupifilm.com/', bg: '#cd432d', img: 'lib/thumbs/TopFlix.png', title: 'TopFlix' },
    { pos: 'pos-4', url: 'https://vizer.autos/', bg: '#da8515', img: 'lib/thumbs/VizerTV.png', title: 'Vizer TV' },
    { pos: 'pos-5', url: 'https://www.vidks.net/', bg: '#7d9f2a', img: 'lib/thumbs/AssistirTVOnlineGratis.png', title: 'Assistir TV Online Gratis' },
    { pos: 'pos-6', url: 'https://www.primevideo.com', bg: '#672c9b', img: 'lib/thumbs/amazon_prime_video.png', title: 'Prime Video' },
    { pos: 'pos-7', url: 'https://animefire.plus', bg: '#621354', img: 'lib/thumbs/AnimeFire.png', title: 'AnimeFire' },
    { pos: 'pos-8', url: 'newtab.html', bg: '#f57c00', img: 'lib/thumbs/Voltar.png', title: 'Voltar' },
    { pos: 'pos-9', url: 'https://pluto.tv', bg: '#7d9f2a', img: 'lib/thumbs/AssistirTVOnlineGratis2.png', title: 'Assistir TV Online' },
    { pos: 'pos-10', url: 'https://br.justwatch.com', bg: '#03417a', img: 'lib/thumbs/FilmesOnlineGratis.png', title: 'Filmes e Séries Online' },
    { pos: 'pos-11', url: 'https://filmeseriesonline.net/', bg: '#409da5', img: 'lib/thumbs/MegaBlogFilmes.png', title: 'Mega Blog Filmes' },
    { pos: 'pos-12', url: 'https://xvideos.com/', bg: '#1a1a1a', img: 'lib/thumbs/ApenasParaAdultos.png', title: 'XVideos' }
];

// O SEGREDO DA INJEÇÃO NA MEMÓRIA:
// Puxa a memória atual (com os grids 1 a 4) e injeta o grid de vídeos lá dentro.
let currentMemory = JSON.parse(localStorage.getItem('customTiles')) || {};
if (!currentMemory['grid-videos']) {
    currentMemory['grid-videos'] = window.defaultTiles['grid-videos'];
    localStorage.setItem('customTiles', JSON.stringify(currentMemory));
}