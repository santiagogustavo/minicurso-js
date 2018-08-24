// Closure como forma de escopo léxico
function closureLexico() {
  const nome = 'Closure';

  function printNome() {
    console.log(`Olá, eu sou ${nome}.`);
  }
  printNome();
}
closureLexico();
try {
  closureLexico.printNome();
} catch (e) {
  console.log('Não podemos acessar métodos ou variáveis internas, pois elas estão encapsuladas dentro do contexto');
}
console.log('\n');

// Closure como forma de encapsulamento
function fabricaMulti(base) {
  const x = base;

  function multi(y) {
    return x * y;
  }

  return multi;
}
const tabuada5 = fabricaMulti(5);
console.log(tabuada5(2));
console.log('\n');

// Exemplo prático é muito semelhante ao conceito de classes
const iterador = (inicial) => {
  let valor = inicial;

  const incrementa = (quantidade = 1) => {
    valor += quantidade;
  };

  const atual = () => valor;

  return {
    incrementa,
    atual,
  };
};

const novoIterador = iterador(0);
for (let i = 0; i < 5; i += 1) {
  console.log(novoIterador.atual());
  novoIterador.incrementa();
}
