// Currying é uma prática utilizada em programação funcional
const multiplicaCurry = x => y => x * y;
const tabuada2 = multiplicaCurry(2);
console.log(tabuada2(32));

// Sua principal aplicação é o ocultamento de parâmetros em aplicações específicas de uma função
const divideCurry = y => x => (y !== 0 ? x / y : 'Ops, divisão por zero!');
const dividePor2 = divideCurry(2);
const dividePor0 = divideCurry(0);
console.log(dividePor2(64));
console.log(dividePor0(64));
console.log('\n');

// Comparando com funções "tradicionais", as funções curried são muito mais flexíveis
const somaNormal = (x, y) => x + y;
const somaCurry = x => y => x + y;
console.log(somaNormal(2, 2));
console.log(somaCurry(2)(2));
console.log('\n');

// É possível "montar" e "desmontar" currying em funções
const curry = func => x => y => func(x, y);
const uncurry = func => (x, y) => func(x)(y);
const somaNormalComCurry = curry(somaNormal);
const somaCurrySemCurry = uncurry(somaCurry);
console.log(somaNormalComCurry(4)(4));
console.log(somaCurrySemCurry(4, 4));
