"use strict";



const personalMovieDB =
{
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели', '');

            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                
                personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели', '');
            }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних посмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            }
            else {
                i--;
            }
        }
    },

    detectPersonalLevel: function () {

        if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
            alert('Просмотренно довольно мало фильмов');
        }
        else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        }
        else if (personalMovieDB.count >= 30) {
            alert('Вы киноман!');
        }
        else {
            alert('Произошла ошибка');
        }

    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
        else {
            console.log('Приватно!');
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 1; i++) {
            const genre = prompt(`Введите ваши любимые жанры через запятую`);
            if (genre != null && genre != '') {
                personalMovieDB.genres = genre.split(', ');
            }
            
            else {
                i--;
            }
            
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр №${i + 1} - это ${item}`);
        });

    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    }

};
personalMovieDB. writeYourGenres();

