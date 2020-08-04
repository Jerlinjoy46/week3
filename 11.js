const prompt = require("prompt-sync")();

const size = prompt("Enter the size of an array: ");
let array = [];
let count = 0;

console.log("Enter the values of array");
for(var i=0; i<size; i++){
    var val = prompt(`Array[${i}]: `);
    array[i] = Number(val);
}

for(var i=0; i<size; i++){
    if(array[i] % 2 == 0){
        count++;
    }
}

console.log("Number of even numbers in the given array is ", count);