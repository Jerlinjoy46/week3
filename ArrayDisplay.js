const prompt = require("prompt-sync")();

class ArrayDisplay{
    getArray(arr, size){
        for(var i=0; i < size; i++){
            for(var j=0; j<size; j++){
                arr[i][j] = parseInt(prompt());
            }
        }
        return arr;
    }
    
    displayArray(arr){
        console.table(arr);
    }
}

module.exports = ArrayDisplay;