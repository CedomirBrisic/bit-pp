// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
function duplicateElements(_array) {
    
    var newArray=[];

    for(var i=0;i<_array.length;i++){
        var element=_array[i];
        newArray.push(element);
        newArray.push(element);
        newArray.sort();
    }
    return newArray;
}console.log(duplicateElements([2, 4, 7, 11, -2, 1]));
