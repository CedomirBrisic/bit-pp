"use strict mode";

(function hi() {
    console.log("Hi :-)")
})();

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    function Seat(number, category) {
        this.number = number;
        this.category = (function () {
            if (category == "b" || category == "e" || category == undefined) {
                return category || "e";
            }
        })();
    }

    var ZikaZikic = new Person("Zika", "Zikic");
    var ZikaSeat = new Seat("24");

    function Passanger(person, seat) {
        this.person = person;
        this.seat = seat;
    }


    function Flight(departure,arrival,date){
        this.relation = departure + "-" + arrival;
        this.date= date;
        this.PassengerList = [];
    }


    var Airport = {
        name: "Nikola Tesla",
        listOfFlights: [],
    }

console.log(Airport);