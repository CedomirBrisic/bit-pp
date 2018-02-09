//Write a program to filter out falsy values from the array.

//[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

var myArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function addToArray(stringArray) {
    var resultArray = [];
    var k=0;

    for (var i = 0; i < stringArray.length; i++) {
    
        if (!isNaN(stringArray[i]) && stringArray[i] !== "undefined" && stringArray[i] !== null && stringArray[i] !== false && isFinite(stringArray[i])) {
            

            resultArray[k] = stringArray[i];
            k++;
        }





    } return resultArray;
}

console.log(addToArray(myArray));