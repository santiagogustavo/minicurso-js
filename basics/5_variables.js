// Variável sem valor
var primeira;
console.log(primeira, typeof primeira);

// Variável com valor
var segunda = 'Hello';
console.log(segunda, typeof segunda);

// Operações com variáveis
var x = 10;
var y = 15;
console.log('x + y =', x + y);
console.log('\n');

// Reatribuição de variável
var a = 10;
console.log('a original =', a);
a = 20;
console.log('a modificada =', a);
console.log('\n');

// Desatribuição de variável
var b = 10;
console.log('b original =', b);
b = undefined;
console.log('b desatribuída =', b);
console.log('\n');

// Mudança de tipos
var nomad = 20;
console.log('original =', nomad, typeof nomad);
nomad = 'vinte';
console.log('modificada =', nomad, typeof nomad);
console.log('\n');

// Backtick
var variavel = 'variável';
console.log(`Backtick pode ser utilizado para exibir uma ${variavel} dentro de uma string`);
