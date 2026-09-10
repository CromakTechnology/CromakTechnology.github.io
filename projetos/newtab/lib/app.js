// JS DE NEW TAB (Versão Organizada e Sincronizada)

// --- VARIÁVEIS GLOBAIS E CONFIGURAÇÕES ---
const MAX_HISTORY = 10;

const engineMap = {
    'Google': 'google', 'Bing': 'bing', 'Yahoo': 'yahoo', 'DuckDuckGo': 'duckduckgo',
    'Qwant': 'qwant', 'Amazon': 'amazon', 'Wikipedia': 'wikipedia', 'YouTube': 'youtube', 'PirateBay': 'piratebay'
};

// --- HISTÓRICO DE PESQUISAS ---
let searchHistoryData = JSON.parse(localStorage.getItem('searchHistory') || '[]');

function saveHistory() {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistoryData));
}

function renderHistory(suffix) {
    const historyList = document.getElementById(`history-list${suffix}`);
    if (!historyList) return;

    historyList.innerHTML = '';
    if (searchHistoryData.length === 0) {
        historyList.innerHTML = '<div class="history-item" style="color: #999; cursor: default;">Nenhuma pesquisa recente</div>';
        return;
    }
    
    searchHistoryData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `<span>${item.query}</span><span class="delete-item" data-index="${index}">×</span>`;
        
        div.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-item')) {
                e.stopPropagation();
                searchHistoryData.splice(index, 1);
                saveHistory();
                // Atualiza o visual do histórico nas 4 telas
                ['', '-2', '-3', '-4'].forEach(s => renderHistory(s));
            } else {
                const searchInput = document.getElementById(`search-input${suffix}`);
                const searchForm = document.getElementById(`search-form${suffix}`);
                if (searchInput && searchForm) {
                    searchInput.value = item.query;
                    searchForm.submit();
                }
            }
        });
        historyList.appendChild(div);
    });
}

function addToHistory(query, engineName) {
    if (!query.trim()) return;
    searchHistoryData = searchHistoryData.filter(item => item.query !== query);
    searchHistoryData.unshift({ query: query, engine: engineName, timestamp: Date.now() });
    if (searchHistoryData.length > MAX_HISTORY) searchHistoryData = searchHistoryData.slice(0, MAX_HISTORY);
    saveHistory();
    // Atualiza o histórico nas 4 telas
    ['', '-2', '-3', '-4'].forEach(s => renderHistory(s));
}

// --- DADOS PADRÃO DOS TILES ---
let localData = JSON.parse(localStorage.getItem('customTiles'));
// Só usa o localStorage se ele não estiver vazio. Caso contrário, puxa dos arquivos grid.js
let userTiles = (localData && Object.keys(localData).length > 0) ? localData : window.defaultTiles;

// --- FUNÇÃO GERADORA DE TILES ---
function renderAllTiles() {
    if (!userTiles) return;
    
    // Percorre todas as grids (grid-1, grid-2, grid-3, grid-4)
    Object.keys(userTiles).forEach(gridId => {
        const gridContainer = document.getElementById(gridId);
        if (!gridContainer) return;

        // Remove os tiles antigos antes de desenhar os novos
        const tilesAntigos = gridContainer.querySelectorAll('.tile');
        tilesAntigos.forEach(t => t.remove());

        // Cria cada bloco com base no JSON
        userTiles[gridId].forEach(tileData => {
            const a = document.createElement('a');
            a.href = tileData.url;
            a.target = tileData.url.startsWith('http') ? '_blank' : '_self';
            a.className = `tile ${tileData.pos}`;
            a.style.backgroundColor = tileData.bg;
            a.title = tileData.title;

            const img = document.createElement('img');
            img.src = tileData.img;
            img.alt = tileData.title;

            a.appendChild(img);
            
            // LÓGICA CORRIGIDA:
            const searchBox = gridContainer.querySelector('.search-metro-box');
            
            if (searchBox) {
                // Insere o tile DEPOIS da caixa de pesquisa (mantém o DOM limpo)
                gridContainer.insertBefore(a, searchBox.nextSibling);
            } else {
                // Se não tiver caixa de pesquisa, adiciona no final do container
                gridContainer.appendChild(a);
            }
        });
    });
}

