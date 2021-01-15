let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
console.log(personalMovieDB.actors.hero);
let lastMovie = prompt("Один из последних просмотренных фильмов?"),
    number = prompt("Оцените его"),
    lastMovie2 = prompt("Один из последних просмотренных фильмов?"),
    number2 = prompt("Оцените его");

personalMovieDB.movies[lastMovie] = number;
personalMovieDB.movies[lastMovie2] = number2;





