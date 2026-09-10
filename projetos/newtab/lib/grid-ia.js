// ==========================================
// PAINEL ÚNICO: INTELIGÊNCIA ARTIFICIAL
// ==========================================

window.defaultTiles = window.defaultTiles || {};

// Cores baseadas na identidade visual de cada IA  
window.defaultTiles['grid-ia'] = [
    { pos: 'pos-1', url: 'https://chat.qwenlm.ai/', bg: '#10a37f', img: 'lib/thumbs/qwen.png', title: 'Qwen' },
    { pos: 'pos-2', url: 'https://copilot.microsoft.com/', bg: '#0067b8', img: 'lib/thumbs/copilot.png', title: 'Copilot' },
    { pos: 'pos-3', url: 'https://midjourney.com/', bg: '#672c9b', img: 'lib/thumbs/midjourney.png', title: 'Midjourney' },
    { pos: 'pos-4', url: 'https://heydola.com/', bg: '#da8515', img: 'lib/thumbs/dola-ia.png', title: 'Dola' },
    { pos: 'pos-5', url: 'https://perplexity.ai/', bg: '#03417a', img: 'lib/thumbs/perplexity.png', title: 'Perplexity' },
    { pos: 'pos-6', url: 'https://gemini.google.com/', bg: '#409da5', img: 'lib/thumbs/gemini.png', title: 'Gemini' },
    { pos: 'pos-7', url: 'https://chatgpt.com/', bg: '#2b2b2b', img: 'lib/thumbs/chat-gpt.png', title: 'ChatGPT' },
    { pos: 'pos-8', url: 'newtab.html', bg: '#f57c00', img: 'lib/thumbs/voltar.png', title: 'Voltar' },
    { pos: 'pos-9', url: 'https://meta.ai/', bg: '#0668E1', img: 'lib/thumbs/meta-ia.png', title: 'Meta AI' },
    { pos: 'pos-10', url: 'https://claude.ai/', bg: '#d97757', img: 'lib/thumbs/claude.png', title: 'Claude' },
    { pos: 'pos-11', url: 'https://leonardo.ai/', bg: '#cd432d', img: 'lib/thumbs/leonardo.png', title: 'Leonardo AI' },
    { pos: 'pos-12', url: 'https://suno.com/', bg: '#7d9f2a', img: 'lib/thumbs/suno.png', title: 'Suno AI' }
];

// Injeção Automática de Memória
let currentMemory = JSON.parse(localStorage.getItem('customTiles')) || {};
if (!currentMemory['grid-ia']) {
    currentMemory['grid-ia'] = window.defaultTiles['grid-ia'];
    localStorage.setItem('customTiles', JSON.stringify(currentMemory));
}