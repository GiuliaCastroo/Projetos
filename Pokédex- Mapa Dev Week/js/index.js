
const cartoes = document.querySelectorAll('.cartao');
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function monstrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function () {

    if (cartaoAtual === cartoes.length - 1) {
        return
    }
    
    esconderCartaoSelecionado();
    cartaoAtual++;
    monstrarCartao(cartaoAtual)

})


btnVoltar.addEventListener('click', function () {

    if (cartaoAtual === 0) {
        return
    }

    esconderCartaoSelecionado();
    cartaoAtual--;
    monstrarCartao(cartaoAtual)
})


