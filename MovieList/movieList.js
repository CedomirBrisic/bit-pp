function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}
Movie.prototype.getData = function () {
    return this.title + ', ' + this.genre + ", " + this.length + " min";
}

var movieList = [];

function createMovie() {
    var title = document.querySelector("#movieTitle").value;
    var genre = document.querySelector("#movieGenre").value;
    var length = document.querySelector("#movieLength").value;

    var movie = new Movie(title, genre, length);

    movieList.push(movie)
    var i = movieList.length-1;
    for (i; i < movieList.length; i++) {
        var newEl = document.createElement("li");
        var content = document.createTextNode(movieList[i].getData())
        var listaFilmova = document.querySelector("ul");
        newEl.appendChild(content)
        listaFilmova.appendChild(newEl);

    }

    console.table(movie);
    console.log(movieList);
}
function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numberOfMovies = 0;
}
Program.prototype.getData = function () {
    var totalLength = 0;
    var output = "";
    this.listOfMovies.forEach(function (element) {
        totalLength += element.movieLength;
        output += "\t\t" + element.getData() + "\n";
    });
    var firstRow = "\t" + this.date + ", " + totalLength + " min \n";
    return firstRow + output;
};
function createProgram() {
    var dateP = new Date(document.querySelector('#programDate').value);
    var program= new Program(dateP);
    var newEl = document.createElement("li");
    var content = document.createTextNode(movieList[i].getData())
    var listaFilmova = document.querySelector("ul");
    newEl.appendChild(content)
    listaFilmova.appendChild(newEl);
}
