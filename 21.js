const prompt = require("prompt-sync")();

let array = [];
let sum = [];
var limit = prompt("Enter the array limit: ");
console.log("Enter the values array");
for(var i=0; i<limit; i++){
    array[i] = parseInt(prompt());
}

for(var i=0; i<limit; i++){
    sum[i] = array[i] * array[i+1];
}

var string = "";
for(var i=0; i<limit -1; i++){
    string += sum[i] + " ";
}
console.log(string);