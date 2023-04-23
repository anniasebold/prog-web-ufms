/*
 *  Script com a lógica do cronometro.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de um cronômetro de duas formas.
 *  1. Armazenar os milisegundos, segundos, minutos e horas e incrementar
 *     cada uma destas unidades quando necessário. Lembre-se que se milisegundos
 *     exceder 999 você deve incrementar uma unidade em segundos e assim continua.
 *  2. Você pode armazenar somente os milisegundos e incrementá-lo quando necessário.
 *     Após isso, você consegue obter horas minutos e segundos usando simples fórmulas
 *     matemáticas.
 *
 *  Depois de computar os valores de milisegundos, segundos, minutos e horas,
 *  atualize o HTML chamando o método updateVisualization(). Para isso,
 *  finalize a implementação simplesmente colocando os valores dentro dos elementos
 *  usando do atributo innerHTML dos elementos retornados.
 *
 *  Essa atualização deve ser feita usando o método 'setInterval' a pelo menos 10ms.
 *  Esse método retorna uma referência tal que pode ser usada por 'clearInterval'
 *  para interromper a execução a qualquer momento.
 */

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const milisegundo = document.getElementById("milissegundo");

//  a cada 50 milissegundos.

// Função executada quando o botão 'Iniciar' é clicado
// - se o cronometro estiver parado, iniciar contagem.
// - se estiver ativo, reiniciar a contagem
// Dica: use do método 'setInterval' para executá-lo

let startTimer;
function start() {
  stop();
  startTimer = setInterval(timer, 10);
}

// Função executada quando o botão 'Reiniciar' é clicado
// - se o cronometro estiver ativo, reiniciar contagem
// - se estiver parado, zerar e permanecer zerado
function reset() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  horas.innerText = "00";
  minutos.innerText = "00";
  segundos.innerText = "00";
  milisegundo.innerText = "000";
}

// Função executada quando o botão 'Parar' é clicado
// - se o cronometro estiver ativo, parar na contagem atual
function stop() {
  clearInterval(startTimer);
}

//Função que executa os cálculos de atualização do tempo do cronômetro e atualiza o display do cronometro no html.
// As próximas linhas buscam pelos respectivos espaços de hora, minuto, segundo e milissegundos
// Basta implementar a lógica e alterar o conteúdo (innerText) com os valores
function timer() {
  if(milliseconds === 1000) {
    milliseconds = 0;
    seconds += 1;
  } else {
    milliseconds += 10;
  }

  if(seconds === 60) {
    seconds = 0;
    minutes += 1;
  }
  if(minutes === 60) {
    minutes = 0;
    hours += 1;
  }

  horas.innerText = formatar(hours);
  minutos.innerText = formatar(minutes);
  segundos.innerText = formatar(seconds);
  milisegundo.innerText = formatar(milliseconds);
}

function formatar(time) {
  return time >= 10 ? time : `0${time}`
}