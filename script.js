class UsuarioDados {

    constructor(tempo) {
        this.tempo = tempo;
        this.valor = 0;
    }

    calculoValor() {
        if (this.tempo > 0 && this.tempo < 30) {
            this.valor = 1;
        } 
        else if (this.tempo >= 30 && this.tempo < 60) {
            this.valor = 1.75;
        } 
        else if (this.tempo >= 60 && this.tempo <= 120) {
            this.valor = 3;
        } 
        else {
            document.getElementById("erros").textContent =
                "Tempo inválido, insira um valor entre 1 e 120 minutos.";
            return null;
        }

        return this.valor;
    }
}

function calcular() {
    let tempo = parseInt(document.getElementById("tempo").value);
    let usuario = new UsuarioDados(tempo);

    let valorTotal = usuario.calculoValor();

    if (valorTotal !== null) {
        document.getElementById("respostas").textContent =
            `Você terá que pagar R$ ${valorTotal.toFixed(2)}`;
    }
}

