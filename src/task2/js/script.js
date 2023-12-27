// Создание объекта book со свойствами title, author и year
let book = {
    title: "Название_Книги",
    author: "Автор_Книги",
    year: 2017,
    publisher: {
        name: "Издательство",
        location: "Местоположение_Издательства"
    }
};

// Вывод инфы о книге в консоль
console.log("Название книги:", book.title);
console.log("Автор книги:", book.author);
console.log("Год издания:", book.year);
console.log("Издательство:", book.publisher.name);
console.log("Местоположение издательства:", book.publisher.location);
