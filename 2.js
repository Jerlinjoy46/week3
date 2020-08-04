const prompt = require("prompt-sync")();

var num1 = prompt("Enter Number 1: ");
var num2 = prompt("Enter Number 2: ");


var sum = Number(num1) + Number(num2);

console.log(`Sum is ${sum}`);