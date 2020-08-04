const prompt = require("prompt-sync")();

let array1 = [];
let array2 = [];

const size = prompt("Enter the size of arrays: ");

console.log("Enter the values of Array 1");

for(var i=0; i<size; i++){
    var val = prompt(`Array1[${i}]: `);
    array1[i] = Number(val);
}

console.log("Enter the values of Array 2");

for(var i=0; i<size; i++){
    var val = prompt(`Array2[${i}]`);
    array2[i] = Number(val);
}

for(var i=0; i<size; i++){
    temp = array1[i];
    array1[i] = array2[i];
    array2[i] = temp;
}

console.log("Arrays after swapping: ");

console.log("Array1: ", array1);
console.log("Array2: ", array2);