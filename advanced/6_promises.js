// Promises permitem lidar com funções assíncronas utilizando estados (pendente, resolvida, rejeitada)
const resolveDepois = timeout => new Promise((resolve, rejeita) => {
  if (timeout) {
    setTimeout(resolve, timeout);
  } else {
    rejeita(Error('Ops, não pode ficar sem timeout'));
  }
});

resolveDepois(1000).then(() => console.log('A Promise foi resolvida :)'));
resolveDepois().catch(error => console.log('A Promise foi rejeitada :(\n', error));

// A sintaxe async/await é um syntax sugar que facilita o uso de Promises
const esperaResolveDepois = async () => {
  await resolveDepois(1000);
  return 'Esta função esperou a execução de resolveDepois().';
};
esperaResolveDepois().then(retorno => console.log(retorno));

// Também lida com funções assíncronas aninhadas de uma forma mais legível
const espera2Segundos = valor => new Promise(resolve => setTimeout(resolve(valor), 2000));
const somaAssincrona = async (a, b) => {
  const resultado = await espera2Segundos(b);
  return a + resultado;
};
somaAssincrona(3, 3).then(resultado => console.log(resultado));
