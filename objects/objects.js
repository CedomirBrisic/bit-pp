function Person (name, surname, yearBirth){
    this.name = name,
    this.lastName = surname;
    this.yearOfBirth = yearBirth;
    
    this.calcAge = (function (){
        var d = new Date()
        var year = d.getFullYear();
        return 2018 - yearBirth;
    }())

}

var ceda = new Person("Ceda","Brisic",1984);
var Cheda = new Person("Cheda","Brisicc",1985);


function cedaF (object){

    return console.log("Hi I'm " + object.name + " " + object.lastName + " and I'm " + object.calcAge + " years old :-)");
}

cedaF(Cheda);
console.log(ceda);

