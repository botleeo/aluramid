ssoas
Programação (Mat II) - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
Próximas atividades
Nenhuma atividade para a próxima semana!

Escreva um aviso para sua turma

Aviso: "function tocaSom (idElementoAudio) {…"
GILBERTO NUNES CORDEIRO
Criado em: 10:5910:59
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
 
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (){
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
