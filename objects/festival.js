function Genre(name) {
    this.name = name;
    this.getData = function () {

        return (name.charAt(0) + name.charAt(name.length - 1)).toUpperCase();


    };
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

    this.getData = function () {
        return (this.title + ", " + this.length + "min, " + this.genre.getData());
    };

}

function Program(date) {
    this.date = date;
    this.listOfMovies = [] ;
    this.numberOfMovies = 0;
    this.addMovie = function (movie){
        this.listOfMovies.push(movie);
    }
    }

function Festival(name) {
    this.name = name;
    this.listOfMovies = [];
    this.numberOfMovies = 0;

}

var action = new Genre("action");
var drama = new Genre("drama");
var comedy = new Genre("comedy");

var lastBoyScout = new Movie("Last Boy Scout", action, 90);
console.log(lastBoyScout.getData());