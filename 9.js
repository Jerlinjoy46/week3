var i,j;
var pattern = "";

for(i=1; i<=5; ++i){
    for(j=1; j <= i; ++j){
        pattern += j + " ";
    }
    pattern += "\n";
}

console.log(pattern);