// Generators são funções que têm fluxo de execução controlável por um iterador
function* generator() {
  console.log('Esta é uma function Generator.');
  yield;
  console.log('Com ela, é possível escrever blocos de código que possuem execução controlada externamente.');
}

const iterador = generator();
iterador.next();
iterador.next();
console.log('\n');

// Podem ser usadas para acumular valores em uma lógica
function* tabuada(valor) {
  let termo = 1;
  do {
    yield termo * valor;
    termo += 1;
  } while (true);
}
const tabuada4 = tabuada(4);
for (let i = 0; i < 5; i += 1) {
  console.log(tabuada4.next().value);
}
console.log('\n');

// Ou então receber parâmetros diferentes para cada iteração
function* somatoria(valor) {
  let total = 0 + valor;
  do {
    const acc = yield total;
    total += acc;
  } while (true);
}
const soma = somatoria(4);
console.log(soma.next().value);
console.log(soma.next(6).value);
console.log(soma.next(10).value);
console.log(soma.next(5).value);
console.log(soma.next(15).value);
