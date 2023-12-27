// Создаем массив animals с объектами, содержащими свойства type и name
let animals = [
    { type: "Кошка", name: "Мурка" },
    { type: "Собака", name: "Арни" },
    { type: "Хомяк", name: "Вася" }
];

// Добавляем новый объект к массиву animals
let newAnimal = { type: "Пингвин", name: "Жора" };
animals.push(newAnimal);

// Выводим информацию о животных в консоль
for (let animal of animals) {
    console.log("Тип:", animal.type, "Имя:", animal.name);
}
