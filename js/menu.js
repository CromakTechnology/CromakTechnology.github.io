// menu.js
// Script para injetar o Cabeçalho e Rodapé globais do site Cromak Technology

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Detectar o idioma baseado na URL (se tiver '/en/' na URL, é inglês)
    const isEnglish = window.location.pathname.includes('/en/');
    const lang = isEnglish ? 'en' : 'pt';

    // Dicionário de traduções
    const dict = {
        'pt': {
            'home': 'Início',
            'products': 'Produtos ▼',
            'features': 'Recursos',
            'about': 'Sobre',
            'support': 'Suporte',
            'languages': 'Idiomas ▼',
            'privacy': 'Privacidade',
            'terms': 'Termos de Uso',
            'sitemap': 'Mapa do Site',
            'rights': 'Cromak Technology. Todos os direitos reservados.',
            // Categorias de Produtos
            'cat_security': 'Segurança & Rede',
            'cat_dev': 'Desenvolvimento',
            'cat_utils': 'Utilitários'
        },
        'en': {
            'home': 'Home',
            'products': 'Products ▼',
            'features': 'Features',
            'about': 'About',
            'support': 'Support',
            'languages': 'Languages ▼',
            'privacy': 'Privacy',
            'terms': 'Terms of Use',
            'sitemap': 'Site Map',
            'rights': 'Cromak Technology. All rights reserved.',
            // Categorias de Produtos
            'cat_security': 'Security & Network',
            'cat_dev': 'Development',
            'cat_utils': 'Utilities'
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
                
                <button class="menu-toggle" id="mobile-menu">☰</button>
                
                <nav id="nav-menu">
                    <a href="index.html">${t.home}</a>
                    
                    <div class="dropdown">
                        <button class="dropbtn">${t.products}</button>
                        <div class="dropdown-content">
                            
                            <!-- Submenu: Segurança & Rede -->
                            <div class="dropdown-submenu">
                                <a href="#" class="submenu-btn">${t.cat_security} <span>▶</span></a>
                                <div class="submenu-content">
                                    <a href="install-protector.html">Install Protector</a>
                                    <a href="connection-blackout.html">Connection Blackout</a>
                                    <a href="password_guard.html">Password Guard</a>
                                    <a href="metadata_remover.html">Metadata Remover</a>
                                </div>
                            </div>
                            
                            <!-- Submenu: Desenvolvimento -->
                            <div class="dropdown-submenu">
                                <a href="#" class="submenu-btn">${t.cat_dev} <span>▶</span></a>
                                <div class="submenu-content">
                                    <a href="install_compiler.html">Install Compiler</a>
                                    <a href="web_to_apk_compiler.html">Web To Apk Compiler</a>
                                </div>
                            </div>
                            
                            <!-- Submenu: Utilitários -->
                            <div class="dropdown-submenu">
                                <a href="#" class="submenu-btn">${t.cat_utils} <span>▶</span></a>
                                <div class="submenu-content">
                                    <a href="deepclean_suite.html">DeepClean Suite</a>
                                    <a href="png_to_ico_converter.html">PNG To ICO Converter</a>
                                    <a href="photoviewer.html">Photo Viewer</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <a href="index.html#recursos">${t.features}</a>
                    <a href="sobre.html">${t.about}</a>
                    <a href="suporte.html">${t.support}</a>
                    
                    <div class="dropdown">
                        <button class="dropbtn">${t.languages}</button>
                        <div class="dropdown-content">
                            <a href="#" onclick="mudarIdioma('pt', event)">
                                <img src="../images/locales/lang_pt.png" alt="PT" class="lang-icon"> Português
                            </a>
                            <a href="#" onclick="mudarIdioma('en', event)">
                                <img src="../images/locales/lang_en.png" alt="EN" class="lang-icon"> English
                            </a>
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
        document.getElementById('ano-atual').textContent = new Date().getFullYear();
    }

    // 4. Ativar o item de menu correto baseado na URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = 'var(--accent)';
        }
    });

    // 5. Lógica do Menu Mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenu.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    }
});

function mudarIdioma(lang, event) {
    event.preventDefault();
    localStorage.setItem('idioma_preferido', lang);
    var paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    window.location.href = '../' + lang + '/' + paginaAtual;
}
