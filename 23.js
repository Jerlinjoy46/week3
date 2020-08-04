const prompt = require("prompt-sync")();
const arraydisplay = require("./ArrayDisplay");

var arrayLength = prompt("Enter the size of array: ");
arrayLength = Number(arrayLength);

var multiArray = new Array(arrayLength);
for(var i=0; i < multiArray.length; i++){
    multiArray[i] = new Array(arrayLength);
}

var ar = new arraydisplay;

console.log("Enter the values of array 1");
multiArray = ar.getArray(multiArray, arrayLength);
ar.displayArray(multiArray);