function alpabetical (input){

    var arr = input.split(" ");  
    var strArr = [];
    var result = "";
    for (var i = 0; i <arr.length; i++){
        var x = arr[i].toLowerCase();
        strArr = x.split("").sort().join("");
        result += strArr;
        result += " ";
    }

    return result;
}

console.log(alpabetical("Republic of Serbia"))