// --- SINCRONIZAÇÃO DE BUSCADORES ---
function applyGlobalSearchEngine() {
    // Puxa as configurações do localStorage (ou usa Google como padrão)
    const name = localStorage.getItem('prefEngineName') || 'Google';
    const key = localStorage.getItem('prefEngineKey') || 'google';
    const url = localStorage.getItem('prefEngineUrl') || 'https://www.google.com/search';
    const param = localStorage.getItem('prefEngineParam') || 'q';

    // Aplica nas 4 caixas ao mesmo tempo
    ['', '-2', '-3', '-4'].forEach(suffix => {
        const searchForm = document.getElementById(`search-form${suffix}`);
        const searchInput = document.getElementById(`search-input${suffix}`);
        const currentIcon = document.getElementById(`current-engine-icon${suffix}`);
        const menu = document.getElementById(`engines-menu${suffix}`);

        if (searchForm && searchInput && currentIcon && menu) {
            // Atualiza formulário e campo de texto
            searchForm.setAttribute('action', url);
            searchInput.setAttribute('name', param);
            searchInput.placeholder = `Pesquisar no ${name}...`;
            
            // Atualiza o ícone central
            currentIcon.src = `lib/buttons/${key}.png`;
            
            // Atualiza o estilo (ativo/hover) dentro do menu de opções
            menu.querySelectorAll('.quick-engine').forEach(iconMenu => {
                iconMenu.classList.remove('active');
                iconMenu.src = `lib/buttons/${engineMap[iconMenu.getAttribute('data-name')]}.png`;
                
                if (iconMenu.getAttribute('data-name') === name) {
                    iconMenu.classList.add('active');
                    iconMenu.src = `lib/buttons/${key}-hover.png`;
                }
            });
        }
    });
}


// --- INICIALIZAÇÃO DE CAIXA DE PESQUISA INDIVIDUAL ---
function initSearchBox(suffix) {
    const btnConfig = document.getElementById(`btn-config${suffix}`);
    const enginesMenu = document.getElementById(`engines-menu${suffix}`);
    const searchForm = document.getElementById(`search-form${suffix}`);
    const searchInput = document.getElementById(`search-input${suffix}`);
    const currentEngineIcon = document.getElementById(`current-engine-icon${suffix}`);
    const clearSearchBtn = document.getElementById(`clear-search${suffix}`);
    const searchHistory = document.getElementById(`search-history${suffix}`);
    const engineIcons = document.querySelectorAll(`#engines-menu${suffix} .quick-engine`);

    if (!searchForm || !searchInput) return; 

    function updateClearButton() {
        if (clearSearchBtn) clearSearchBtn.style.display = searchInput.value.trim().length > 0 ? 'block' : 'none';
    }

    function toggleHistory(show) {
        if (show && searchHistoryData.length > 0) {
            renderHistory(suffix);
            searchHistory.classList.add('show');
        } else {
            searchHistory.classList.remove('show');
        }
    }

    searchInput.addEventListener('input', () => {
        updateClearButton();
        toggleHistory(searchInput.value === '');
    });
    
    searchInput.addEventListener('focus', () => {
        if (searchInput.value === '') toggleHistory(true);
    });

    if (clearSearchBtn) {
        // Efeito Hover Automático
        clearSearchBtn.addEventListener('mouseenter', () => clearSearchBtn.src = 'lib/buttons/clear-hover.png');
        clearSearchBtn.addEventListener('mouseleave', () => clearSearchBtn.src = 'lib/buttons/clear.png');

        // Ação de Limpar
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            updateClearButton();
            searchInput.focus();
            toggleHistory(true);
        });
    }

    if (currentEngineIcon) {
        currentEngineIcon.addEventListener('mouseenter', () => {
            const currentKey = localStorage.getItem('prefEngineKey') || 'google';
            currentEngineIcon.src = `lib/buttons/${currentKey}-hover.png`;
        });
        currentEngineIcon.addEventListener('mouseleave', () => {
            const currentKey = localStorage.getItem('prefEngineKey') || 'google';
            currentEngineIcon.src = `lib/buttons/${currentKey}.png`;
        });
    }

    if (btnConfig) {
        // Efeito Hover Automático
        btnConfig.addEventListener('mouseenter', () => btnConfig.src = 'lib/buttons/search-config-hover.png');
        btnConfig.addEventListener('mouseleave', () => btnConfig.src = 'lib/buttons/search-config.png');

        // Ação de abrir o menu
        btnConfig.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            enginesMenu.classList.toggle('show');
            searchHistory.classList.remove('show');
        });
    }

    engineIcons.forEach(icon => {
        const engineName = icon.getAttribute('data-name');
        const engineKey = engineMap[engineName];
        const normalSrc = `lib/buttons/${engineKey}.png`;
        const hoverSrc = `lib/buttons/${engineKey}-hover.png`;

        icon.addEventListener('mouseenter', () => { if (!icon.classList.contains('active')) icon.src = hoverSrc; });
        icon.addEventListener('mouseleave', () => { if (!icon.classList.contains('active')) icon.src = normalSrc; });
        
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Salva as preferências de quem foi clicado no LocalStorage
            localStorage.setItem('prefEngineName', engineName);
            localStorage.setItem('prefEngineKey', engineKey);
            localStorage.setItem('prefEngineUrl', icon.getAttribute('data-url'));
            localStorage.setItem('prefEngineParam', icon.getAttribute('data-param'));
            
            // Fecha todos os menus abertos
            document.querySelectorAll('.engines-menu').forEach(m => m.classList.remove('show'));
            
            // Dispara a função que atualiza as 4 caixas ao mesmo tempo
            applyGlobalSearchEngine();
            
            // Efeito visual de foco
            searchInput.style.opacity = '0';
            setTimeout(() => {
                searchInput.style.opacity = '1';
                searchInput.focus();
            }, 150);
        });
    });

    searchForm.addEventListener('submit', () => {
        // Ao submeter, envia o nome do motor atualizado salvo no localstorage
        const currentName = localStorage.getItem('prefEngineName') || 'Google';
        addToHistory(searchInput.value.trim(), currentName);
    });

    renderHistory(suffix);
    updateClearButton();
}


