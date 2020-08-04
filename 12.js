const prompt = require("prompt-sync")();

let array = [];
var i,j,temp;
const size = prompt("Enter the size of an array: ");

console.log("Enter the values of array");

for(var i=0; i<size; i++){
    var val = prompt();
    array[i] = Number(val);
}

for(i=0; i<size; ++i){
    for(j = i + 1; j<size; ++j){
        if(array[i] < array[j]){
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log("Sorted array");
console.log(array);