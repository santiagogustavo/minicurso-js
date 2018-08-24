// Função básica sem parâmetros
function greeter() {
  console.log('Hello');
}
greeter();

// Função com parâmetros simples
function multi(x, y) {
  return x * y;
}
var res = multi(4, 4);
console.log(res);

// Função com parâmetros objetos
function comida(pessoa) {
  console.log(pessoa.comida);
}
var pessoa = {
  nome: 'Homer',
  comida: 'pizza',
};
comida(pessoa);

// Função anônima
var anon = function (x, y) {
  return x ** y;
};
console.log(anon(3, 2));

// Function expression
var exp = function funcSoma(x, y) {
  return x + y;
};
console.log(exp(2, 3));
