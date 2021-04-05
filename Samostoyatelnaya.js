const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
количество: numberOfFilms,
фильмы: {},
действующие лица : {},
жанры: [],
Приват: ложь
};

для (Пусть i = 0; i < 2; i++) {

const a = prompt("Один из последних просмотренных фильмов?", ""),
b = prompt("На сколько его оцените?", "");

если (a != null && b != null && a != " && b != " && a.Длина < 50) {
personalMovieDB[a] = b;
} еще {
console.log('ошибка');
я...;
}

}

если (personalMovieDB.count < 10) {
console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
console.log("Вы киноман");
} еще {
console.log("Произошла ошибка");
}

console.log(personalMovieDB);
(){
numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
while(numberOfFilms == '' || numberOfFilms == null || isNaN (numberOfFilms)){
numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
}
}
();