// IIFE - Immediately Invoked Function Expression
(function hello() {
  console.log('Olá, eu sou IIFE.');
}());

try {
  hello();
} catch (e) {
  console.log('IIFE declara funções e variáveis apenas em seu contexto anônimo (e temporário)');
}
console.log('\n');

// Arrow IIFE
(() => {
  this.variavel = 'IIFE';
  console.log(`Arrow functions anônimas também podem ser usadas como ${this.variavel}.`);
})();

// IIFE com retorno
const variavel = (() => 'Ou então podem retornar valores que podem ser usados no resto do código.')();
console.log(variavel);
