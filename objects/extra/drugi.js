// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

function removeDuplicates(_array) {
    
    var newArray = [];
    var eArray = _array.sort()
    console.log( eArray);
    
    for (var i = 0; i < eArray.length; i++) {
        var element = eArray[i];
        if (element !== eArray[i+1]) {
            newArray.push(element);
        }
    }

    console.log( eArray);
  
    return newArray;
    
}
console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));
      

// console.log(newArray.sort(removeDuplicates()));
