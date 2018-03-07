

(function hi() {
    console.log("Hi :-)")


    function Person(name = "John", surname = "Doe") {
        this.name = name;
        this.surname = surname
    }

    function Seat(number = 0, category = "E") {
        this.number = (function () {
            return number || Math.floor(Math.random() * (100 - 10) + 10);
        })();
        this.category = (function () {
            return category;
        })();
    }

    function Passenger(personO, seatO) {
        this.person = personO;
        this.seat = seatO;  
    }

    function Flight(departure, arrival, date) {
        this.relation = departure + "-" + arrival;
        this.date = date;
        this.PassengerList = [];
        this.numberOfPassangers = 0;
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];   
    }

    Person.prototype.getData = function () {
        return this.name + " " + this.surname;
    }

    Seat.prototype.getData = function () {
        return this.number + ", " + this.category;
    }
            
    Passenger.prototype.getData = function () {
        return this.seat.getData() + ", " + this.person.getData();
    }

    Flight.prototype.getData = function () {
        return this.date + " " + this.relation;

    }

    Flight.prototype.addPassenger = function (Passenger) {
        this.PassengerList.push(Passenger);
        this.numberOfPassangers += 1;
    }

    Airport.prototype.addFlight = function (Flight) {
        this.listOfFlights.push(Flight);
    }

    Airport.prototype.getData = function () {
        let output = "";
         firstRow = "";
         myAirport = this.name;
         totalNumber = 0;
        
        this.listOfFlights.forEach(function (element) {
            totalNumber += element.numberOfPassangers;
            output+= `  ${element.getData()}`;
            element.PassengerList.forEach(function(el){
                output+= `${el.getData()}
                `;
            
            })
        });

        firstRow = "Airport: " + myAirport + ", " + "total passengers: " + totalNumber + "\n";
        return firstRow + output;
    }

    function createFlight(departure, arrival, date) {
        return new Flight(departure, arrival, date);
    }

    function createPassenger(personO, seatO) {
        return new Passenger(personO, seatO)
    }

    // function createPassenger(name, surname, seatNumber, category) {
    //     var person = new Person(name, surname);
    //     var seat = new Seat(seatNumber, category);
    //     return new Passenger(person, seat);
    // }

    // var ceda = createPassenger( "Ceda", "Brisic", 17, "e")

    const BelgradeParis = new Flight("Belgrade", "Paris", "25.09.2017");
    const BarcelonaBelgrade = createFlight("Barcelona", "Belgrade", "25.11.2017");
    const BelgradeNewYour = createFlight("Belgrade", "New York", "26.09.2017");

    const KhaleesiP = new Person("Daenerys", "Targaryen");
    const KhaleesiSeat = new Seat(13, "B");
    const Khaleesi = createPassenger(KhaleesiP, KhaleesiSeat);

    const CerseiP = new Person("Cersei", "Lannister");
    const CerseiSeat = new Seat(2, "b");
    const Cersei = createPassenger(CerseiP, CerseiSeat);

    const TyrionP = new Person("Tyrion", "Lannister");
    const TyrionSeat = new Seat();
    const Tyrion = createPassenger(TyrionP, TyrionSeat);

    const JohnSnowP = new Person("John", "Snow");
    const SnowSeat = new Seat(12);
    const JohnS = new Passenger(JohnSnowP, SnowSeat);

    const NikolaTesla = new Airport();
    const AirSerbia = new Airport();

    BelgradeParis.addPassenger(JohnS);

    BelgradeNewYour.addPassenger(JohnS);
    BelgradeNewYour.addPassenger(Khaleesi);

    BarcelonaBelgrade.addPassenger(Tyrion);
    BarcelonaBelgrade.addPassenger(Cersei);

    NikolaTesla.addFlight(BelgradeParis);

    AirSerbia.addFlight(BelgradeNewYour);
    AirSerbia.addFlight(BarcelonaBelgrade);


    createPassenger

    // console.log(BelgradeNewYour.getData());
    console.log(AirSerbia.getData());
})();