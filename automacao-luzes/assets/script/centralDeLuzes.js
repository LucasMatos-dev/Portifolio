function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

class CentralDeLuzes {
    constructor() {
        if (CentralDeLuzes.instance) return CentralDeLuzes.instance;
        this.estado = {};
        this.brightness = {};
        this.globalBrightness = 100;
        this.ecoMode = false;
        this.originalBrightness = 100;
        CentralDeLuzes.instance = this;
        this.initializeListeners();
    }

    initializeListeners() {
        // Global brightness slider
        const globalSlider = document.getElementById('global-brightness');
        if (globalSlider) {
            globalSlider.addEventListener('input', (e) => {
                this.globalBrightness = e.target.value;
                document.getElementById('brightness-value').innerText = `${e.target.value}%`;
                this.updateAllBrightness();
            });
        }

        // Eco Mode Toggle
        const ecoStat = document.getElementById('eco-mode');
        if (ecoStat) {
            ecoStat.parentElement.style.cursor = 'pointer';
            ecoStat.parentElement.addEventListener('click', () => {
                this.toggleEcoMode();
            });
        }

        // Room brightness sliders
        document.querySelectorAll('.room-slider').forEach(slider => {
            slider.addEventListener('input', (e) => {
                const room = e.target.getAttribute('data-room');
                this.brightness[room] = e.target.value;
                this.updateRoomBrightness(room);
            });
        });

        // Room control buttons
        document.querySelectorAll('.btn-room-on, .btn-room-off').forEach(botao => {
            botao.addEventListener('click', () => {
                const comodo = botao.getAttribute('data-comodo');
                const acao = botao.getAttribute('data-acao');

                if (acao === 'ligar') this.ligar(comodo);
                else if (acao === 'desligar') this.desligar(comodo);
            });
        });
    }

    toggleEcoMode() {
        this.ecoMode = !this.ecoMode;
        const ecoStat = document.getElementById('eco-mode');
        const ecoStatItem = ecoStat.parentElement;
        const globalSlider = document.getElementById('global-brightness');
        const status = document.getElementById('status');

        if (this.ecoMode) {
            // Activate Eco Mode
            this.originalBrightness = this.globalBrightness;
            this.globalBrightness = 60; // Reduce to 60%
            globalSlider.value = 60;
            document.getElementById('brightness-value').innerText = '60%';

            ecoStat.innerText = 'ON';
            ecoStat.classList.add('eco-active');
            ecoStatItem.classList.add('eco-stat-active');

            // Apply eco class to all room cards
            document.querySelectorAll('.room-card').forEach(card => {
                card.classList.add('eco-mode');
            });

            status.innerText = '🌍 Modo Eco ativado! Economizando energia...';

        } else {
            // Deactivate Eco Mode
            this.globalBrightness = this.originalBrightness;
            globalSlider.value = this.originalBrightness;
            document.getElementById('brightness-value').innerText = `${this.originalBrightness}%`;

            ecoStat.innerText = 'OFF';
            ecoStat.classList.remove('eco-active');
            ecoStatItem.classList.remove('eco-stat-active');

            // Remove eco class from all room cards
            document.querySelectorAll('.room-card').forEach(card => {
                card.classList.remove('eco-mode');
            });

            status.innerText = '💡 Modo Eco desativado';
        }

        this.updateAllBrightness();
        this.updateStats();
    }

    ligar(comodo) {
        const div = document.getElementById(comodo);
        if (div) {
            div.classList.remove('light-off');
            div.classList.add('light-on');

            // Apply eco mode class if active
            if (this.ecoMode) {
                div.classList.add('eco-mode');
            }

            this.estado[comodo] = 'ligado';
            if (!this.brightness[comodo]) this.brightness[comodo] = 100;

            this.updateRoomBrightness(comodo);
            this.updateStats();

            const statusEl = document.getElementById('status');
            statusEl.innerText = `💡 Luz do(a) ${capitalize(comodo)} ligada`;
        }
    }

    desligar(comodo) {
        const div = document.getElementById(comodo);
        if (div) {
            div.classList.remove('light-on');
            div.classList.add('light-off');

            this.estado[comodo] = 'desligado';
            this.updateStats();

            const statusEl = document.getElementById('status');
            statusEl.innerText = `🌙 Luz do(a) ${capitalize(comodo)} desligada`;
        }
    }

