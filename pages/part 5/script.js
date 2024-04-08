document.addEventListener('DOMContentLoaded', function() { //so executa quando tudo carregar
    const questions = document.querySelectorAll('.question');
    const verificarBtn = document.getElementById('verificar');
    const tentarNovoBtn = document.getElementById('tentar_novo');
    let respostas = {}; //armazenamento de respostas
    const numQuestoes = questions.length; //total de questões
  
    verificarBtn.addEventListener('click', function() { //faz o botao de verificar pontuação ser clicavel
      let pontuacao = 0; //variavel para armazenar pontuação
      for (let i = 0; i < numQuestoes; i++) {
        const questao = questions[i]; //seleciona questão
        const respostaCorreta = questao.dataset.respostaCorreta; //Consegue a resposta correta a partir do data-resposta-correta 
        const respostaUsuario = respostas[`questao${i+1}`]; //consegue a resposta do usuario para a questão de agora a partir de respostas que utiliza o identificador de cada questão
  
        if (respostaUsuario === respostaCorreta) {
          pontuacao ++; //se o usuario marcou a resposta correta, vai ganhar pontos
        }
      }
      alert(`Sua pontuação é ${pontuacao}/${numQuestoes}`); //sua pontuação é (quanto fez)/total das questões
    });
  
    tentarNovoBtn.addEventListener('click', function() { //quando clicar no tente de novo
      respostas = {}; //reseta respostas
      questions.forEach(question => {
        const radios = question.querySelectorAll('input[type="radio"]'); //seleciona todos os botões de radio da pergunta
        radios.forEach(radio => {
          radio.checked = false; //desmarca tudo
        });
      });
    });
  
    questions.forEach((question, index) => {
      const radios = question.querySelectorAll('input[type="radio"]'); //seleciona todos os botões de radio da pergunta
      radios.forEach(radio => {
        radio.addEventListener('click', function() { //clique
          respostas[`questao${index+1}`] = this.value; //armazena a resposta do usuario usando o identificador
          radios.forEach(otherRadio => {
            if (otherRadio !== radio) { //se o botão clicado for diferente do botão atual, ai a gente desmarca
              otherRadio.checked = false;
            }
          });
        });
      });
    });
  });
  