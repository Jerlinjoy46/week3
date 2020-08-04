const prompt = require("prompt-sync")();

var arrayLength = prompt("Enter the size of array: ");
arrayLength = Number(arrayLength);

var multiArray = new Array(arrayLength);
for(var i=0; i < multiArray.length; i++){
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

console.log("Enter the values of array 1");
multiArray = getArray(multiArray, arrayLength);
console.log("Enter the values of array 2");
multiArray2 = getArray(multiArray2, arrayLength);
sumOfArrays = addArray(multiArray, multiArray2, arrayLength);
console.log("Sum of array 1 and array 2:");
displayArray(sumOfArrays);


function getArray(arr, size){
    for(i=0; i < size; i++){
        for(j=0; j<size; j++){
            arr[i][j] = parseInt(prompt());
        }
    }
    return arr;
}

function displayArray(arr){
    console.table(arr);
}

function addArray(arr1, arr2, size){
    var sum = new Array(size);
    for(var i=0; i<sum.length; i++){
        sum[i] = new Array(size);
    }


    for(var i=0; i<size; i++){
        for(var j=0; j<size; j++){
            sum[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return sum;
}