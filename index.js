const Dog = require('./js/Dog');
const Cat = require('./js/Cat');
const Rabbit = require('./js/Rabbit');

const rexas = new Dog('Rex', 'brouwn');
const rainis = new Cat ('Rainis', 'black');
const benas = new Rabbit ('Benas', 'white')

console.log(rexas);
console.log(rainis);
console.log(benas);

rexas.voise();
rainis.voise();
benas.voise();