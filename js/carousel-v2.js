// js/carousel-v2.js
// Motor 3D Coverflow com Navegação Fluida e Ambient Glow — Cromak Technology

document.addEventListener("DOMContentLoaded", function () {
    const stage = document.getElementById("carouselStage");
    if (!stage) return;

    const cards = Array.from(stage.querySelectorAll(".carousel-v2-card"));
    const prevBtn = document.getElementById("v2PrevBtn");
    const nextBtn = document.getElementById("v2NextBtn");
    const dotsContainer = document.getElementById("carouselDots");
    const glow = document.getElementById("carouselGlow");

    let currentIndex = 0;
    let autoPlayTimer = null;
    const total = cards.length;

    if (total === 0) return;

    // 1. Criar Dots Dinamicamente
    if (dotsContainer) {
        dotsContainer.innerHTML = "";
        cards.forEach((_, idx) => {
            const dot = document.createElement("button");
            dot.className = `v2-dot-item ${idx === 0 ? "active" : ""}`;
            dot.setAttribute("aria-label", `Slide ${idx + 1}`);
            dot.addEventListener("click", () => {
                goToSlide(idx);
                resetAutoPlay();
            });
            dotsContainer.appendChild(dot);
        });
    }

    const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll(".v2-dot-item")) : [];

    // 2. Atualizar Posições e Estados 3D
    function updateStage() {
        cards.forEach((card, idx) => {
            card.className = "carousel-v2-card";

            if (idx === currentIndex) {
                card.classList.add("active");
            } else if (idx === (currentIndex - 1 + total) % total) {
                card.classList.add("prev");
            } else if (idx === (currentIndex + 1) % total) {
                card.classList.add("next");
            } else {
                const diff = (idx - currentIndex + total) % total;
                if (diff < total / 2) {
                    card.classList.add("hidden-right");
                } else {
                    card.classList.add("hidden-left");
                }
            }
        });

        // Atualizar Dots
        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === currentIndex);
        });

        // Atualizar Cor do Ambient Glow de acordo com o software ativo
        const activeCard = cards[currentIndex];
        if (activeCard && glow) {
            const accent = activeCard.dataset.accent || "#00d4ff";
            glow.style.background = `radial-gradient(circle, ${hexToRgba(accent, 0.28)} 0%, ${hexToRgba(accent, 0.1)} 45%, transparent 70%)`;
        }
    }

    function hexToRgba(hex, alpha) {
        if (!hex.startsWith("#")) return `rgba(0, 212, 255, ${alpha})`;
        let c = hex.substring(1);
        if (c.length === 3) c = c.split("").map(x => x + x).join("");
        const num = parseInt(c, 16);
        return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % total;
        updateStage();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + total) % total;
        updateStage();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateStage();
    }

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(nextSlide, 4500);
    }

    // 3. Ouvintes de Eventos
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            nextSlide();
            resetAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            prevSlide();
            resetAutoPlay();
        });
    }

    // Clique direto nos cards laterais traz para o centro!
    cards.forEach((card, idx) => {
        card.addEventListener("click", (e) => {
            if (card.classList.contains("active")) return;
            e.preventDefault();
            e.stopPropagation();
            goToSlide(idx);
            resetAutoPlay();
        });
    });

    // Pausar no hover
    const wrapper = document.querySelector(".carousel-v2-wrapper");
    if (wrapper) {
        wrapper.addEventListener("mouseenter", () => clearInterval(autoPlayTimer));
        wrapper.addEventListener("mouseleave", () => resetAutoPlay());
    }

    // Teclado
    document.addEventListener("keydown", (e) => {
        const rect = stage.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (e.key === "ArrowLeft") {
                prevSlide();
                resetAutoPlay();
            } else if (e.key === "ArrowRight") {
                nextSlide();
                resetAutoPlay();
            }
        }
    });

    // Touch / Swipe para Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    stage.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const threshold = 40;
        if (touchEndX < touchStartX - threshold) {
            nextSlide();
            resetAutoPlay();
        } else if (touchEndX > touchStartX + threshold) {
            prevSlide();
            resetAutoPlay();
        }
    }, { passive: true });

    // Inicialização
    updateStage();
    resetAutoPlay();
});
