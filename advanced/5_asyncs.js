// setTimeout() executa uma função após um determinado intervalo de tempo
console.log('Wait for it...');
const helloTimeout = () => {
  console.log('Olá, essa mensagem foi exibida 1 segundo depois de chamada');
  console.log('É possível pausar a execução de um setTimeout()');
  console.log('\n');
};
setTimeout(helloTimeout, 1000);

const timeoutPausado = () => console.log('Esta mensagem não irá aparecer');
const timeoutSemExec = setTimeout(timeoutPausado, 3000);
const pausaTimeout = () => {
  console.log('Esta função irá cancelar a execução do outro timeout');
  clearTimeout(timeoutSemExec);
};
setTimeout(pausaTimeout, 2000);

// setInterval() executa assincronamente uma função, repetindo em um período de tempo determinado
const ping = () => console.log('ping!');
const intervaloPing = setInterval(ping, 1000);
const cancelaIntervalo = () => clearInterval(intervaloPing);
setTimeout(cancelaIntervalo, 5000);

// Callback Hell é um antipadrão de código causado por muitas funções de callback aninhadas
const callbackFeio = () => {
  console.log('Esse callback é feio e executará uma outra função...');
  setTimeout(() => {
    console.log('...que executará outra função...');
    setTimeout(() => {
      console.log('...e assim por diante...');
      setTimeout(() => {
        console.log('...resultando em um código de difícil leitura e manutenção.');
        setTimeout(() => {
          console.log('De forma geral, manter as funções separadas e bem definidas evita o Callback Hell.');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
setTimeout(callbackFeio, 5000);
