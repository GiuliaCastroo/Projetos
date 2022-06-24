
const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagens => {
  personagens.addEventListener('mouseenter', () => {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
    personagens.classList.add('selecionado')


    
    const idSelecionado = personagens.attributes.id.value;
    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `imagens/${idSelecionado}.png`
    
    const nomeJogador1 = document.getElementById('nome-personagem'); 
    const nomeSelecionado = personagens.getAttribute('data-name');
    nomeJogador1.innerHTML = nomeSelecionado;
  })

})