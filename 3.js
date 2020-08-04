const prompt = require("prompt-sync")();

var principal_amount = prompt("Enter Pricipal amount: ");
var interest = prompt("Enter Interest rate: ");
var number_of_years = prompt("Enter the Number of years: ");

var simple_interest = (principal_amount * interest * number_of_years) / 100;

console.log(`Simple Interest: ${simple_interest}`);