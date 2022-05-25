let numberOfFilms = prompt("How many films did you watch?")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


let filmName = prompt("One of last films?");
let filmRate = prompt("How match do you rate it?")
personalMovieDB .movies[filmName] =  filmRate;
filmName = prompt("One of last films?");
filmRate = prompt("How match do you rate it?")
personalMovieDB .movies[filmName] =  filmRate;