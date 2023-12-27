// Создание объекта student со свойствами name, age и grade
let student = {
    name: "Имя_Студента",
    age: 27,
    grade: 12
};

// Изменяем свойство grade объекта student
student.grade = 13;

// Добавляем новое свойство course к объекту student
student.course = "JavaScript";

// Вывод инфы о студенте в консоль
console.log("Имя:", student.name);
console.log("Возраст:", student.age);
console.log("Оценка:", student.grade);
console.log("Курс:", student.course);
