// Arrow functions
const potencia = (x, y) => {
  return x ** y;
};
console.log(potencia(4, 2));

// Retorno direto para valores e expressões
const modulo = (x, y) => x % y;
console.log(modulo(15, 4));
console.log('\n');

// Binding é automaticamente feito para o escopo em que foi declarado
this.variavel = 'Escopo original';
const arrow = () => console.log(this.variavel);
arrow();

const escopo = function () {
  this.variavel = 'Escopo novo';
  arrow();

  const arrowNova = () => console.log(this.variavel);
  arrowNova();
};
escopo();
