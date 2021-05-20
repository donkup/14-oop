// const Dog = require('./js/Dog');
// const Cat = require('./js/Cat');
// const Rabbit = require('./js/Rabbit');

// const rexas = new Dog('Rex', 'brouwn');
// const rainis = new Cat ('Rainis', 'black');
// const benas = new Rabbit ('Benas', 'white')

// console.log(rexas);
// console.log(rainis);
// console.log(benas);

// rexas.voise();
// rainis.voise();
// benas.voise();

const Volvo = require ('./js/Transport/Volvo');
const naujasVolvo = new Volvo ('Volvo', 'Left', 5, 4);

console.log(naujasVolvo);
naujasVolvo.turnOnEngine();
console.log(naujasVolvo);
naujasVolvo.turnOffEngine();
console.log(naujasVolvo); 
naujasVolvo.turnOffEngine();
console.log(naujasVolvo); 