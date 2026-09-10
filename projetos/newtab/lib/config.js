document.addEventListener('DOMContentLoaded', () => {
    // --- 1. ELEMENTOS DA INTERFACE ---
    const floatingBtn = document.getElementById('floating-config-btn');
    const configDropdown = document.getElementById('config-dropdown');
    
    // Botões do Menu
    const openPrefsBtn = document.getElementById('open-prefs');
    const openAboutBtn = document.getElementById('open-about');
    
    // Modais
    const modalOverlay = document.getElementById('settings-modal'); // Modal de Preferências
    const aboutModal = document.getElementById('about-modal');      // Modal Sobre
    
    // Botões de Fechar
    const closeModalBtn = document.getElementById('close-modal');
    const closeAboutModal = document.getElementById('close-about-modal');
    
    // Botões e Campos de Preferências
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    const bgColorPicker = document.getElementById('bg-color-picker');
    const bgImageUrl = document.getElementById('bg-image-url');
    const bgImageFile = document.getElementById('bg-image-file');
    const clearBgBtn = document.getElementById('clear-bg-btn');
    const panelColorPicker = document.getElementById('panel-color-picker');
    const panelOpacity = document.getElementById('panel-opacity');
	
	const uiZoom = document.getElementById('ui-zoom');
    const exportBackupBtn = document.getElementById('export-backup-btn');
    const importBackupFile = document.getElementById('import-backup-file');

    // Função auxiliar para converter Hexadecimal (#FFFFFF) em RGB (255, 255, 255)
    function hexToRgb(hex) {
        let r = 0, g = 0, b = 0;
        hex = hex.replace('#', '');
        if (hex.length === 6) {
            r = parseInt(hex.substring(0, 2), 16);
            g = parseInt(hex.substring(2, 4), 16);
            b = parseInt(hex.substring(4, 6), 16);
        }
        return `${r}, ${g}, ${b}`;
    }

    // --- 2. CARREGAR PREFERÊNCIAS SALVAS ---
    const savedBgColor = localStorage.getItem('prefBgColor') || '#1a1a2e';
    const savedBgImage = localStorage.getItem('prefBgImage') || '';
    const savedPanelColor = localStorage.getItem('prefPanelColor') || '#000000';
    const savedPanelOpacity = localStorage.getItem('prefPanelOpacity') || '0.2';
	
	const savedZoom = localStorage.getItem('prefZoom') || '1';
    document.documentElement.style.setProperty('--ui-zoom', savedZoom);
    if (uiZoom) uiZoom.value = savedZoom;

    // Aplica no visual
    document.body.style.backgroundColor = savedBgColor;
    document.body.style.backgroundImage = savedBgImage ? `url('${savedBgImage}')` : 'none';
    
    const rgbPanel = hexToRgb(savedPanelColor);
    document.querySelectorAll('.metro-wrapper').forEach(wrapper => {
        wrapper.style.backgroundColor = `rgba(${rgbPanel}, ${savedPanelOpacity})`;
    });

    // Preenche caixas do modal
    if (bgColorPicker) bgColorPicker.value = savedBgColor;
    if (bgImageUrl) bgImageUrl.value = savedBgImage;
    if (panelColorPicker) panelColorPicker.value = savedPanelColor;
    if (panelOpacity) panelOpacity.value = savedPanelOpacity;


    // --- 3. LÓGICA DO MENU SUSPENSO E MODAIS ---
    
    // Abre/fecha o menu dropdown
    if (floatingBtn && configDropdown) {
        floatingBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            configDropdown.classList.toggle('show');
        });

        // Fecha o menu ao clicar fora dele
        document.addEventListener('click', (e) => {
            if (!configDropdown.contains(e.target) && e.target !== floatingBtn) {
                configDropdown.classList.remove('show');
            }
        });
    }

    // Abre Preferências pelo Menu
    if (openPrefsBtn) {
        openPrefsBtn.addEventListener('click', () => {
            configDropdown.classList.remove('show'); // Esconde o menu
            modalOverlay.classList.add('show');      // Mostra a janela
        });
    }

    // Abre Sobre pelo Menu
    if (openAboutBtn) {
        openAboutBtn.addEventListener('click', () => {
            configDropdown.classList.remove('show'); // Esconde o menu
            aboutModal.classList.add('show');        // Mostra a janela
        });
    }

    // Fechar Modais (no X ou clicando fora)
    if (closeModalBtn) closeModalBtn.addEventListener('click', () => modalOverlay.classList.remove('show'));
    if (closeAboutModal) closeAboutModal.addEventListener('click', () => aboutModal.classList.remove('show'));
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.remove('show');
    });
    if (aboutModal) {
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) aboutModal.classList.remove('show');
        });
    }


    // --- 4. UPLOAD DE IMAGEM E LIMPAR ---
    if (bgImageFile) {
        bgImageFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    bgImageUrl.value = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (clearBgBtn) {
        clearBgBtn.addEventListener('click', () => bgImageUrl.value = '');
    }


    // --- 5. SALVAR PREFERÊNCIAS GERAIS ---
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', () => {
            const newColor = bgColorPicker.value;
            const newImage = bgImageUrl.value.trim();
            const newPanelColor = panelColorPicker.value;
            const newOpacity = panelOpacity.value;
			const newZoom = uiZoom.value;

            // Salva no Navegador
            localStorage.setItem('prefBgColor', newColor);
            localStorage.setItem('prefBgImage', newImage);
            localStorage.setItem('prefPanelColor', newPanelColor);
            localStorage.setItem('prefPanelOpacity', newOpacity);
			localStorage.setItem('prefZoom', newZoom);

            // Aplica instantaneamente
            document.body.style.backgroundColor = newColor;
            document.body.style.backgroundImage = newImage ? `url('${newImage}')` : 'none';
			document.documentElement.style.setProperty('--ui-zoom', newZoom);
            
            const newRgbPanel = hexToRgb(newPanelColor);
            document.querySelectorAll('.metro-wrapper').forEach(wrapper => {
                wrapper.style.backgroundColor = `rgba(${newRgbPanel}, ${newOpacity})`;
            });
            
            modalOverlay.classList.remove('show');
        });
    }

    // --- 6. TÍTULOS EDITÁVEIS ---
    [1, 2, 3, 4, 'google', 'videos', 'musicas', 'games', 'store', 'ia'].forEach(num => {
        const titleEl = document.getElementById(`title-${num}`);
        if (titleEl) {
            const savedTitle = localStorage.getItem(`prefTitle${num}`);
            if (savedTitle) titleEl.innerText = savedTitle;

            titleEl.addEventListener('blur', () => {
                localStorage.setItem(`prefTitle${num}`, titleEl.innerText.trim());
            });
            
            titleEl.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    titleEl.blur(); 
                }
            });
        }
    });
	
	// --- 7. SISTEMA DE BACKUP ---
    if (exportBackupBtn) {
        exportBackupBtn.addEventListener('click', () => {
            const data = JSON.stringify(localStorage);
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'cromak_newtab_backup.json';
            a.click();
            URL.revokeObjectURL(url);
        });
    }

    if (importBackupFile) {
        importBackupFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    localStorage.clear(); // Limpa o atual
                    for (let key in data) {
                        localStorage.setItem(key, data[key]); // Importa o novo
                    }
                    alert('Backup restaurado com sucesso! A página será recarregada.');
                    location.reload();
                } catch (err) {
                    alert('Erro ao ler o arquivo de backup. Arquivo inválido.');
                }
            };
            reader.readAsText(file);
        });
    }
	
	// ==========================================
    // SISTEMA DE REDEFINIÇÃO (FACTORY RESET)
    // ==========================================
    const resetBtn = document.getElementById('reset-settings-btn');
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            const confirmReset = confirm(
                "ATENÇÃO: Tem certeza que deseja redefinir TUDO para o padrão?\n\n" +
                "Isso apagará suas configurações, cores, títulos e atalhos editados.\n" +
                "(Um backup de emergência será baixado automaticamente antes de apagar)."
            );

            if (confirmReset) {
                // 1. BACKUP AUTOMÁTICO DE SALVA-VIDAS
                const currentData = localStorage.getItem('customTiles');
                if (currentData) {
                    const blob = new Blob([currentData], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'cromak_backup_emergencia.json';
                    a.click();
                    URL.revokeObjectURL(url); // Limpa a URL temporária da memória
                }

                // 2. Limpa todo o cache do localStorage
                localStorage.clear();
                
                // 3. Tenta injetar os dados padrões de volta imediatamente (se existirem)
                if (typeof window.defaultTiles !== 'undefined') {
                    localStorage.setItem('customTiles', JSON.stringify(window.defaultTiles));
                }
                
                // 4. Recarrega a página ignorando o cache do navegador
                window.location.reload(true);
            }
        });
    }
	
});

	