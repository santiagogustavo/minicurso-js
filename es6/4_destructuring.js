// Destructuring de objetos
const pessoa = {
  nome: 'Santiago',
  bebida: 'Café',
  comida: 'Pizza',
  musica: 'Techno',
};
console.log(pessoa);

const {
  bebida,
  musica,
} = pessoa;
console.log(bebida, musica);
console.log('\n');

try {
  bebida = 'Frapuccino';
} catch (e) {
  console.log(`${bebida} se tornou uma variável const e não pode ser editada`);
}

pessoa.bebida = 'Frapuccino';
console.log(pessoa);
console.log(bebida);
