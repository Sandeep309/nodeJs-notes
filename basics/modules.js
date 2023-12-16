// const utility = require('./utility');
// console.log('utility', utility);
// console.log('people', utility.people);
// console.log('ages', utility.ages);

// const { people, ages } = require('./utility');
// console.log('people', people);
// console.log('ages', ages);

// const os = require('os');
// console.log('os', os);
// console.log('os platform', os.platform());
// console.log('os homedir', os.homedir());
// console.log('os homedir', os.hostname());

const calculator = require('./calc');
console.log('Addition', calculator.add(10, 5));
console.log('Subtraction', calculator.subtract(10, 5));
console.log('Multiplication', calculator.multiply(10, 5));
console.log('Division', calculator.divide(10, 5));