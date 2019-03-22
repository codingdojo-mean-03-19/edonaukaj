const MathLibrary = require("./mathlib");
const math = new MathLibrary();

const num1 = 3;
const num2 = 4;

console.log("Sum of " + num1 + "and" + num2 + "is:", math.add(num1, num2));
console.log("Product of " + num1 + "and" + num2 + "is:", math.multiply(num1, num2));
console.log("Square of " + num1 + "is:", math.square(num1); console.log("Random number" + num1 + "and" + b + ":", math.random(num1, num2));