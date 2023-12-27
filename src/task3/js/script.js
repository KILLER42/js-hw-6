// Создание объекта movie со свойствами title, director, year и genre
let movie = {
    title: "Название_Фильма",
    director: "Режиссер_Фильма",
    year: 2027,
    genre: "Жанр_Фильма"
};

// Используем цикл for...in для вывода названий и значений свойств объекта movie
for (let key in movie) {
    console.log(key + ": " + movie[key]);
}
