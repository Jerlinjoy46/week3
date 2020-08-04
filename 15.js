const prompt = require("prompt-sync")();

let array = [];
let size = prompt("Enter the size of array: ");

var result = getArray(array, size);
displayArray(result,size);


function getArray(arr, size){
    for(var i=0; i<size; i++){
        arr[i] = prompt();
    }
    return arr;
}

function displayArray(arr, size){
    console.log("Array:")
    for(var i=0; i<size; i++){
        console.log(arr[i]);
    }
}