const Calculator = require("./Calculator");
const prompt = require("prompt-sync")();
const { prototype } = require("./Calculator");

calc = new Calculator();

console.log("1. Addition\n2. Multiplication\n3. Subtraction\n4. Division");
let option = prompt("Select any option: ");
option = Number(option);

switch(option){
    case 1:
        console.log("Addition: \nEnter two numbers");
        var num1 = parseInt(prompt());
        var num2 = parseInt(prompt());
        var result = calc.addition(num1, num2);
        console.log("Answer is ", result);
        break;
    case 2:
        console.log("Multiplication: \nEnter two numbers");
        var num1 = parseInt(prompt());
        var num2 = parseInt(prompt());
        var result = calc.multiplication(num1, num2);
        console.log("Answer is ", result);
        break;
    case 3:
        console.log("Subtraction: \nEnter two numbers");
        var num1 = parseInt(prompt());
        var num2 = parseInt(prompt());
        var result = calc.subtraction(num1, num2);
        console.log("Answer is ", result);
        break;
    case 4:
        console.log("Division: \nEnter two numbers");
        var num1 = parseInt(prompt());
        var num2 = parseInt(prompt());
        var result = calc.division(num1, num2);
        console.log("Answer is ", result);
        break;
    default:
        console.log("Invalid entry !");
}