    updateRoomBrightness(room) {
        const div = document.getElementById(room);
        if (div && this.estado[room] === 'ligado') {
            const roomBrightness = this.brightness[room] || 100;
            const effectiveBrightness = (roomBrightness / 100) * (this.globalBrightness / 100);
            div.style.opacity = 0.5 + (effectiveBrightness * 0.5); // Range: 0.5 to 1.0
        }
    }

    updateAllBrightness() {
        Object.keys(this.estado).forEach(room => {
            if (this.estado[room] === 'ligado') {
                this.updateRoomBrightness(room);
            }
        });
    }

    updateStats() {
        const lightsOn = Object.values(this.estado).filter(s => s === 'ligado').length;
        document.getElementById('lights-on').innerText = lightsOn;

        // Calculate energy consumption
        let totalWatts = 0;
        let maxWatts = 0;
        document.querySelectorAll('.room-card').forEach(card => {
            const room = card.getAttribute('data-room');
            const watts = parseInt(card.getAttribute('data-watts')) || 15;
            maxWatts += watts;

            if (this.estado[room] === 'ligado') {
                const brightness = (this.brightness[room] || 100) / 100;
                const globalFactor = this.globalBrightness / 100;
                totalWatts += watts * brightness * globalFactor;
            }
        });

        document.getElementById('energy').innerText = Math.round(totalWatts);

        // Calculate savings if eco mode is on
        if (this.ecoMode && lightsOn > 0) {
            const savings = Math.round(((maxWatts - totalWatts) / maxWatts) * 100);
            const ecoStat = document.getElementById('eco-mode');
            ecoStat.setAttribute('title', `Economizando ${savings}% de energia`);
        }
    }

    static getInstance() {
        if (!CentralDeLuzes.instance) {
            CentralDeLuzes.instance = new CentralDeLuzes();
        }
        return CentralDeLuzes.instance;
    }
}

// Initialize the system
const central = CentralDeLuzes.getInstance();

// Global Functions for Quick Controls
function toggleAllLights(state) {
    const rooms = ['quarto', 'sala', 'cozinha', 'banheiro', 'escritorio', 'varanda'];
    rooms.forEach(room => {
        if (state) {
            central.ligar(room);
        } else {
            central.desligar(room);
        }
    });

    const status = document.getElementById('status');
    status.innerText = state ? '🔆 Todas as luzes ligadas!' : '🌙 Todas as luzes desligadas!';
}

function setScene(scene) {
    const central = CentralDeLuzes.getInstance();
    const status = document.getElementById('status');

    // Turn off all lights first
    toggleAllLights(false);

    setTimeout(() => {
        switch (scene) {
            case 'cinema':
                // Only living room at 30% brightness
                central.ligar('sala');
                central.brightness['sala'] = 30;
                document.querySelector('[data-room="sala"].room-slider').value = 30;
                central.updateRoomBrightness('sala');
                status.innerText = '🎬 Modo Cinema ativado';
                break;

            case 'party':
                // All lights at 100%
                ['quarto', 'sala', 'cozinha', 'varanda'].forEach(room => {
                    central.ligar(room);
                    central.brightness[room] = 100;
                    const slider = document.querySelector(`[data-room="${room}"].room-slider`);
                    if (slider) slider.value = 100;
                    central.updateRoomBrightness(room);
                });
                status.innerText = '🎉 Modo Festa ativado!';
                break;

            case 'work':
                // Office and kitchen at 100%
                ['escritorio', 'cozinha'].forEach(room => {
                    central.ligar(room);
                    central.brightness[room] = 100;
                    const slider = document.querySelector(`[data-room="${room}"].room-slider`);
                    if (slider) slider.value = 100;
                    central.updateRoomBrightness(room);
                });
                status.innerText = '💼 Modo Trabalho ativado';
                break;

            case 'relax':
                // Bedroom and living room at 40%
                ['quarto', 'sala'].forEach(room => {
                    central.ligar(room);
                    central.brightness[room] = 40;
                    const slider = document.querySelector(`[data-room="${room}"].room-slider`);
                    if (slider) slider.value = 40;
                    central.updateRoomBrightness(room);
                });
                status.innerText = '🧘 Modo Relaxar ativado';
                break;
        }
        central.updateStats();
    }, 300);
}
