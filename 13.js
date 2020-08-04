const prompt = require("prompt-sync")();

var string = prompt("Enter a string: ");
var check = palindrome(string);
if(check == true){
    console.log("Entered string is a palindrome");
}else{
    console.log("Entered string is not a palindrome");
}

function palindrome(str){
    var length = str.length;
    var middle = Math.floor(length / 2);

    for(var i=0; i<middle; i++){
        if(str[i] !== str[length - 1 -i]){
            return false;
        }
    }
    return true;
}