// --- INICIALIZAÇÃO GERAL E EVENTOS GLOBAIS ---
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa as 4 caixas de pesquisa
    initSearchBox('');
    initSearchBox('-2');
    initSearchBox('-3');
    initSearchBox('-4');

    // Puxa do localStorage e aplica aos buscadores na hora que a página carrega
    applyGlobalSearchEngine(); 
	
	renderAllTiles();

    // --- LÓGICA DO SLIDER ---
    let currentSlide = 0;
    const totalSlides = 4;
    const sliderContainer = document.querySelector('.slider-container');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    function updateSlider() {
        if (!sliderContainer) return;
        sliderContainer.style.transform = `translateX(-${currentSlide * 100}vw)`;
        if (btnPrev) btnPrev.style.display = currentSlide === 0 ? 'none' : 'block';
        if (btnNext) btnNext.style.display = currentSlide >= totalSlides - 1 ? 'none' : 'block';
    }

    if (btnNext) btnNext.addEventListener('click', () => { if (currentSlide < totalSlides - 1) { currentSlide++; updateSlider(); } });
    if (btnPrev) btnPrev.addEventListener('click', () => { if (currentSlide > 0) { currentSlide--; updateSlider(); } });

    // --- NOVA LÓGICA: NAVEGAÇÃO POR SCROLL (RODA DO MOUSE) ---
    let isScrolling = false; // Trava para evitar pulos duplos
    
    window.addEventListener('wheel', (e) => {
        if (isScrolling) return; // Se estiver no meio da animação, ignora o scroll

        if (e.deltaY > 0) {
            // Rolou para baixo (Próxima tela)
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateSlider();
                isScrolling = true;
                setTimeout(() => isScrolling = false, 500); // 500ms = tempo da sua transição CSS
            }
        } else if (e.deltaY < 0) {
            // Rolou para cima (Tela anterior)
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
                isScrolling = true;
                setTimeout(() => isScrolling = false, 500);
            }
        }
    });

    updateSlider();
});

// --- JANELA MODAL DE CONFIGURAÇÕES GERAIS ---
    const floatingBtn = document.getElementById('floating-config-btn');
    const modalOverlay = document.getElementById('settings-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    const bgColorPicker = document.getElementById('bg-color-picker');

    // 1. Carrega as preferências salvas no LocalStorage quando a página abre
    const savedBgColor = localStorage.getItem('prefBgColor');
    if (savedBgColor) {
        document.body.style.backgroundColor = savedBgColor;
        if(bgColorPicker) bgColorPicker.value = savedBgColor;
    }

    if (floatingBtn && modalOverlay) {
        // Abre o modal
        floatingBtn.addEventListener('click', () => modalOverlay.classList.add('show'));

        // Fecha no 'X'
        closeModalBtn.addEventListener('click', () => modalOverlay.classList.remove('show'));

        // Fecha clicando fora da janela
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) modalOverlay.classList.remove('show');
        });

        // 2. Salva as preferências no LocalStorage e aplica
        saveSettingsBtn.addEventListener('click', () => {
            // Salva e aplica a cor
            const newColor = bgColorPicker.value;
            document.body.style.backgroundColor = newColor;
            localStorage.setItem('prefBgColor', newColor);
            
            // Fecha a janela
            modalOverlay.classList.remove('show');
        });
    }
	
