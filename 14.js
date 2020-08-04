const prompt = require("prompt-sync")();

var arrayLength = prompt("Enter the size of array: ");
arrayLength = Number(arrayLength);

var i,j;

var multiArray = new Array(arrayLength);
for (var i = 0; i < multiArray.length; i++) {
  multiArray[i] = new Array(arrayLength);
}

var multiArray2 = new Array(arrayLength);
for(var i=0; i < multiArray2.length; i++){
    multiArray2[i] = new Array(arrayLength);
}

var sumOfArrays = new Array(arrayLength);
for(var i=0; i < sumOfArrays.length; i++){
    sumOfArrays[i] = new Array(arrayLength);
}
console.log("Enter the values of array 1")

for(i=0; i<arrayLength; i++){
    for(j=0; j<arrayLength; j++){
        multiArray[i][j] = parseInt(prompt());
    }
}

console.log("Enter the values of array 2");
for(i=0; i<arrayLength; i++){
    for(j=0; j<arrayLength; j++){
        multiArray2[i][j] = parseInt(prompt());
    }
}

for(i=0; i<arrayLength; i++){
    for(j=0; j<arrayLength; j++){
        sumOfArrays[i][j] = multiArray[i][j] + multiArray2[i][j];
    }
}

console.log("Sum of 2 arrays is: ")
console.table(sumOfArrays);