/*function reverseNumber (input){
    var num = input;
    var string = num.toString();
    var result = "";
    var i = string.length-1;
    for (var i; i >= 0; i--){
        result += string[i];

    }

    var reversedResult = parseInt(result);

    return reversedResult;
}


console.log(reverseNumber(987654321));
*/

function reverseNumber (input) {
 //   var num = input;
    var inputString = input.toString();

    var inputArr = inputString.split("");
    var resultArr = inputArr.reverse();
    var result = resultArr.join("");

return result;

}

console.log(reverseNumber(987654321));