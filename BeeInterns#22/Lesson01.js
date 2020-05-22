// Общий обзор

const folder = new Object(); // "конструктор объекта"
const cupboard = {};  // "литерал объекта"

const house = 'cottage';

const men = {
  name: "Piter",
  age: 40,
  isCitizen: true,
  "have car": true,
  [5 + '4']: 'success',
  children: {
    daughter: 'Mery',
    son: 'Stephen'
  },
  house,
  eating: function(dish) {
    if (dish) {
      console.log(': ', dish);
      return;
    }

    console.log('25: I`m angry!');
  },
  working: () => 'hard',
};

console.log('30: ', men['have car']);
console.log('31: ', men['54']);
console.log('32: ', men.house);

men.name = "Piter";
men.name = "Andrey";
console.log('36: ', men.name);

Object.keys(men); // возвращает МАССИВ ключей
console.log('39: ', Object.keys(men));

Object.values(men); // возвращает МАССИВ значений
console.log('42: ', Object.values(men));

delete men.age;

// Хранение и копирование по ссылке
const message = 'Hello!';
const phrase = message;

console.log('50: ', message);
console.log('51: ', phrase);

const artist = { name: 'John', heigth: 205 };
const driver = { name: 'John', heigth: 205 };

// driver.name = 'Mary';
console.log('57: ', artist.name);
console.log('58: ', artist === driver);



// Функции
console.log('63: ', men.working());

console.log('65: ', men.working);

console.log('67: ',console);
console.log('68: ',console.log);

// Вызов функции
function newFunc(word) {
  return word;
};
console.log('74: ', newFunc);
console.log('75: ', newFunc('called'));

const superFunc = newFunc;

console.log('79: ', superFunc);
console.log('80: ', superFunc('called again'));

const megaFunc = (func) => func('is that magic?');

console.log('84: ', megaFunc(superFunc));

// Аргументы функции
function sum(one, two, ...args) {
  console.log('88:', arguments);
  console.log('89:', two);
};

console.log('92:', sum(1, 2, 3, 4, 5));

function count(one, two) {
  console.log('95:', arguments);
};
count(3, 9);

// Возврат из функции
const arrowFunc = () => 'text';

function declarationFunc() {
  let variable = 1;
  return variable;

  variable + 20;
};

console.log('109:', declarationFunc());

const testing = function() {
  let insideVar = 1 + 1;
  insideVar + 10;
};

console.log('116:', testing());

// Понятие callback
function ask(question, yes, no) {
  if (question) yes();
  else no();
};

ask(
  'Ты что-то ел?',
  () => console.log('126: Да, фрукты'),
  () => console.log('127: Нет, только пил'),
);

// Методы объектов
console.log;
men.eating('apple');
console.log('133: ', men.working());

men.sayHello = function() {
  console.log('Hello everyone!');
};

// Встроенные объекты, их методы и встроенные функции
console.log('140: ', global);

[].map(() => {});

[].forEach(() => {});

// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
  'one': 'number',
};

function resolve1(inputObject) {
 // body
};

const result1 = resolve1(firstObject);
console.log(result1); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }


// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
  'apple': 'fruit',
  'potato': 'vegetable',
  'strawberry': 'berry',
};

function resolve2(inputObject) {
 // body
};

const result2 = resolve2(secondObject);
console.log(result2); 
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }

console.log(secondObject);
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }


// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math

const year = 1905;
centuryFromYear(year); // 20

const year2 = 1700;
centuryFromYear(year); // 17.
