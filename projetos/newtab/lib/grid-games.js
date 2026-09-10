// ==========================================
// PAINEL ÚNICO: JOGOS
// ==========================================

// Inicia o objeto global se ele não existir
window.defaultTiles = window.defaultTiles || {};

// Adiciona os dados exclusivos desta tela extraídos do backup
window.defaultTiles['grid-games'] = [
    { pos: 'pos-1', url: 'https://store.epicgames.com/', bg: '#409da5', img: 'lib/thumbs/EpicGames.png', title: 'Epic Games' },
    { pos: 'pos-2', url: 'https://clickjogos.com.br', bg: '#4849a6', img: 'lib/thumbs/ClickJogos.png', title: 'Click Jogos' },
    { pos: 'pos-3', url: 'https://discord.com', bg: '#cd432d', img: 'lib/thumbs/Discord.png', title: 'Discord' },
    { pos: 'pos-4', url: 'https://minecraftmods.com/', bg: '#da8515', img: 'lib/thumbs/MinecraftMods.png', title: 'MinecraftMods' },
    { pos: 'pos-5', url: 'https://craftlandia.com.br/', bg: '#7d9f2a', img: 'lib/thumbs/Craftlandia.png', title: 'Craftlandia' },
    { pos: 'pos-6', url: 'https://twitch.tv/', bg: '#672c9b', img: 'lib/thumbs/TwitchTV.png', title: 'Twitch TV' },
    { pos: 'pos-7', url: 'https://skidrowreloaded.com/', bg: '#621354', img: 'lib/thumbs/Jogoscompletos.png', title: 'Jogos Completos' },
    { pos: 'pos-8', url: 'newtab.html', bg: '#f57c00', img: 'lib/thumbs/Voltar.png', title: 'Voltar' },
    { pos: 'pos-9', url: 'https://gamevicio.com', bg: '#03417a', img: 'lib/thumbs/GameVicio.png', title: 'Game Vício' },
    { pos: 'pos-10', url: 'https://my.games/', bg: '#7d9f2a', img: 'lib/thumbs/MyGames.png', title: 'MyGames' },
    { pos: 'pos-11', url: 'https://y8.com', bg: '#409da5', img: 'lib/thumbs/y8.png', title: 'Y8' },
    { pos: 'pos-12', url: 'https://store.steampowered.com/?l=portuguese', bg: '#da8515', img: 'lib/thumbs/Steam.png', title: 'Steam' }
];

// O SEGREDO DA INJEÇÃO NA MEMÓRIA:
// Puxa a memória atual (com os outros grids) e injeta o grid de jogos lá dentro.
let currentMemory = JSON.parse(localStorage.getItem('customTiles')) || {};
if (!currentMemory['grid-games']) {
    currentMemory['grid-games'] = window.defaultTiles['grid-games'];
    localStorage.setItem('customTiles', JSON.stringify(currentMemory));
}