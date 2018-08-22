// Tipos básicos
console.log('typeof \'pudim\' =', typeof 'pudim');
console.log('typeof 10 =', typeof 10);
console.log('typeof 10.1 =', typeof 10.1);
console.log('typeof true =', typeof true);
console.log('typeof { chave: \'valor\' } =', typeof { chave: 'valor' });
console.log('typeof (function biscoito() { console.log(\'bolacha\'); }) =', typeof (function biscoito() { console.log('bolacha'); }));
console.log('\n');

// Tipos "vazios"
console.log('typeof null =', typeof null);
console.log('typeof undefined =', typeof undefined);
console.log('\n');

// Tipo Array
console.log('typeof [\'a\', \'b\', \'c\'] =', typeof ['a', 'b', 'c']);
console.log('typeof Array', typeof Array);
console.log('typeof Array.prototype', typeof Array.prototype);
console.log('[\'a\', \'b\', \'c\'] instanceof Array =', ['a', 'b', 'c'] instanceof Array);
console.log('\n');

// Tipos concatenados
console.log('1 + \'2\' =', 1 + '2');
console.log('typeof (1 + \'2\') =', typeof (1 + '2'));
console.log('[] + [] =', [] + []);
console.log('typeof ([] + []) =', typeof ([] + []));
console.log('E a bizarrice começa a partir daqui');
