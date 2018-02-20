// Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]
// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]
// Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 

function arr1(input, numb) {
    var result1 = [];
    var c = 0;
    for (var i = 0; i < input.length; i++) {
        var element = input[i];
        if (element < numb) {
            result1[c] = element;
            c++;
        }
    }
    return result1;
}

console.log(arr1([2, 3, 8, -2, 11, 4], 6));

function proSubstring(array) {

    var arrey1 = [];
    var sub = "pro";
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        element = element.toLowerCase();
        if (element.substring(0, 3) == sub) {
            arrey1.push(element);
        }
    }
    return arrey1;

}
// console.log(proSubstring(["JavaScript", "Programming", "fun", "product"]));

function filterArray(myArr, test) {
    var resultArr = [];

    for (var i = 0; i < myArr.length; i++) {
        var elem = myArr[i];
        if (test(elem)) {
            resultArr.push(elem);
        }
    }

    return resultArr;
}

function isEven(element) {
    return element % 2 === 0;
}

function isPositive(element) {
    return element > 0;
}

console.log(filterArray([2, 3, 8, -2, 11, 4], isEven))
console.log(filterArray([2, 3, 8, -2, 11, 4], isPositive))

function newFilterArray(ourArrey, callback) {
    var resultArray = [];
    for (var i = 0; i < ourArrey.length; i++) {
        var element = ourArrey[i];
        var newElem = callback(element)
        resultArray.push(newElem);

    }

    return resultArray;
}

function addOne(element) {
    return element + 1;
}
console.log(newFilterArray([2, 3, 8, -2, 11, 4], addOne));
console.log(newFilterArray([2, 3, 8, -2, 11, 4], function (param) {
    return param / 2
}));