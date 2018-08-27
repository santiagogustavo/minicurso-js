// forEach() dá uma noção intuitiva de iterar sobre elementos de um array (de qualquer tipo)
const letras = ['A', 'B', 'C', 'D'];
letras.forEach(letra => console.log(letra));
console.log('\n');

const pessoas = [
  { nome: 'Ethan', idade: 38, genero: 'M' },
  { nome: 'Madison', idade: 27, genero: 'F' },
  { nome: 'Norman', idade: 34, genero: 'M' },
  { nome: 'Scott', idade: 44, genero: 'M' },
];
pessoas.forEach(pessoa => console.log(pessoa));
console.log('\n');

// map() permite selecionar campos e aplicar transformações nos elementos de um array
const pessoasIdadeEmMeses = pessoas.map((pessoa) => {
  const pessoaComMeses = pessoa;
  pessoaComMeses.meses = pessoa.idade * 12;
  return pessoa;
});
console.log(pessoasIdadeEmMeses);
console.log('\n');

const nomesApenas = pessoas.map(pessoa => pessoa.nome);
console.log(nomesApenas);
console.log('\n');

// filter() recupera elementos de um array de acordo com o resultado de uma função
const pessoasMenoresQue35 = pessoas.filter(pessoa => pessoa.idade < 35);
console.log(pessoasMenoresQue35);
console.log('\n');

// reduce() percorre os elementos de um array e retorna um valor acumulado, pode receber um valor inicial
const somaIdade = pessoas.reduce((acumulado, pessoaAtual) => {
  console.log(`Somando: [${pessoaAtual.nome}, ${pessoaAtual.idade}]`);
  return acumulado + pessoaAtual.idade;
}, 0);
console.log(somaIdade);
