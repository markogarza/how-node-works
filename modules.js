// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const Calculator = require("./test-module-1");
const calc1 = new Calculator();
console.log(calc1.multiply(3, 5));

// exports
// const calc2 = require("./test-module-2");

const { add, divide, multiply } = require("./test-module-2");
console.log(divide(35, 7));

// Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
