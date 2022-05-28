/*
'use strict';
let numberOfFilms;


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

start();
detectPersonalLevel();
showMyDB ();
writeYourGenres();

function start () {
    numberOfFilms = +prompt("How many films did you watch?")

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films did you watch?")
    }
    personalMovieDB.count = numberOfFilms;
    rememberMyFilms();
}
function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        let filmName = prompt("One of last films?");
        let filmRate = prompt("How match do you rate it?")
        if (filmName != null && filmRate != null && filmName != '' && filmRate != '' && filmName.length < 50) {
            personalMovieDB .movies[filmName] =  filmRate;
            console.log('Done!');
        } else {
            console.log('error');
            i--;
        }
    }
}
function  detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('You have seen very few films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are classic viewer');
    } else if (personalMovieDB.count >=30) {
        console.log('You are a movie buff');
    } else {
        console.log('error');
    }
}
function showMyDB () {
    if (!personalMovieDB.private){
        console.log(personalMovieDB);
    } else {
        console.log('This DB is private')
    }
}
function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite film number ${i}`);
    }
}

//console.log(personalMovieDB);
*/



