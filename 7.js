const prompt = require("prompt-sync")();

var num = prompt("Enter a number: ");
var sum = 0;
for(var i=1; i<=10; i++){
    sum = i * num;
    console.log(`${i} x ${num} = ${sum}`);
}