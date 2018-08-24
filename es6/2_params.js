// Parâmetros "default"
function print(texto = 'Lorem ipsum dolor sit amet') {
  console.log(texto);
}
print();
print('Outro texto');
console.log('\n');

// Parâmetros "rest"
function concat(param, ...outros) {
  return `${param}${outros}`;
}
console.log(concat('Só tem um'));
console.log(concat('Só tem um...', ' e mais um pouco'));
console.log(concat('Só tem um...', ' e mais um pouco', ' e um pouco mais'));

function soma(...valores) {
  let resultado = 0;
  for (valor of valores) {
    resultado += valor;
  }
  return resultado;
}
console.log(soma(1, 2, 3));
