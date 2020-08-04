const prompt = require("prompt-sync")();

var mark = prompt("Enter your mark: ");

if(mark < 50){
    console.log("Failed");
}else{
    console.log("Passed");
}