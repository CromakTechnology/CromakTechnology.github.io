// menu.js
// Script para injetar o Cabeçalho, Rodapé e Caixa de Pesquisa Global do site Cromak Technology

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Detectar o idioma baseado na URL (se tiver "/en/" na URL, é inglês)
    const isEnglish = window.location.pathname.includes("/en/");
    const lang = isEnglish ? "en" : "pt";

    // Dicionário de traduções
    const dict = {
        "pt": {
            "home": "Início",
            "products": "Produtos ▼",
            "features": "Recursos",
            "about": "Sobre",
            "support": "Suporte",
            "search_label": "Pesquisar softwares (Ctrl+K)",
            "search_input_placeholder": "Pesquisar softwares, recursos, ferramentas...",
            "search_all": "Todos",
            "search_navigate": "Navegar",
            "search_select": "Abrir",
            "search_close": "Fechar",
            "search_featured": "Softwares em Destaque",
            "search_results": "Resultados Encontrados",
            "search_empty_title": "Nenhum software encontrado",
            "search_empty_hint": "Tente pesquisar por firewall, rollback, criptografia, ram, apk, nvda...",
            "lang_select": "Mudar Idioma",
            "privacy": "Privacidade",
            "terms": "Termos de Uso",
            "sitemap": "Mapa do Site",
            "rights": "Cromak Technology. Todos os direitos reservados.",
            // Categorias de Produtos
            "cat_security": "Segurança & Rede",
            "cat_dev": "Desenvolvimento",
            "cat_utils": "Utilitários",
            "cat_accessibility": "Acessibilidade & IA",
            "cat_optimization": "Otimização"
        },
        "en": {
            "home": "Home",
            "products": "Products ▼",
            "features": "Features",
            "about": "About",
            "support": "Support",
            "search_label": "Search software (Ctrl+K)",
            "search_input_placeholder": "Search software, features, tools...",
            "search_all": "All",
            "search_navigate": "Navigate",
            "search_select": "Open",
            "search_close": "Close",
            "search_featured": "Featured Software",
            "search_results": "Found Results",
            "search_empty_title": "No software found",
            "search_empty_hint": "Try searching for firewall, rollback, encryption, ram, apk, nvda...",
            "lang_select": "Change Language",
            "privacy": "Privacy",
            "terms": "Terms of Use",
            "sitemap": "Site Map",
            "rights": "Cromak Technology. All rights reserved.",
            // Categorias de Produtos
            "cat_security": "Security & Network",
            "cat_dev": "Development",
            "cat_utils": "Utilities",
            "cat_accessibility": "Accessibility & AI",
            "cat_optimization": "Optimization"
        }
    };

    const t = dict[lang];

    // 2. Injetar Cabeçalho
    const headerPlaceholder = document.getElementById("cromak-header");
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
        <header>
            <div class="container header-inner">
                <a href="index.html" class="logo"><img src="../images/cromaklogob.png" alt="Cromak Technology"></a>
                
                <div class="header-mobile-actions">
                    <button class="mobile-search-trigger" id="mobileSearchBtn" type="button" aria-label="${t.search_label}" title="${t.search_label}">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                    <button class="menu-toggle" id="mobile-menu">☰</button>
                </div>
                
                <nav id="nav-menu">
                    <a href="index.html">${t.home}</a>
                    
                    <div class="dropdown">
                        <button class="dropbtn">${t.products}</button>
                        <div class="dropdown-content">
                            
                            <!-- Submenu: Segurança & Rede -->
                            <div class="dropdown-submenu">
                                <a href="#" class="submenu-btn">${t.cat_security} <span>▸</span></a>
                                <div class="submenu-content">
                                    <a href="connection-blackout.html">Connection Blackout</a>
                                    <a href="forensics.html">Forensics Security</a>
                                    <a href="install-protector.html">Install Protector</a>
                                    <a href="instant-rollback.html">Instant Rollback</a>
                                    <a href="metadata_remover.html">Metadata Remover</a>
                                    <a href="network-fix.html">Network Fix</a>
                                    <a href="password_guard.html">Password Guard</a>
                                    <a href="silent-observer.html">Silent Observer</a>
                                    <a href="smart-crypt.html">Smart Crypt</a>
                                    <a href="syslock.html">SysLock</a>
                                    <a href="update-guardian.html">Update Guardian</a>
                                </div>
                            </div>
                            
                            <!-- Submenu: Desenvolvimento -->
                            <div class="dropdown-submenu">
                                <a href="#" class="submenu-btn">${t.cat_dev} <span>▸</span></a>
                                <div class="submenu-content">
                                    <a href="install_compiler.html">Install Compiler</a>
                                    <a href="web_to_apk_compiler.html">Web To Apk Compiler</a>
                                </div>
                            </div>
                            
                            <!-- Submenu: Acessibilidade & IA -->
                            <div class="dropdown-submenu">
                                <a href="#" class="submenu-btn">${t.cat_accessibility} <span>▸</span></a>
                                <div class="submenu-content">
                                    <a href="bridge-vox.html">Bridge Vox</a>
                                </div>
                            </div>

                            <!-- Submenu: Otimização -->
                            <div class="dropdown-submenu">
                                <a href="#" class="submenu-btn">${t.cat_optimization} <span>▸</span></a>
                                <div class="submenu-content">
                                    <a href="cromak-zip.html">Cromak ZIP</a>
                                    <a href="deepclean_suite.html">DeepClean Suite</a>
                                </div>
                            </div>

                            <!-- Submenu: Utilitários -->
                            <div class="dropdown-submenu">
                                <a href="#" class="submenu-btn">${t.cat_utils} <span>▸</span></a>
                                <div class="submenu-content">
                                    <a href="clock.html">Clock & Alarm</a>
                                    <a href="converter.html">Universal Converter</a>
                                    <a href="dock.html">Dock</a>
                                    <a href="file-finder.html">File Finder</a>
                                    <a href="new-tab-service.html">NewTab</a>
                                    <a href="png_to_ico_converter.html">PNG To ICO Converter</a>
                                    <a href="photoviewer.html">Photo Viewer</a>
                                    <a href="screen-recorder.html">Screen Recorder</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <a href="index.html#arsenal">${t.features}</a>
                    <a href="sobre.html">${t.about}</a>
                    <a href="suporte.html">${t.support}</a>
                    
                    <!-- Bloco de Ações e Ferramentas (Divisor + Lupa Neon + Globo) -->
                    <div class="nav-actions-group">
                        <div class="nav-divider" aria-hidden="true"></div>
                        
                        <!-- Botão Minimalista com SVG de Lupa (Efeito Neon) -->
                        <button class="header-search-btn" id="openSearchBtn" type="button" aria-label="${t.search_label}" title="${t.search_label}">
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>

                        <!-- Seletor Moderno de Idioma com SVG de Globo -->
                        <div class="dropdown lang-dropdown">
                            <button class="dropbtn lang-dropbtn" aria-label="${t.lang_select}" title="${t.lang_select}">
                                <svg class="globe-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <span class="lang-code-text">${lang.toUpperCase()}</span>
                                <span class="lang-arrow">▾</span>
                            </button>
                            <div class="dropdown-content lang-dropdown-content">
                                <a href="#" onclick="mudarIdioma('pt', event)" class="lang-opt ${lang === 'pt' ? 'active-lang' : ''}">
                                    <svg class="lang-check-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Português
                                </a>
                                <a href="#" onclick="mudarIdioma('en', event)" class="lang-opt ${lang === 'en' ? 'active-lang' : ''}">
                                    <svg class="lang-check-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    English
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        `;
    }

    // 3. Injetar Rodapé
    const footerPlaceholder = document.getElementById("cromak-footer");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer>
            <div class="container">
                <div class="footer-links">
                    <a href="privacidade.html">${t.privacy}</a>
                    <a href="termos.html">${t.terms}</a>
                    <a href="../sitemap.html">${t.sitemap}</a>
                </div>
                <p>&copy; <span id="ano-atual"></span> ${t.rights}</p>
            </div>
        </footer>
        <!-- BOTÃO VOLTAR AO TOPO -->
        <button id="backToTopBtn" title="Voltar ao topo">↑</button>
        
        <!-- MODAL DO LIGHTBOX GLOBAL -->
        <div id="lightboxModal" class="lightbox-modal">
            <span class="lightbox-close" id="closeLightbox">&times;</span>
            <img class="lightbox-content" id="lightboxImg">
            <div class="lightbox-caption" id="lightboxCaption"></div>
        </div>
        `;
        const anoEl = document.getElementById("ano-atual");
        if (anoEl) anoEl.textContent = new Date().getFullYear();
    }

    // 4. Injetar Modal de Pesquisa Global no DOM
    const searchModalHTML = `
    <div id="cromakSearchModal" class="cromak-search-modal" aria-hidden="true" role="dialog" aria-modal="true">
        <div class="cromak-search-backdrop" id="searchBackdrop"></div>
        <div class="cromak-search-card">
            <div class="cromak-search-header">
                <svg class="search-lens-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" id="cromakSearchInput" class="cromak-search-input" placeholder="${t.search_input_placeholder}" autocomplete="off" spellcheck="false">
                <button type="button" class="cromak-search-clear-btn" id="searchClearBtn" aria-label="Limpar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <button type="button" class="cromak-search-close-btn" id="searchCloseBtn" title="${t.search_close} (ESC)">
                    <kbd>ESC</kbd>
                </button>
            </div>
            
            <div class="cromak-search-categories" id="searchCategories">
                <button class="cromak-search-pill active" data-category="all">${t.search_all}</button>
                <button class="cromak-search-pill" data-category="security">${t.cat_security}</button>
                <button class="cromak-search-pill" data-category="optimization">${t.cat_optimization}</button>
                <button class="cromak-search-pill" data-category="accessibility">${t.cat_accessibility}</button>
                <button class="cromak-search-pill" data-category="dev">${t.cat_dev}</button>
                <button class="cromak-search-pill" data-category="utils">${t.cat_utils}</button>
            </div>

            <div class="cromak-search-body" id="searchResultsBody">
                <!-- Renderizado dinamicamente via JS -->
            </div>

            <div class="cromak-search-footer">
                <div class="cromak-search-footer-hints">
                    <span><kbd>↑</kbd><kbd>↓</kbd> ${t.search_navigate}</span>
                    <span><kbd>↵</kbd> ${t.search_select}</span>
                    <span><kbd>ESC</kbd> ${t.search_close}</span>
                </div>
                <div class="cromak-search-footer-count" id="searchResultsCount">0 softwares</div>
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", searchModalHTML);

    // 5. Catálogo Global de Softwares Cromak
    const softwareCatalog = [
        {
            file: "instant-rollback.html",
            category: "security",
            categoryName: t.cat_security,
            badgeClass: "cromak-badge-security",
            badge: "Auto-Heal / VSS",
            name: "Cromak Instant Rollback",
            desc: lang === "pt"
                ? "Recuperação instantânea contra desastres e auto-heal em segundos para PDV, ERP e Windows com Golden Image SHA-256."
                : "Instant disaster recovery and sub-second auto-heal for POS, ERP, and Windows with SHA-256 Golden Image.",
            keywords: "instant rollback auto heal restauracao recuperacao desastre pdv caixa erp vss golden image backup offline"
        },
        {
            file: "silent-observer.html",
            category: "security",
            categoryName: t.cat_security,
            badgeClass: "cromak-badge-security",
            badge: "FIM Forense",
            name: "Cromak Silent Observer",
            desc: lang === "pt"
                ? "File Integrity Monitoring (FIM em tempo real) com 0% CPU, árvores de Merkle e assinaturas digitais Ed25519."
                : "Real-time File Integrity Monitoring (FIM) with 0% CPU overhead, Merkle trees, and Ed25519 digital signatures.",
            keywords: "silent observer fim integridade arquivos forense antifraude merkle tree ed25519 auditoria kernel"
        },
        {
            file: "smart-crypt.html",
            category: "security",
            categoryName: t.cat_security,
            badgeClass: "cromak-badge-security",
            badge: "AES-256-GCM",
            name: "Cromak Smart Crypt",
            desc: lang === "pt"
                ? "Blindagem criptográfica militar AES-256-GCM AEAD e Argon2id para documentos fiscais, bancos e conformidade LGPD."
                : "Military-grade encryption with AES-256-GCM AEAD and Argon2id for enterprise files, databases, and GDPR compliance.",
            keywords: "smart crypt criptografia aes 256 gcm argon2id cofre virtual pastas seguras lgpd gdpr sigilo"
        },
        {
            file: "update-guardian.html",
            category: "security",
            categoryName: t.cat_security,
            badgeClass: "cromak-badge-security",
            badge: "Update Freeze",
            name: "Cromak Update Guardian",
            desc: lang === "pt"
                ? "Governança corporativa de updates do Windows, congelamento de componentes e auditoria de certificados X.509."
                : "Enterprise Windows update governance, component freezing, dry-run simulations, and X.509 cert audits.",
            keywords: "update guardian windows update freeze congelamento simulacao dry run x509 certificados estabilidade"
        },
        {
            file: "connection-blackout.html",
            category: "security",
            categoryName: t.cat_security,
            badgeClass: "cromak-badge-security",
            badge: "Firewall / Kill Switch",
            name: "Cromak Connection Blackout",
            desc: lang === "pt"
                ? "Firewall avançado com Total Lockdown em 50ms, gravador de tráfego .CSV, radar Netstat e filtro web."
                : "Advanced firewall matrix with sub-50ms Total Lockdown, live .CSV traffic recorder, Netstat radar, and web filter.",
            keywords: "connection blackout firewall rede kill switch radar netstat filtro web bloqueio sockets vazamento"
        },
        {
            file: "deepclean_suite.html",
            category: "optimization",
            categoryName: t.cat_optimization,
            badgeClass: "cromak-badge-optimization",
            badge: "Kernel C++",
            name: "Cromak DeepClean Suite",
            desc: lang === "pt"
                ? "Otimizador de PC de nível Kernel, limpeza de registro x64, Game Booster, liberação de RAM e desfragmentação MFT/TRIM."
                : "Kernel-level PC optimizer, x64 registry cleaner, Game Booster, RAM recovery, and MFT/TRIM defragmentation.",
            keywords: "deepclean suite otimizador limpeza pc registro game booster ram ssd trim mft desfragmentador"
        },
        {
            file: "bridge-vox.html",
            category: "accessibility",
            categoryName: t.cat_accessibility,
            badgeClass: "cromak-badge-accessibility",
            badge: "IA Autônoma & NVDA",
            name: "Cromak Bridge Vox",
            desc: lang === "pt"
                ? "Agente autônomo de IA Desktop que unifica Groq, Gemini, OpenAI e Claude com controle por voz e acessibilidade NVDA."
                : "Autonomous desktop AI agent unifying Groq, Gemini, OpenAI, and Claude with voice control and NVDA accessibility.",
            keywords: "bridge vox ia inteligência artificial groq gemini openai claude narrador nvda acessibilidade voz"
        },
        {
            file: "install-protector.html",
            category: "security",
            categoryName: t.cat_security,
            badgeClass: "cromak-badge-security",
            badge: "Zero-Trust",
            name: "Cromak Install Protector",
            desc: lang === "pt"
                ? "Segurança Endpoint Zero-Trust com blindagem do Registro do Windows, bloqueio inteligente de instaladores e anti-adware."
                : "Zero-Trust Endpoint Security for Windows: intelligent installer blocking, registry shield, and anti-adware.",
            keywords: "install protector seguranca instalacao anti adware bloqueio instaladores registro zero trust"
        },
        {
            file: "metadata_remover.html",
            category: "security",
            categoryName: t.cat_security,
            badgeClass: "cromak-badge-security",
            badge: "Anti-Forense",
            name: "Cromak Metadata Remover",
            desc: lang === "pt"
                ? "Destruição atômica e higienização profunda de metadados Exif, IPTC, XMP em fotos, vídeos e documentos."
                : "Deep sanitization and atomic destruction of Exif, IPTC, and XMP metadata in images, videos, and documents.",
            keywords: "metadata remover metadados exif iptc xmp privacidade anonimato higienizacao fotos arquivos"
        },
        {
            file: "network-fix.html",
            category: "security",
            categoryName: t.cat_security,
            badgeClass: "cromak-badge-security",
            badge: "Reparo TCP/IP",
            name: "Cromak Network Fix",
            desc: lang === "pt"
                ? "Diagnóstico, reparo e restauração de pilha de rede TCP/IP, flush de DNS e resets de sockets em segundos."
                : "Diagnose, repair, and restore TCP/IP network stacks, flush DNS, and reset sockets in seconds.",
            keywords: "network fix reparo rede tcp ip dns flush sockets conexao internet reparador ping"
        },
        {
            file: "password_guard.html",
            category: "security",
            categoryName: t.cat_security,
            badgeClass: "cromak-badge-security",
            badge: "Cofre Offline",
            name: "Cromak Password Guard",
            desc: lang === "pt"
                ? "Cofre local de credenciais e senhas criptografadas com derivação PBKDF2 e operação 100% desconectada."
                : "Offline credentials and password vault with PBKDF2 encryption and strict zero-cloud architecture.",
            keywords: "password guard senhas cofre credenciais pbkdf2 criptografia offline segredo"
        },
        {
            file: "syslock.html",
            category: "security",
            categoryName: t.cat_security,
            badgeClass: "cromak-badge-security",
            badge: "Lockdown OS",
            name: "Cromak SysLock",
            desc: lang === "pt"
                ? "Bloqueio e gestão de restrições do sistema operacional, controle de portas USB e travas de integridade."
                : "Complete OS control and restriction management, USB port locks, and system integrity enforcement.",
            keywords: "syslock trava bloqueio sistema portas usb permissoes integridade windows restricoes"
        },
        {
            file: "forensics.html",
            category: "security",
            categoryName: t.cat_security,
            badgeClass: "cromak-badge-security",
            badge: lang === "pt" ? "Perícia & OSINT" : "Forensics & OSINT",
            name: "Cromak Forensics Security",
            desc: lang === "pt"
                ? "Suíte completa com 20 motores modulares: perícia do Windows, criptografia CFE (.cfe) com Pepper, esteganografia LSB e sanitização militar."
                : "Complete digital forensics suite with 20 modular engines: Windows artifacts, CFE (.cfe) encryption with Pepper, LSB steganography, and military disk wipe.",
            keywords: "forensics pericia seguranca cfe pepper esteganografia prefetch shimcache osint wipe shredder investigacao custody artifacts triage"
        },
        {
            file: "cromak-zip.html",
            category: "optimization",
            categoryName: t.cat_optimization,
            badgeClass: "cromak-badge-optimization",
            badge: "CMKZ + Zstd",
            name: "Cromak ZIP",
            desc: lang === "pt"
                ? "Compactador nativo em Rust (cmkz.dll), 18 formatos, miniaturas em RAM, AES-256-GCM e gerador CromakSFX (.exe)."
                : "Native Rust archiver (cmkz.dll), 18 formats, in-RAM image thumbnails, AES-256-GCM encryption, and CromakSFX (.exe) builder.",
            keywords: "cromak zip cmkz rar 7z zstd compactador extrator sfx aes256 miniaturas"
        },
        {
            file: "install_compiler.html",
            category: "dev",
            categoryName: t.cat_dev,
            badgeClass: "cromak-badge-dev",
            badge: "Compilador",
            name: "Cromak Install Compiler",
            desc: lang === "pt"
                ? "Compilador profissional de instaladores executáveis .exe nativos para distribuição segura de softwares."
                : "Professional Windows executable installer builder for reliable and fast software deployment.",
            keywords: "install compiler compilador instalador setup exe criador instaladores dev software"
        },
        {
            file: "web_to_apk_compiler.html",
            category: "dev",
            categoryName: t.cat_dev,
            badgeClass: "cromak-badge-dev",
            badge: "Android APK",
            name: "Cromak Web To Apk Compiler",
            desc: lang === "pt"
                ? "Conversor de aplicações web, HTML5 e PWAs em pacotes APK nativos Android de alta performance."
                : "Convert web apps, HTML5 games, and PWAs into high-performance native Android APK packages.",
            keywords: "web to apk compiler conversor html5 pwa android apk desenvolvedor app mobile"
        },
        {
            file: "converter.html",
            category: "utils",
            categoryName: t.cat_utils,
            badgeClass: "cromak-badge-utils",
            badge: "Conversor Pro",
            name: "Cromak Universal Converter",
            desc: lang === "pt"
                ? "Suíte offline de conversão universal (vídeo, áudio, imagem, PDF, dados) com FFmpeg, Editor de Mídia, Gravador de Tela e Downloader."
                : "Offline all-in-one conversion suite (video, audio, image, PDF, data) with FFmpeg, Media Editor, Screen Recorder, and Downloader.",
            keywords: "universal converter conversor mp4 mp3 webp pdf docx xlsx ffmpeg gravador editor downloader"
        },
        {
            file: "screen-recorder.html",
            category: "utils",
            categoryName: t.cat_utils,
            badgeClass: "cromak-badge-utils",
            badge: lang === "pt" ? "Gratuito / Pro" : "Free / Pro",
            name: "Cromak Screen Recorder",
            desc: lang === "pt"
                ? "Gravador de tela e capturas profissional até 60 FPS, aceleração por GPU, áudio simultâneo e 11 idiomas. 100% gratuito para uso pessoal e comercial."
                : "Professional screen recorder & snipping tool up to 60 FPS, GPU hardware encoding, dual audio, and 11 languages. 100% free for personal & commercial use.",
            keywords: "screen recorder gravador de tela capturar tela print 60fps nvenc ffmpeg gratis comercial"
        },
        {
            file: "file-finder.html",
            category: "utils",
            categoryName: t.cat_utils,
            badgeClass: "cromak-badge-utils",
            badge: lang === "pt" ? "8 Abas / PDF & Hash" : "8 Tabs / PDF & Hash",
            name: "Cromak File Finder",
            desc: lang === "pt"
                ? "Buscador desktop multi-abas com indexação instantânea, pesquisa em PDF/Word/Excel, caçador de duplicados SHA-256, análise de espaço e lote com Undo."
                : "Multi-tab desktop file search with instant indexing, PDF/Word/Excel content grep, 3-stage SHA-256 duplicate hunter, space analyzer, and batch renamer.",
            keywords: "file finder buscador localizar arquivos pdf docx xlsx duplicados sha256 renomear lote espaco disco regex"
        },
        {
            file: "dock.html",
            category: "utils",
            categoryName: t.cat_utils,
            badgeClass: "cromak-badge-utils",
            badge: "Desktop",
            name: "Cromak Dock",
            desc: lang === "pt"
                ? "Barra de tarefas e lançador rápido minimalista, ultraleve e customizável para Windows."
                : "Lightweight, customizable, and minimalist taskbar launcher and dock for Windows.",
            keywords: "dock barra de tarefas lancador launcher desktop personalizacao atalhos organizacao"
        },
        {
            file: "clock.html",
            category: "utils",
            categoryName: t.cat_utils,
            badgeClass: "cromak-badge-utils",
            badge: "Relógio / Alarme",
            name: "Cromak Clock & Alarm",
            desc: lang === "pt"
                ? "Despertador digital de precisão milimétrica, relógio de mesa e timer para produtividade."
                : "High-precision digital desk clock, countdown timer, and alarm system for focus.",
            keywords: "clock alarme relogio despertador cronometro timer mesa produtividade"
        },
        {
            file: "new-tab-service.html",
            category: "utils",
            categoryName: t.cat_utils,
            badgeClass: "cromak-badge-utils",
            badge: "Navegação",
            name: "Cromak NewTab",
            desc: lang === "pt"
                ? "Página inicial inteligente, minimalista e privativa para navegadores com widgets offline."
                : "Smart, distraction-free, and private new tab start page for modern web browsers.",
            keywords: "new tab nova aba pagina inicial navegador widgets privacidade busca"
        },
        {
            file: "photoviewer.html",
            category: "utils",
            categoryName: t.cat_utils,
            badgeClass: "cromak-badge-utils",
            badge: "Visualizador",
            name: "Cromak Photo Viewer",
            desc: lang === "pt"
                ? "Visualizador de fotos clássico e ultrarrápido para Windows 10 e 11, sem anúncios nem telemetria."
                : "Ultra-fast classic image viewer for Windows 10 and 11 with zero telemetry.",
            keywords: "photo viewer visualizador imagens fotos fotos classico leve rapido galeria"
        },
        {
            file: "png_to_ico_converter.html",
            category: "utils",
            categoryName: t.cat_utils,
            badgeClass: "cromak-badge-utils",
            badge: "Ícones .ICO",
            name: "Cromak PNG To ICO Converter",
            desc: lang === "pt"
                ? "Conversor rápido de PNGs para contêineres de ícones .ICO com múltiplas resoluções (16px a 256px)."
                : "Convert PNG images into multi-resolution Windows .ICO files (16px to 256px) in seconds.",
            keywords: "png to ico converter icones ico conversor png favicon windows desenvolvimento"
        }
    ];

    // 6. Lógica Interativa do Modal de Pesquisa
    const searchModal = document.getElementById("cromakSearchModal");
    const searchInput = document.getElementById("cromakSearchInput");
    const searchClearBtn = document.getElementById("searchClearBtn");
    const searchCloseBtn = document.getElementById("searchCloseBtn");
    const searchBackdrop = document.getElementById("searchBackdrop");
    const searchResultsBody = document.getElementById("searchResultsBody");
    const searchResultsCount = document.getElementById("searchResultsCount");
    const searchCategoryPills = document.querySelectorAll(".cromak-search-pill");
    const openSearchBtn = document.getElementById("openSearchBtn");
    const mobileSearchBtn = document.getElementById("mobileSearchBtn");

    let currentCategory = "all";
    let selectedResultIndex = -1;
    let currentResultsList = [];

    function getCategorySvg(category) {
        switch(category) {
            case "security":
                return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
            case "optimization":
                return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
            case "accessibility":
                return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>`;
            case "dev":
                return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
            default:
                return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`;
        }
    }

    function highlightText(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")})`, "gi");
        return text.replace(regex, `<mark class="search-highlight">$1</mark>`);
    }

    function renderSearchResults(query = "", category = "all") {
        const cleanQuery = query.trim().toLowerCase();
        selectedResultIndex = -1;

        let filtered = softwareCatalog.filter(item => {
            const matchesCategory = (category === "all" || item.category === category);
            if (!matchesCategory) return false;
            if (!cleanQuery) return true;

            const nameMatch = item.name.toLowerCase().includes(cleanQuery);
            const descMatch = item.desc.toLowerCase().includes(cleanQuery);
            const keyMatch = item.keywords.toLowerCase().includes(cleanQuery);
            const catMatch = item.categoryName.toLowerCase().includes(cleanQuery);

            return nameMatch || descMatch || keyMatch || catMatch;
        });

        currentResultsList = filtered;
        if (searchResultsCount) {
            searchResultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? "software" : "softwares"}`;
        }

        if (filtered.length === 0) {
            searchResultsBody.innerHTML = `
            <div class="cromak-search-empty">
                <svg class="cromak-search-empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <div class="cromak-search-empty-title">${t.search_empty_title}</div>
                <div class="cromak-search-empty-hint">${t.search_empty_hint}</div>
            </div>
            `;
            return;
        }

        const sectionTitle = cleanQuery ? t.search_results : t.search_featured;
        let html = `<div class="cromak-search-section-title">${sectionTitle} (${filtered.length})</div>`;

        filtered.forEach((item, index) => {
            html += `
            <a href="${item.file}" class="cromak-search-item" data-index="${index}">
                <div class="cromak-search-item-icon">
                    ${getCategorySvg(item.category)}
                </div>
                <div class="cromak-search-item-content">
                    <div class="cromak-search-item-header">
                        <span class="cromak-search-item-title">${highlightText(item.name, cleanQuery)}</span>
                        <span class="cromak-search-badge ${item.badgeClass}">${item.badge}</span>
                    </div>
                    <div class="cromak-search-item-desc">${highlightText(item.desc, cleanQuery)}</div>
                </div>
                <svg class="cromak-search-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </a>
            `;
        });

        searchResultsBody.innerHTML = html;

        // Auto-selecionar primeiro item para permitir tecla ENTER direto
        updateSelection(0);
    }

    function updateSelection(newIndex) {
        const items = searchResultsBody.querySelectorAll(".cromak-search-item");
        if (items.length === 0) return;

        items.forEach(el => el.classList.remove("is-selected"));

        if (newIndex >= 0 && newIndex < items.length) {
            selectedResultIndex = newIndex;
            const target = items[selectedResultIndex];
            target.classList.add("is-selected");
            target.scrollIntoView({ block: "nearest", behavior: "smooth" });
        } else {
            selectedResultIndex = -1;
        }
    }

    function openSearchModal() {
        if (!searchModal) return;
        searchModal.classList.add("active");
        searchModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        renderSearchResults(searchInput.value, currentCategory);
        setTimeout(() => {
            searchInput.focus();
            searchInput.select();
        }, 60);
    }

    function closeSearchModal() {
        if (!searchModal) return;
        searchModal.classList.remove("active");
        searchModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    if (openSearchBtn) openSearchBtn.addEventListener("click", openSearchModal);
    if (mobileSearchBtn) mobileSearchBtn.addEventListener("click", openSearchModal);
    if (searchCloseBtn) searchCloseBtn.addEventListener("click", closeSearchModal);
    if (searchBackdrop) searchBackdrop.addEventListener("click", closeSearchModal);

    if (searchInput) {
        searchInput.addEventListener("input", function() {
            const val = this.value;
            if (searchClearBtn) {
                searchClearBtn.style.display = val.length > 0 ? "flex" : "none";
            }
            renderSearchResults(val, currentCategory);
        });

        searchInput.addEventListener("keydown", function(e) {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                updateSelection(selectedResultIndex + 1);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                updateSelection(selectedResultIndex - 1);
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (selectedResultIndex >= 0 && currentResultsList[selectedResultIndex]) {
                    window.location.href = currentResultsList[selectedResultIndex].file;
                }
            }
        });
    }

    if (searchClearBtn) {
        searchClearBtn.addEventListener("click", function() {
            searchInput.value = "";
            searchClearBtn.style.display = "none";
            searchInput.focus();
            renderSearchResults("", currentCategory);
        });
    }

    // Filtros de Categoria
    searchCategoryPills.forEach(pill => {
        pill.addEventListener("click", function() {
            searchCategoryPills.forEach(p => p.classList.remove("active"));
            this.classList.add("active");
            currentCategory = this.getAttribute("data-category");
            renderSearchResults(searchInput.value, currentCategory);
        });
    });

    // Atalhos Globais de Teclado (Ctrl+K, Cmd+K, / e ESC)
    document.addEventListener("keydown", function(e) {
        const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
        const isCtrlK = (isMac ? e.metaKey : e.ctrlKey) && (e.key === "k" || e.key === "K");
        
        if (isCtrlK) {
            e.preventDefault();
            if (searchModal.classList.contains("active")) {
                closeSearchModal();
            } else {
                openSearchModal();
            }
            return;
        }

        if (e.key === "/" && !searchModal.classList.contains("active")) {
            const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
            if (tag !== "input" && tag !== "textarea") {
                e.preventDefault();
                openSearchModal();
                return;
            }
        }

        if (e.key === "Escape" && searchModal.classList.contains("active")) {
            e.preventDefault();
            closeSearchModal();
        }
    });

    // 7. Ativar o item de menu correto baseado na URL
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("#nav-menu a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "var(--accent)";
        }
    });

    // 8. Lógica do Menu Mobile
    const mobileMenu = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("nav-menu");
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            mobileMenu.innerHTML = navMenu.classList.contains("active") ? "✕" : "☰";
        });
    }

    // 9. Contador Global do Ecossistema Cromak
    if (!window.location.pathname.includes("sobre.html")) {
        const hitBeacon = new Image();
        hitBeacon.src = "https://hits.sh/cromaktechnology.github.io.svg";
    }
});

function mudarIdioma(lang, event) {
    if (event) event.preventDefault();
    localStorage.setItem("idioma_preferido", lang);
    var paginaAtual = window.location.pathname.split("/").pop() || "index.html";
    window.location.href = "../" + lang + "/" + paginaAtual;
}
