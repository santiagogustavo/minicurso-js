// Loop "for"
var iterador;
for (iterador = 0; iterador < 5; iterador += 1) {
  console.log(iterador);
}
console.log('\n');

// Ĺoop "while"
iterador = 0;
while (iterador < 5) {
  console.log(iterador);
  iterador += 1;
}
console.log('\n');

// Ĺoop "while-break"
iterador = 0;
while (true) {
  if (iterador >= 5) break;
  console.log(iterador);
  iterador += 1;
}
console.log('\n');

// Loop "do-while"
iterador = 0;
do {
  console.log(iterador);
  iterador += 1;
} while (iterador < 5);
console.log('\n');

// Loop "for-in"
var intervalo = ['A', 'B', 'C', 'D', 'E'];
for (var chave in intervalo) {
  console.log(chave);
}
console.log('\n');

// Loop "for-of"
for (var valor of intervalo) {
  console.log(valor);
}
