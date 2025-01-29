console.log(document.getElementById("btn-avancar"));

const btnAvancar = document.getElementById("btn-avancar");
const cartas = document.querySelectorAll(".carta");
let cartaAtual = 0;
const btnVoltar = document.getElementById("btn-voltar");

// nessa parte estou identificando o click na seta do site
btnAvancar.addEventListener("click", function () {
    if (cartaAtual === cartas.length - 1) return;

    const cartaoSelecionado = document.querySelector(".escolhido");
    cartaoSelecionado.classList.remove("escolhido");

    // mudar para a proxima carta(avançar)
    cartaAtual++;
    cartas[cartaAtual].classList.add("escolhido");

});

// voltar cartas
btnVoltar.addEventListener("click", function () {
    if (cartaAtual === 0) return;

    const cartaEscolhida = document.querySelector(".escolhido");
    cartaEscolhida.classList.remove("escolhido");

    // mudar para a proxima carta
    cartaAtual--;
    cartas[cartaAtual].classList.add("escolhido");

});