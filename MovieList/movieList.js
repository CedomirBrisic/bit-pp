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

    var NewMovie = new Movie(title, genre, length);

    movieList.push(NewMovie)
    var i = movieList.length - 1;
    for (i; i < movieList.length; i++) {
        var newEl = document.createElement("li");
        var content = document.createTextNode(movieList[i].getData());
        var listaFilmova = document.querySelector(".listaFilmova");
        newEl.appendChild(content);
        listaFilmova.appendChild(newEl);

        var movieListTitle = (movieList[i].title).toString();
        var newElDropdown = document.createElement("option");
        newElDropdown.setAttribute("value", movieListTitle);
        newElDropdown.setAttribute("class", "selectedMovies");
        var dropdownItem = document.createTextNode(movieListTitle);
        var listaFilmovaProgram = document.querySelector(".listaFilmovaProgram");
        listaFilmovaProgram.appendChild(newElDropdown);
        newElDropdown.appendChild(dropdownItem);
    }
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numberOfMovies = 0;
}

Program.prototype.addMovie = function (movieO) {
    this.listOfMovies.push(movieO);
    this.numberOfMovies++;
};

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
    var date = document.querySelector("#programDate").value;

    var NewProgram = new Program(date);

    var newEl = document.createElement("li");
    var newElSelect = document.createElement("option");
    var content1 = document.createTextNode(NewProgram.getData());
    var content2 = document.createTextNode(NewProgram.getData());
    var listaPrograma = document.querySelector(".listaPrograma");
    var listaProgramaSelect = document.querySelector(".listaProgramaSelect")
    newEl.appendChild(content1);
    listaPrograma.appendChild(newEl);
    newElSelect.appendChild(content2);
    listaProgramaSelect.appendChild(newElSelect);
}

// function AddMovieToProgram(movie,program){
//     var movie = document.
// }

