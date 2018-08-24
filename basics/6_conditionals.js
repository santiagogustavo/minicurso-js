// Condicional if/else
var a = 5;
var b = '5';
if (a === b) {
  console.log(`${a} é igual a ${b} em valor e tipo`);
} else {
  console.log(`${a} é diferente de ${b} em valor ou tipo`);
}

// Condicional if/else if/else
var x = 1;
var y = 2;
if (x > y) {
  console.log(`${x} é maior que ${y}`);
} else if (x < y) {
  console.log(`${x} é menor que ${y}`);
} else {
  console.log(`${x} é igual a ${y}`);
}

// Condicional ternário
var cond = 10;
var isNumber = typeof cond === 'number' ? `${cond} é number` : `${cond} não é number`;
console.log(isNumber);

// Switch case
var string = 'A';
switch (string) {
  case 'B':
    console.log('String é B');
    break;
  case 'C':
    console.log('String é C');
    break;
  default:
    console.log(`String é ${string}`);
    break;
}
