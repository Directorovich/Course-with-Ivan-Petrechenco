/*
'use strict';
document.addEventListener('DOMContentLoaded', () => {
    let numberOfFilms;


    const personalMovieDB = {
        count: numberOfFilms,
        movies: {
            one: 'first',
            two: 'second',
            three: 'third'
        },
        actors: {},
        genres: [],
        private: false,

        start: function () {
            numberOfFilms = +prompt("How many films did you watch?")

            while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
                numberOfFilms = +prompt("How many films did you watch?")
            }
            personalMovieDB.count = numberOfFilms;
        },
        rememberMyFilms: function () {
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
        },
        detectPersonalLevel: function () {
            if (personalMovieDB.count < 10) {
                console.log('You have seen very few films');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('You are classic viewer');
            } else if (personalMovieDB.count >=30) {
                console.log('You are a movie buff');
            } else {
                console.log('error');
            }
        },
        showMyDB: function () {
            if (!personalMovieDB.private){
                console.log(personalMovieDB);
            } else {
                console.log('This DB is private')
            }
        },
        writeYourGenres: function () {
            for (let i = 1; i <= 3; i++) {
                let filmName = '';
                while (filmName == '' || filmName == null) {
                    filmName = prompt(`Your favorite film number ${i}`);
                    personalMovieDB.genres[i - 1] = filmName;
                }
            }
            this.genres.forEach((g, i) => {
                console.log(`Любимый жанр ${i+1} - это ${g}`);
            });
        },
        toggleVisibleMyDB: function () {
            if (this.private) {
                this.private = false;
            } else {
                this.private = true;
            }
        }
    };

    personalMovieDB.writeYourGenres();
})
*/
'use strict';
let start = new Date();

for (let i = 1; i<100; i++) {
    let counter = i ** 10000000000;
}

let end = new Date();

alert (end - start);