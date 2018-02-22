"use strict mode";

(function hi() {
    console.log("Hi :-)")


    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        }
    }

    function Seat(number, category) {
        this.number = (function () {
            return number || Math.floor(Math.random() * (100 - 10) + 10);

        })();

        this.category = (function () {
            return category || "E";
        })();

        this.getData = function () {
            return this.number + ", " + this.category;
        }
    }


    function Passenger(personO, seatO) {
        this.person = personO;
        this.seat = seatO;

        this.getData = function () {
            return this.seat.getData() + ", " + this.person.getData();
        }
    }


    function Flight(departure, arrival, date) {
        this.relation = departure + "-" + arrival;
        this.date = date;
        this.PassengerList = [];

        this.getData = function () {
            return this.date + " " + this.relation;

        }

        this.addPassenger = function (Passenger) {
            this.PassengerList.push(Passenger);
        }

        this.getNumberOfPassenger = function () {
            return this.PassengerList.length;
        }

    }


    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];

        this.addFlight = function (Flight) {
            this.listOfFlights.push(Flight);
        }

        this.getData = function () {

            var output = "";

            var myAirport = this.name;

            output+= "Airport: " + myAirport + ", " + "total passengers: " + this.getNumberOfPassenger + "/n"
            this.listOfFlights.forEach(function (element) {

                    output += "/t" + element.getData + "/n";
                    output += "/t" + element.PassengerList + "/n";

                
            })
                return output;
        }
    }

    function createFlight(departure, arrival, date) {
        return new Flight(departure, arrival, date);
    }

    function createPassenger(personO, seatO) {
        return new Passenger(personO, seatO)

    }



    var BelgradeParis = new Flight("Belgrade", "Paris", "25.09.2017");
    var BarcelonaBelgrade = createFlight("Barcelona", "Belgrade", "25.11.2017");
    var BelgradeNewYour = createFlight("Belgrade", "New Your", "26.09.2017");

    var KhaleesiP = new Person("Daenerys", "Targaryen");
    var KhaleesiSeat = new Seat(13, "B");
    var Khaleesi = createPassenger(KhaleesiP, KhaleesiSeat);

    var CerseiP = new Person("Cersei", "Lannister");
    var CerseiSeat = new Seat(2, "b");
    var Cersei = createPassenger(CerseiP, CerseiSeat);

    var TyrionP = new Person("Tyrion", "Lannister");
    var TyrionSeat = new Seat();
    var Tyrion = createPassenger(TyrionP, TyrionSeat);

    var JohnSnow = new Person("John", "Snow");
    var SnowSeat = new Seat(12, "B");
    var passengerOne = new Passenger(JohnSnow, SnowSeat);

    var NikolaTesla = new Airport();
    var AirSerbia = new Airport();

    BelgradeParis.addPassenger(JohnSnow);

    BelgradeNewYour.addPassenger(JohnSnow);
    BelgradeNewYour.addPassenger(Khaleesi);

    BarcelonaBelgrade.addPassenger(Tyrion);
    BarcelonaBelgrade.addPassenger(Cersei);

    NikolaTesla.addFlight(BelgradeParis);

    AirSerbia.addFlight(BelgradeNewYour);
    AirSerbia.addFlight(BarcelonaBelgrade);




    console.log(AirSerbia.getData());



})();