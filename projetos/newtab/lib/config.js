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
    const helpModal = document.getElementById('help-modal');        // Modal Ajuda
    
    // Botões de Fechar
    const closeModalBtn = document.getElementById('close-modal');
    const closeAboutModal = document.getElementById('close-about-modal');
    const closeHelpModal = document.getElementById('close-help-modal');
    
    // Botões e Campos de Preferências
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    const bgColorPicker = document.getElementById('bg-color-picker');
    const bgImageUrl = document.getElementById('bg-image-url');
    const bgImageFile = document.getElementById('bg-image-file');
    const clearBgBtn = document.getElementById('clear-bg-btn');
    const panelColorPicker = document.getElementById('panel-color-picker');
    const panelOpacity = document.getElementById('panel-opacity');
    const clockTimeoutEl = document.getElementById('clock-timeout');
    const weatherCityEl = document.getElementById('weather-city');
	
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
    const savedPanelColor = localStorage.getItem('prefPanelColor') || '#ffffff';
    const savedPanelOpacity = localStorage.getItem('prefPanelOpacity') || '0.2';
	
	const savedZoom = localStorage.getItem('prefZoom') || '1';
    const savedClockTimeout = localStorage.getItem('prefClockTimeout') || '15000';
    const savedWeatherCity = localStorage.getItem('prefWeatherCity') || '';
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
    if (clockTimeoutEl) clockTimeoutEl.value = savedClockTimeout;
    if (weatherCityEl) weatherCityEl.value = savedWeatherCity;


        // ==========================================
    // GALERIA DE WALLPAPERS (CARREGAMENTO PREGUIÇOSO)
    // ==========================================
    const openGalleryBtn = document.getElementById('open-gallery-btn');
    const galleryModal = document.getElementById('gallery-modal');
    const closeGalleryModal = document.getElementById('close-gallery-modal');
    const wallpaperGrid = document.getElementById('wallpaper-grid');

    const wallpapers = [
        { name: 'alpes', title: 'Montanhas & Lagos' },
        { name: 'lago-barco', title: 'Montanhas & Lagos' },
        { name: 'fiorde', title: 'Montanhas & Lagos' },
        { name: 'aurora', title: 'Noite & Céu' },
        { name: 'himalaia-noite', title: 'Noite & Céu' },
        { name: 'praia-rosa', title: 'Praias & Costas' },
        { name: 'islandia-praia', title: 'Praias & Costas' },
        { name: 'floresta-luz', title: 'Natureza & Água' },
        { name: 'cachoeira-arcoiris', title: 'Natureza & Água' },
        { name: 'lavandas', title: 'Campos & Savanas' },
        { name: 'savana', title: 'Campos & Savanas' },
        { name: 'deserto-dunas', title: 'Deserto' },
        { name: 'floresta-outono', title: 'Outono & Inverno' },
        { name: 'lago-glacial', title: 'Outono & Inverno' },
        { name: 'dolomitas-italianas', title: 'Montanhas & Formações' },
        { name: 'montanhas-arco-iris', title: 'Montanhas & Formações' },
        { name: 'turquia-capadocia', title: 'Montanhas & Formações' },
        { name: 'terraco-arroz', title: 'Campos & Vinhedos' },
        { name: 'colinas-toscana-vinhedos', title: 'Campos & Vinhedos' },
        { name: 'floresta-pinheiros', title: 'Florestas Místicas' },
        { name: 'pantano-ciprestes', title: 'Florestas Místicas' },
        { name: 'floresta-bambu', title: 'Florestas Místicas' }
    ];

    let galleryLoaded = false;

    if (openGalleryBtn && galleryModal) {
        openGalleryBtn.addEventListener('click', (e) => {
            e.preventDefault();
            galleryModal.classList.add('show');
            
            if (!galleryLoaded) {
                wallpaperGrid.innerHTML = '';
                wallpapers.forEach(wp => {
                    const item = document.createElement('div');
                    item.style.cursor = 'pointer';
                    item.style.borderRadius = '6px';
                    item.style.overflow = 'hidden';
                    item.style.border = '2px solid transparent';
                    item.style.transition = '0.2s';
                    
                    item.onmouseover = () => item.style.border = '2px solid #00aef0';
                    item.onmouseout = () => item.style.border = '2px solid transparent';
                    
                    item.innerHTML = `
                        <img src="lib/wallpaper/${wp.name}_thumb.jpg" alt="${wp.title}" style="width: 100%; height: 112px; object-fit: cover; display: block;">
                        <div style="background: rgba(0,0,0,0.6); padding: 5px; text-align: center; font-size: 12px; color: #fff;">${wp.title}</div>
                    `;
                    
                    item.addEventListener('click', () => {
                        const url = `lib/wallpaper/${wp.name}.jpg`;
                        const bgImageUrl = document.getElementById('bg-image-url');
                        if (bgImageUrl) bgImageUrl.value = url;
                        document.body.style.backgroundImage = `url('${url}')`;
                        galleryModal.classList.remove('show');
                    });
                    
                    wallpaperGrid.appendChild(item);
                });
                galleryLoaded = true;
            }
        });
        
        if (closeGalleryModal) {
            closeGalleryModal.addEventListener('click', () => {
                galleryModal.classList.remove('show');
            });
        }
    }

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
            
            if (window.innerWidth <= 768) {
                alert("Ops! Essas configurações só funcionam no PC. 💻\n\nAcesse pelo computador para personalizar sua página.\n\nPrecisa de ajuda? Vá em 'Configurações > Ajuda' ou conheça o desenvolvedor em 'Sobre'.");
                return;
            }
            
            modalOverlay.classList.add('show');      // Mostra a janela
        });
    }

    // Abre Ajuda pelo Menu
    const openHelpBtn = document.getElementById('open-help');
    if (openHelpBtn) {
        openHelpBtn.addEventListener('click', () => {
            configDropdown.classList.remove('show');
            if (helpModal) helpModal.classList.add('show');
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
    if (closeHelpModal) closeHelpModal.addEventListener('click', () => helpModal.classList.remove('show'));
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.remove('show');
    });
    if (aboutModal) {
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) aboutModal.classList.remove('show');
        });
    }
    if (helpModal) {
        helpModal.addEventListener('click', (e) => {
            if (e.target === helpModal) helpModal.classList.remove('show');
        });
    }

    
    // Lógica da Caixa de Pesquisa da Ajuda
    const helpSearchInput = document.getElementById('help-search');
    if (helpSearchInput) {
        helpSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const topics = document.querySelectorAll('#help-modal .help-topic');
            
            topics.forEach(topic => {
                const text = topic.innerText.toLowerCase();
                if (text.includes(query)) {
                    topic.style.display = '';
                } else {
                    topic.style.display = 'none';
                }
            });
            
            // Oculta os títulos das seções se estiver pesquisando
            const sectionTitles = document.querySelectorAll('#help-modal .help-section-title');
            sectionTitles.forEach(title => {
                title.style.display = query.length > 0 ? 'none' : '';
            });
        });
    }

    
    // --- LÓGICA DO MODAL DE TEXTO (EULA/PRIVACIDADE) ---
    const textModal = document.getElementById('text-modal');
    const closeTextModal = document.getElementById('close-text-modal');
    const textModalTitle = document.getElementById('text-modal-title');
    const textModalBody = document.getElementById('text-modal-body');

    if (textModal) {
        document.querySelectorAll('.open-text-modal').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const file = link.getAttribute('data-file');
                textModalTitle.innerText = file;
                textModalBody.innerText = 'Carregando...';
                textModal.classList.add('show');
                
                fetch(file)
                    .then(res => res.text())
                    .then(text => {
                        textModalBody.innerText = text;
                    })
                    .catch(err => {
                        textModalBody.innerText = 'Erro ao carregar o arquivo: ' + file;
                    });
            });
        });

        if (closeTextModal) closeTextModal.addEventListener('click', () => textModal.classList.remove('show'));
        textModal.addEventListener('click', (e) => {
            if (e.target === textModal) textModal.classList.remove('show');
        });
    }

    // --- 3.5 MODAL DE BEM-VINDO (ONBOARDING) ---
    const welcomeModal = document.getElementById('welcome-modal');
    const closeWelcomeBtn = document.getElementById('close-welcome-btn');
    const startWelcomeBtn = document.getElementById('start-welcome-btn');
    const dontShowWelcome = document.getElementById('dont-show-welcome');

    if (welcomeModal) {
        const hideWelcome = localStorage.getItem('hideWelcome');
        if (!hideWelcome) {
            setTimeout(() => welcomeModal.classList.add('show'), 500); // Exibe com leve atraso
        }

        function closeWelcome() {
            if (dontShowWelcome && dontShowWelcome.checked) {
                localStorage.setItem('hideWelcome', 'true');
            }
            welcomeModal.classList.remove('show');
        }

        if (closeWelcomeBtn) closeWelcomeBtn.addEventListener('click', closeWelcome);
        if (startWelcomeBtn) startWelcomeBtn.addEventListener('click', closeWelcome);
        
        welcomeModal.addEventListener('click', (e) => {
            if (e.target === welcomeModal) closeWelcome();
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
            const newClockTimeout = clockTimeoutEl ? clockTimeoutEl.value : '15000';
            const newWeatherCity = weatherCityEl ? weatherCityEl.value.trim() : '';

            // Salva no Navegador
            localStorage.setItem('prefBgColor', newColor);
            localStorage.setItem('prefBgImage', newImage);
            localStorage.setItem('prefPanelColor', newPanelColor);
            localStorage.setItem('prefPanelOpacity', newOpacity);
			localStorage.setItem('prefZoom', newZoom);
            localStorage.setItem('prefClockTimeout', newClockTimeout);
            localStorage.setItem('prefWeatherCity', newWeatherCity);

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
    // ==========================================
    // SISTEMA DE ABAS (PREFERÊNCIAS) E HELP
    // ==========================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                const targetTab = document.getElementById(btn.getAttribute('data-tab'));
                if (targetTab) targetTab.classList.add('active');
            });
        });
    }

    const btnHowToHomepage = document.getElementById('btn-how-to-homepage');
    if (btnHowToHomepage) {
        btnHowToHomepage.addEventListener('click', (e) => {
            e.preventDefault();
            const settingsModal = document.getElementById('settings-modal');
            const helpModal = document.getElementById('help-modal');
            
            if (settingsModal) settingsModal.classList.remove('show');
            if (helpModal) helpModal.classList.add('show');
        });
    }

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

	