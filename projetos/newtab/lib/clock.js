// ==========================================
// WIDGET DE RELÓGIO (HOT CORNER / CANTO QUENTE)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const triggerZone = document.getElementById('clock-trigger-zone');
    const clockContainer = document.getElementById('metro-clock-container');
    const indicator = document.getElementById('clock-indicator');
    const timeEl = document.getElementById('clock-time');
    const dayEl = document.getElementById('clock-day');
    const dateEl = document.getElementById('clock-date');

    if (!clockContainer || !triggerZone) return;

    let hideTimeout;

    // Atualiza a hora e a data
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        timeEl.textContent = `${hours}:${minutes}`;

        const optionsDay = { weekday: 'long' };
        const optionsDate = { day: 'numeric', month: 'long' };
        
        let dayString = now.toLocaleDateString('pt-BR', optionsDay);
        dayString = dayString.charAt(0).toUpperCase() + dayString.slice(1);
        
        dayEl.textContent = dayString;
        dateEl.textContent = now.toLocaleDateString('pt-BR', optionsDate);
    }

    // Sobe o relógio e esconde a setinha
    function showClock() {
        clockContainer.classList.remove('hidden');
        if (indicator) indicator.classList.add('hidden');
        clearTimeout(hideTimeout);
    }

    // Desce o relógio e mostra a setinha
    function hideClock() {
        clockContainer.classList.add('hidden');
        if (indicator) indicator.classList.remove('hidden');
    }

    // Inicia e sincroniza o relógio
    updateClock();
    setInterval(updateClock, 1000);

    // ==========================================
    // LÓGICA DO CANTO QUENTE
    // ==========================================
    // Quando o mouse ENTRA na zona invisível, o relógio sobe instantaneamente
    triggerZone.addEventListener('mouseenter', showClock);
    
    // Quando o mouse SAI da zona, o relógio desce após 1 segundo
    triggerZone.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(hideClock, 1000); 
    });

    // Ao abrir a aba: Mostra por 15 segundos, depois esconde sozinho
    showClock();
    hideTimeout = setTimeout(hideClock, 15000);
});