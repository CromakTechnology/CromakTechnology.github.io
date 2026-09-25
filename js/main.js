// main.js
// Scripts interativos gerais do site da Cromak Technology

document.addEventListener("DOMContentLoaded", function() {

    // 1. Lógica do Carrossel da Home
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let autoPlayTimer;

    if (carouselItems.length > 0) {
        function updateCarousel() {
            carouselItems.forEach((item, index) => {
                item.className = 'carousel-item';
                
                if (index === currentIndex) {
                    item.classList.add('active');
                } else if (index === (currentIndex - 1 + carouselItems.length) % carouselItems.length) {
                    item.classList.add('prev');
                } else if (index === (currentIndex + 1) % carouselItems.length) {
                    item.classList.add('next');
                } else if (index < currentIndex) {
                    item.classList.add('hidden-left');
                } else {
                    item.classList.add('hidden-right');
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel();
        }

        function resetAutoPlay() {
            clearInterval(autoPlayTimer);
            autoPlayTimer = setInterval(nextSlide, 3500);
        }

        if(nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });
            prevBtn.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });
        }

        updateCarousel();
        autoPlayTimer = setInterval(nextSlide, 3500);
    }

    // 2. Lógica do Lightbox
    const modal = document.getElementById("lightboxModal");
    const modalImg = document.getElementById("lightboxImg");
    const captionText = document.getElementById("lightboxCaption");
    const closeBtn = document.getElementById("closeLightbox");

    if (modal && modalImg && closeBtn) {
        document.querySelectorAll('.lightbox-trigger, .screenshot-main').forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt; 
            });
        });

        closeBtn.addEventListener('click', () => { modal.style.display = "none"; });
        modal.addEventListener('click', function(event) { if (event.target === modal) modal.style.display = "none"; });
        document.addEventListener('keydown', function(event) { if (event.key === "Escape") modal.style.display = "none"; });
    }

    // 3. Botão Voltar ao Topo
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

});

// 4. Injetar Tawk.to Globalmente
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6a1e392a9a52f51c317613e6/1jq30ujl9';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
