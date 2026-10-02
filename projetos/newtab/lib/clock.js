// ==========================================
// WIDGET DE RELÓGIO E CLIMA
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
    const clockPref = localStorage.getItem('prefClockTimeout') || '15000';

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

    function showClock() {
        clockContainer.classList.remove('hidden');
        if (indicator) indicator.classList.add('hidden');
        clearTimeout(hideTimeout);
    }

    function hideClock() {
        if (clockPref === 'never') return;
        clockContainer.classList.add('hidden');
        if (indicator) indicator.classList.remove('hidden');
    }

    updateClock();
    setInterval(updateClock, 1000);

    // Lógica do Canto Quente
    triggerZone.addEventListener('mouseenter', showClock);
    
    triggerZone.addEventListener('mouseleave', () => {
        if (clockPref !== 'never') {
            hideTimeout = setTimeout(hideClock, 1000); 
        }
    });

    showClock();
    if (clockPref !== 'never') {
        hideTimeout = setTimeout(hideClock, parseInt(clockPref));
    }

    // ==========================================
    // PREVISÃO DO TEMPO (OPEN-METEO)
    // ==========================================
    const city = localStorage.getItem('prefWeatherCity');
    if (city && city.trim() !== '') {
        const weatherEl = document.createElement('div');
        weatherEl.id = 'clock-weather';
        weatherEl.style.display = 'flex';
        weatherEl.style.flexDirection = 'column';
        weatherEl.style.alignItems = 'center';
        weatherEl.style.marginLeft = '15px';
        weatherEl.style.fontSize = '14px';
        weatherEl.style.color = '#00aef0';
        weatherEl.style.marginTop = '0px';
        weatherEl.style.fontWeight = '500';
        clockContainer.appendChild(weatherEl);

        const cacheKey = 'weatherCache2_' + city.toLowerCase();
        const cached = JSON.parse(localStorage.getItem(cacheKey) || 'null');
        const now = new Date().getTime();

        if (cached && (now - cached.timestamp < 30 * 60 * 1000)) {
            weatherEl.innerHTML = cached.text;
        } else {
            weatherEl.innerHTML = 'Carregando...';
            // 1. Obter coordenadas (Geocoding API)
            fetch(`https://geocoding-api.open-meteo.com/v1/search?name=` + encodeURIComponent(city) + `&count=1&language=pt&format=json`)
                .then(res => res.json())
                .then(data => {
                    if (data.results && data.results.length > 0) {
                        const { latitude, longitude } = data.results[0];
                        // 2. Obter clima (Forecast API)
                        return fetch(`https://api.open-meteo.com/v1/forecast?latitude=` + latitude + `&longitude=` + longitude + `&current_weather=true`);
                    } else {
                        throw new Error('Cidade não encontrada');
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.current_weather) {
                        const temp = Math.round(data.current_weather.temperature);
                        const code = data.current_weather.weathercode;
                        let emoji = '🌤️';
                        if (code === 0) emoji = '☀️'; // Limpo
                        else if (code >= 1 && code <= 3) emoji = '⛅'; // Parcial
                        else if (code >= 45 && code <= 48) emoji = '🌫️'; // Nevoeiro
                        else if (code >= 51 && code <= 67) emoji = '🌧️'; // Chuva
                        else if (code >= 71 && code <= 77) emoji = '❄️'; // Neve
                        else if (code >= 80 && code <= 82) emoji = '🌦️'; // Pancadas
                        else if (code >= 95) emoji = '⛈️'; // Tempestade

                        const text = `<span style="font-size: 20px; line-height: 1;">${emoji}</span><span style="margin-top: 2px;">${temp}°C</span>`;
                        weatherEl.innerHTML = text;
                        
                        localStorage.setItem(cacheKey, JSON.stringify({
                            text: text,
                            timestamp: now
                        }));
                    }
                })
                .catch(err => {
                    weatherEl.innerHTML = 'Clima Indisponível';
                    console.error('Erro no clima:', err);
                });
        }
    }
});