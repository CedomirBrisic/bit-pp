function john (input){
    var result = "";
    arr = input.split(" ");
    result = arr[0] + " " + arr[1][0]+".";

    return result;
}

console.log(john("John Snow"));