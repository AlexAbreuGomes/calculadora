const calculadora = {
  visor: document.querySelector("#visor h1"),
  operacao: [],

  lerValores(valorDigitado) {
    this.visor.innerText = valorDigitado;
  },

  gravarValor(valor) {
    this.operacao.push(valor);
    this.lerValores(this.operacao.join(""));
  },

  gravarOperacao(operacao) {
    this.operacao.push(operacao);
  },

  clear() {
    this.operacao = [];
    this.lerValores("0");
  },

  apagarUltimo() {
    this.operacao.pop();
    this.lerValores(this.operacao.join(""));

  },

  calcular() {
    try {
      const result = eval(this.operacao.join(""));
      this.lerValores(result);
      this.operacao = [result];
    } catch (e) {
      this.lerValores("Erro");
      this.operacao = [];
    }
  },

  iniciar() {
    this.operacao = [];
    this.clear();

    document.querySelectorAll(".botao, .botaoOperadores, #ponto").forEach((botao) => {
      botao.addEventListener("click", () => {
        if (botao.classList.contains("botao")) {
          this.gravarValor(botao.value);
        } else if (botao.classList.contains("botaoOperadores")) {
          this.gravarValor(botao.value);
          this.gravarOperacao(botao.value);
        } else {
          this.gravarValor(".");
        }
      });
    });

    document.getElementById("calcular").addEventListener("click", () => {
      this.calcular();
    });

    document.getElementById("clear").addEventListener("click", () => {
      this.clear();
    });

    document.getElementById("apagar").addEventListener("click", () => {
      this.apagarUltimo();
    });
  },
};

calculadora.iniciar();

