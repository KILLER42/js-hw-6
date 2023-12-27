// Создаем обьект person1
let person1 = {
    name: "Alexander",
    age: 20,
    city: "Odessa"
};

// Создаем объект person2 с теми же свойствами, что и у person1
let person2 = {
    name: "Dmitriy",
    age: 20,
    city: "Kyiv"
};

// Функция для сравнения объектов по структуре
function areObjectsEqual(obj1, obj2) {
    // Получаем ключи объектов
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // Сравниваем количество ключей
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Сравниваем значения по каждому ключу
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // Если все ключи и значения одинаковы, объекты считаются равными
    return true;
}

// Сравниваем объекты person1 и person2
let isEqual = areObjectsEqual(person1, person2);

// Выводим результат сравнения в консоль
console.log("Объекты person1 и person2 одинаковы по структуре:", isEqual);
