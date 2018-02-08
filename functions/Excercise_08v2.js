function primeNumber(number){
    var result = "";
    var divided = 0;
    if (number > 1){
        for (var i = 2; i < number; i++){
           
            if(number % i === 0){
                result= "it's not a prime number";
            } else {
                result = "It's a prime number";
            }

        }

    } else {
        return "It's not a prime number."
    }


} console.log(primenNumber(5));