// --- FUNÇÃO GERADORA DE TILES ---
function renderAllTiles() {
    if (!userTiles) return;
    
    Object.keys(userTiles).forEach(gridId => {
        const gridContainer = document.getElementById(gridId);
        if (!gridContainer) return;

        const tilesAntigos = gridContainer.querySelectorAll('.tile');
        tilesAntigos.forEach(t => t.remove());

        userTiles[gridId].forEach((tileData, index) => {
            const a = document.createElement('a');
            a.href = tileData.url;
            a.target = tileData.url.startsWith('http') ? '_blank' : '_self';
            a.className = `tile ${tileData.pos}`;
            a.style.backgroundColor = tileData.bg;
            a.title = `Segure ALT + Clique para editar`; // Dica no mouse

            const img = document.createElement('img');
            img.src = tileData.img;
            img.alt = tileData.title;
            a.appendChild(img);
            
            // NOVO MÉTODO: ALT + CLIQUE
            a.addEventListener('click', (e) => {
                if (e.altKey) {
                    e.preventDefault(); // Bloqueia a abertura do link
                    openTileEditor(gridId, index, tileData);
                }
            });
            
            const searchBox = gridContainer.querySelector('.search-metro-box');
            if (searchBox) {
                gridContainer.insertBefore(a, searchBox.nextSibling);
            } else {
                gridContainer.appendChild(a);
            }
        });
    });
}

// --- LÓGICA DO EDITOR DE BLOCOS ---

// 1. A função de abrir a janela pode ficar solta, mas ela só busca o HTML na hora do clique
function openTileEditor(gridId, index, tileData) {
    const tileModal = document.getElementById('tile-modal');
    
    document.getElementById('tile-edit-title').value = tileData.title;
    document.getElementById('tile-edit-url').value = tileData.url;
    document.getElementById('tile-edit-img').value = tileData.img;
    document.getElementById('tile-edit-bg').value = tileData.bg;
    document.getElementById('tile-edit-grid').value = gridId;
    document.getElementById('tile-edit-index').value = index;
    
    tileModal.classList.add('show');
}

// 2. Os cliques de Salvar, Fechar e Upload SÓ funcionam depois que a página carregou
document.addEventListener('DOMContentLoaded', () => {
    const tileModal = document.getElementById('tile-modal');
    const closeTileModalBtn = document.getElementById('close-tile-modal');
    const saveTileBtn = document.getElementById('save-tile-btn');
    const tileImageFile = document.getElementById('tile-image-file');

    // Fechar Janela
    if (closeTileModalBtn && tileModal) {
        closeTileModalBtn.addEventListener('click', () => tileModal.classList.remove('show'));
        tileModal.addEventListener('click', (e) => {
            if (e.target === tileModal) tileModal.classList.remove('show');
        });
    }

    // Converter Imagem do PC para Base64
    if (tileImageFile) {
        tileImageFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.getElementById('tile-edit-img').value = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Salvar Dados
    if (saveTileBtn) {
        saveTileBtn.addEventListener('click', () => {
            const gridId = document.getElementById('tile-edit-grid').value;
            const index = document.getElementById('tile-edit-index').value;
            
            // Atualiza os dados na memória
            userTiles[gridId][index].title = document.getElementById('tile-edit-title').value;
            userTiles[gridId][index].url = document.getElementById('tile-edit-url').value;
            userTiles[gridId][index].img = document.getElementById('tile-edit-img').value;
            userTiles[gridId][index].bg = document.getElementById('tile-edit-bg').value;
            
            // Salva no HD do navegador
            localStorage.setItem('customTiles', JSON.stringify(userTiles));
            
            // Redesenha a tela e fecha
            renderAllTiles();
            tileModal.classList.remove('show');
        });
    }
});

