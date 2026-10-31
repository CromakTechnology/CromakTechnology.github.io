// js/suporte.js
// Motor universal de injeção dinâmica e interatividade da Central de Suporte Cromak

document.addEventListener("DOMContentLoaded", function () {
    // 1. Deteção de idioma com base na tag <html> ou URL
    const isEnglish = document.documentElement.lang.startsWith("en") || window.location.pathname.includes("/en/");
    
    // 2. Validação da base de dados carregada
    if (typeof FAQ_DATABASE === "undefined" || !Array.isArray(FAQ_DATABASE)) {
        console.error("Cromak Suporte: FAQ_DATABASE não foi encontrada. Certifique-se de importar faq-data_pt.js ou faq-data_en.js antes deste script.");
        return;
    }

    // 3. Renderização inicial com todos os itens minimizados
    renderizarFAQ(FAQ_DATABASE, "", isEnglish);

    // 4. Ouvinte de eventos no campo de pesquisa
    const searchInput = document.getElementById("faqSearch");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            filtrarFAQ(this.value, isEnglish);
        });
    }
});

/**
 * Renderiza os blocos da base de dados organizados por categoria
 * @param {Array} dados - Lista de perguntas e respostas
 * @param {string} termoBusca - Termo digitado pelo utilizador
 * @param {boolean} isEnglish - Indicador do idioma ativo
 */
function renderizarFAQ(dados, termoBusca = "", isEnglish = false) {
    const container = document.getElementById("faq-list");
    const noResults = document.getElementById("sem-resultados");
    if (!container) return;

    container.innerHTML = "";

    // Mensagem de ausência de resultados
    if (dados.length === 0) {
        if (noResults) {
            noResults.textContent = isEnglish
                ? "No matching questions found. Try searching for other terms like 'license', 'boot', 'backup', or submit a ticket below."
                : "Nenhuma pergunta encontrada com esse termo. Tente palavras como 'licença', 'boot', 'backup', ou envie um ticket abaixo.";
            noResults.style.display = "block";
        }
        return;
    }

    if (noResults) {
        noResults.style.display = "none";
    }

    // Agrupamento ordenado por categoria
    const categorias = {};
    dados.forEach(item => {
        if (!categorias[item.categoria]) {
            categorias[item.categoria] = [];
        }
        categorias[item.categoria].push(item);
    });

    const expandirTudo = termoBusca.trim().length > 0;

    // Injeção dos elementos no DOM
    Object.keys(categorias).forEach(catNome => {
        const catHeader = document.createElement("h5");
        catHeader.className = "faq-category";
        catHeader.textContent = catNome.toUpperCase();
        container.appendChild(catHeader);

        categorias[catNome].forEach(item => {
            const card = document.createElement("div");
            card.className = "faq-accordion-item";

            const btnHeader = document.createElement("button");
            btnHeader.type = "button";
            btnHeader.className = "faq-accordion-header";
            btnHeader.setAttribute("aria-expanded", expandirTudo ? "true" : "false");
            if (expandirTudo) btnHeader.classList.add("active");

            btnHeader.innerHTML = `
                <span class="faq-question-title">
                    <span class="faq-badge">${item.produto}</span>
                    ${item.pergunta}
                </span>
                <span class="faq-accordion-icon">${expandirTudo ? "−" : "+"}</span>
            `;

            const bodyContent = document.createElement("div");
            bodyContent.className = "faq-accordion-body";
            
            if (expandirTudo) {
                bodyContent.style.maxHeight = "800px";
                bodyContent.style.opacity = "1";
            }

            bodyContent.innerHTML = `<div class="faq-answer-inner">${item.resposta}</div>`;

            // Alternância de estado (Abrir / Fechar)
            btnHeader.addEventListener("click", function () {
                const isActive = this.classList.contains("active");
                const icon = this.querySelector(".faq-accordion-icon");

                if (isActive) {
                    this.classList.remove("active");
                    this.setAttribute("aria-expanded", "false");
                    bodyContent.style.maxHeight = null;
                    bodyContent.style.opacity = "0";
                    if (icon) icon.textContent = "+";
                } else {
                    this.classList.add("active");
                    this.setAttribute("aria-expanded", "true");
                    bodyContent.style.maxHeight = (bodyContent.scrollHeight + 50) + "px";
                    bodyContent.style.opacity = "1";
                    if (icon) icon.textContent = "−";
                }
            });

            card.appendChild(btnHeader);
            card.appendChild(bodyContent);
            container.appendChild(card);
        });
    });
}

/**
 * Filtra a base de dados por correspondência em perguntas, respostas, produtos ou tags
 * @param {string} termo - Texto pesquisado
 * @param {boolean} isEnglish - Indicador do idioma ativo
 */
function filtrarFAQ(termo, isEnglish = false) {
    const q = termo.toLowerCase().trim();
    
    if (!q) {
        renderizarFAQ(FAQ_DATABASE, "", isEnglish);
        return;
    }

    const filtrados = FAQ_DATABASE.filter(item => {
        const emPergunta = item.pergunta.toLowerCase().includes(q);
        const emResposta = item.resposta.toLowerCase().includes(q);
        const emProduto = item.produto.toLowerCase().includes(q);
        const emCategoria = item.categoria.toLowerCase().includes(q);
        const emTags = item.tags && item.tags.some(tag => tag.toLowerCase().includes(q));
        
        return emPergunta || emResposta || emProduto || emCategoria || emTags;
    });

    renderizarFAQ(filtrados, q, isEnglish);
}