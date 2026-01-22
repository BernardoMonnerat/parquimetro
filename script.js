class Parquimetro {
    constructor(valor) {
        this.valor = valor;
    }

    calcularTempo() {
        if (this.valor < 1) {
            return { erro: "Valor insuficiente" };
        }

        if (this.valor >= 3) {
            return {
                tempo: 120,
                troco: (this.valor - 3).toFixed(2)
            };
        }

        if (this.valor >= 1.75) {
            return {
                tempo: 60,
                troco: (this.valor - 1.75).toFixed(2)
            };
        }

        return {
            tempo: 30,
            troco: (this.valor - 1).toFixed(2)
        };
    }
}

function calcular() {
    const valorInput = document.getElementById("valor").value;
    const resultadoDiv = document.getElementById("resultado");

    const valor = parseFloat(valorInput);
    const parquimetro = new Parquimetro(valor);
    const resultado = parquimetro.calcularTempo();

    if (resultado.erro) {
        resultadoDiv.innerHTML = resultado.erro;
    } else {
        resultadoDiv.innerHTML = `
            Tempo: ${resultado.tempo} minutos <br>
            Troco: R$ ${resultado.troco}
        `;
    }
}