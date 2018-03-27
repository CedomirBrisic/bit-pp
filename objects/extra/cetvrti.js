// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function minValue(array){
  var elem=  Math.min(...array);
var elem2= array.lastIndexOf(elem);
var result= "MinValue: " + elem +", minLastIndex: " + elem2;
return result;
}

console.log(minValue([1, 4, -2, 11, 8, 1, -2, 3]));
