// ==========================================
// PAINEL ÚNICO: JOGOS
// ==========================================

// Inicia o objeto global se ele não existir
window.defaultTiles = window.defaultTiles || {};

// Adiciona os dados exclusivos desta tela extraídos do backup 
window.defaultTiles['grid-games'] = [
    { pos: 'pos-1', url: 'https://store.epicgames.com/', bg: '#383838', img: 'lib/thumbs/epic-games.png', title: 'Epic Games' },
    { pos: 'pos-2', url: 'https://clickjogos.com.br', bg: '#4849a6', img: 'lib/thumbs/click-jogos.png', title: 'Click Jogos' },
    { pos: 'pos-3', url: 'https://discord.com', bg: '#cd432d', img: 'lib/thumbs/discord.png', title: 'Discord' },
    { pos: 'pos-4', url: '#', bg: '#da8515', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-5', url: 'https://craftlandia.com.br/', bg: '#7d9f2a', img: 'lib/thumbs/craftlandia.png', title: 'Craftlandia' },
    { pos: 'pos-6', url: 'https://twitch.tv/', bg: '#672c9b', img: 'lib/thumbs/twitch-tv.png', title: 'Twitch TV' },
    { pos: 'pos-7', url: '#', bg: '#621354', img: 'lib/thumbs/personalize.png', title: 'Personalizar' },
    { pos: 'pos-8', url: 'newtab.html', bg: '#f57c00', img: 'lib/thumbs/voltar.png', title: 'Voltar' },
    { pos: 'pos-9', url: 'https://gamevicio.com', bg: '#03417a', img: 'lib/thumbs/game-vicio.png', title: 'Game Vício' },
    { pos: 'pos-10', url: 'https://my.games/', bg: '#1a1a1a', img: 'lib/thumbs/my-games.png', title: 'MyGames' },
    { pos: 'pos-11', url: 'https://y8.com', bg: '#409da5', img: 'lib/thumbs/y8.png', title: 'Y8' },
    { pos: 'pos-12', url: 'https://store.steampowered.com/', bg: '#00203d', img: 'lib/thumbs/steam.png', title: 'Steam' }
];

// O SEGREDO DA INJEÇÃO NA MEMÓRIA:
// Puxa a memória atual (com os outros grids) e injeta o grid de jogos lá dentro.
let currentMemory = JSON.parse(localStorage.getItem('customTiles')) || {};
if (!currentMemory['grid-games']) {
    currentMemory['grid-games'] = window.defaultTiles['grid-games'];
    localStorage.setItem('customTiles', JSON.stringify(currentMemory));
}