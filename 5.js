const prompt = require("prompt-sync")();

var total_mark = prompt("Enter total mark percentage: ");
if(total_mark < 50){
    console.log("Failed")
}else if(total_mark >= 90){
    console.log("A");
}else if(total_mark >= 80){
    console.log("B");
}else if(total_mark >= 70){
    console.log("C");
}else if(total_mark >= 60){
    console.log("D");
}else if(total_mark >= 50){
    console.log("E");
}