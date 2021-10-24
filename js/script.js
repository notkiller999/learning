"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели', '');
    }
}

start();

const personalMovieDB =
{
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





function rememberMyFilms() {
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
}
rememberMyFilms();

const countOfFilms = personalMovieDB.count;

function detectPersonalLevel() {

    if (countOfFilms < 10 && countOfFilms != 0) {
    alert('Просмотренно довольно мало фильмов');
}
else if (countOfFilms >= 10 && countOfFilms < 30) {
    alert('Вы классический зритель');
}
else if (countOfFilms >= 30) {
    alert('Вы киноман!');
}
else {
    alert('Произошла ошибка');
}

}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    else {
        console.log('Приватно!');
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}
writeYourGenres();
