const prompt = require("prompt-sync")();

var sum=0;

var limit = prompt("Enter a limit: ");

for(var i=1; i<limit; i++){
    if(i % 2 != 0){
        sum = sum + i;
    }
}

console.log(`Sum of odd numbers upto ${limit} = ${sum}`);