// Escopo local
function printLocal() {
  var local = 'Tá aqui';
  console.log(local);
}
printLocal();

// Escopo global
var global = 'Tá em todo lugar';
function printGlobal() {
  console.log(global);
}
printGlobal();
console.log('\n');

// Ordem de precedência (local X global)
var multi = 'Global';
console.log(multi);

function printMulti() {
  var multi = 'Local';
  console.log(multi);
}
printMulti();
console.log('\n');

// Shadowing
var shadow = 'Original';
console.log(shadow);

if (true) {
  var shadow = 'Modificada';
}
console.log(shadow);
console.log('\n');

// Mudança de escopo
var scoped = 'Externa';

function printScope() {
  console.log(scoped);
  var scoped = 'Interna';
  console.log(scoped);
}
printScope();
console.log('\n');

// Hoisting
function printHoistVar() {
  console.log(hoist, typeof hoist);
  var hoist = 'Hoisting';
}
printHoistVar();

printHoistFunc();
function printHoistFunc() {
  console.log('Essa função foi hasteada');
}
console.log('\n');

// Binding
function printSemBind() {
  console.log(this.variavel);
}
printSemBind();

var objeto = {
  variavel: 'Pudim',
};
var printComBind = printSemBind.bind(objeto);
printComBind();
console.log('\n');

// Go-fish
var variavel = 'Pescou!';
function printGoFish() {
  console.log(variavel);
}
printGoFish();
