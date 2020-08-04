const prompt = require("prompt-sync")();

var income = prompt("Enter the annual income: ");
var tax;

if(income < 250000){
    console.log("No Tax");
}else if(income > 250000 && income <= 500000){
    tax = income * 5 / 100;
    console.log("Income tax amount = ", tax);
}else if(income > 500000 && income <= 1000000){
    tax = income * 20 / 100;
    console.log("Income tax amount = ", tax);
}else if(income > 1000000 && income <= 5000000){
    tax = income * 30 / 100;
    console.log("Income tax amount = ", tax);
}