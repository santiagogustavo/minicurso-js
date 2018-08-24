// Variáveis "let"
let variavelLet = 'Original';
console.log(variavelLet);
variavelLet = 'Modificada';
console.log(variavelLet);
console.log('\n');

// Variáveis "const";
const variavelConst = 'Constante';
console.log(variavelConst);

try {
  variavelConst = 'Valor novo';
} catch (e) {
  console.log('Const não pode receber novos valores');
}
console.log('\n');


// Escopo "let/const"
function letEscopo() {
  let a = 1;
  if (true) {
    const b = 2;
    a = 3;
  }

  try {
    console.log(a + b);
  } catch (e) {
    console.log('B não está definido no escopo da função');
  }
}
letEscopo();
console.log('\n');

// "let" e "const" evitam o problema de instanciamento por hoisting
for (var i = 0; i < 5; i += 1) {
  console.log(i);
}
console.log('\n');
for (let j = 0; j < 5; j += 1) {
  console.log(j);
}
console.log('\n');
console.log(i);
try {
  console.log(j);
} catch (e) {
  console.log('J não está definido fora do escopo for');
}
