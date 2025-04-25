function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

class CentralDeLuzes {
    constructor() {
        if (CentralDeLuzes.instance) return CentralDeLuzes.instance;
        this.estado = {};
        CentralDeLuzes.instance = this;
    }

    ligar(comodo) {
        const div = document.getElementById(comodo);
        if (div) {
            div.style.backgroundColor = 'rgba(0, 123, 255, 0.5)';
            div.innerText = capitalize(comodo);
            this.estado[comodo] = 'ligado';
            this.atualizarBotoes(comodo);
            const statusEl = document.getElementById('status');
            statusEl.innerText = `Luz do(a) ${capitalize(comodo)} ligada`;
        }
    }

    desligar(comodo) {
        const div = document.getElementById(comodo);
        if (div) {
            div.style.backgroundColor = 'gray';
            div.innerText = capitalize(comodo);
            this.estado[comodo] = 'desligado';
            this.atualizarBotoes(comodo);
            const statusEl = document.getElementById('status');
            statusEl.innerText = `Luz do(a) ${capitalize(comodo)} desligada`;
        }
    }

    atualizarBotoes(comodo) {
        document.querySelectorAll(`button[data-comodo="${comodo}"]`).forEach(btn => {
            const acao = btn.getAttribute('data-acao');
            const ligado = this.estado[comodo] === 'ligado';
            const isLigar = acao === 'ligar';
            btn.classList.toggle('active', (ligado && isLigar) || (!ligado && !isLigar));
        });
    }

    static getInstance() {
        if (!CentralDeLuzes.instance) {
            CentralDeLuzes.instance = new CentralDeLuzes();
        }
        return CentralDeLuzes.instance;
    }
}

document.querySelectorAll('button[data-comodo]').forEach(botao => {
    botao.addEventListener('click', () => {
        const comodo = botao.getAttribute('data-comodo');
        const acao = botao.getAttribute('data-acao');
        const central = CentralDeLuzes.getInstance();

        if (acao === 'ligar') central.ligar(comodo);
        else if (acao === 'desligar') central.desligar(comodo);
    });
});
