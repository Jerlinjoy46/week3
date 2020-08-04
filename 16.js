const prompt = require("prompt-sync")();

const number = prompt("Enter a number: ");

if(isPrime(number)){
    console.log(`${number} is a prime number`);
}else{
    console.log(`${number} is not a prime number`);
}

function isPrime(n){
    if(n <= 1){
        return false;
    }
    for(var i=2; i<Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}