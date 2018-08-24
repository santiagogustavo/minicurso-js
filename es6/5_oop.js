// "Pseudo" Orientação a Objetos
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  apresentar() {
    console.log(`Olá, eu sou ${this.nome}.`);
  }
}
const instancia = new Pessoa('John Doe');
instancia.apresentar();
console.log('\n');

// Polimorfismo
class PessoaWithLasers extends Pessoa {
  constructor(nome, temLaser) {
    super(nome);
    this.temLaser = temLaser;
  }

  apresentarComLaser() {
    if (this.temLaser) console.log(`Olá, eu sou ${this.nome} PEW PEW PEW.`);
    else this.apresentar();
  }
}
const instanciaPoli = new PessoaWithLasers('Megatron', true);
instanciaPoli.apresentar();
instanciaPoli.apresentarComLaser();
console.log('\n');

// Syntax sugar
class Androide extends Pessoa {
  constructor(nome, modelo, serial) {
    super();
    this._nome = nome;
    this._modelo = modelo;
    this._serial = serial;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(modelo) {
    this._modelo = modelo;
  }

  get serial() {
    return this._serial;
  }

  set serial(serial) {
    this._serial = serial;
  }

  apresentar() {
    console.log(`Olá, eu sou ${this.nome} e fui enviado pela CyberLife para te ajudar na investigação`);
  }
}
const divergente = new Androide('Markus', 'RK200', '#684 842 971');
console.log(divergente.nome, divergente.modelo, divergente.serial);

divergente.nome = 'Connor';
divergente.modelo = 'RK800';
divergente.serial = '#313 248 317';
divergente.apresentar();
