/*var input = "Webmaster";

function alphabetical (input){

var arr = [];
for (var i = 0; i < input.length; i++){
    arr[i] = input[i];
}



return arr;

}
console.log("Webmaster");
*/



function alphabetical (input) {
    //   var num = input;
   var str = input.toLowerCase();
   return str.split("").sort().join("");
   
   }
   
   console.log(alphabetical("Webmaster"));