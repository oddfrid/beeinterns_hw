// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
  'one': 'number',
};

function resolve1(object) {
  const newObj = {};
  newObj['number'] = 'one';
  return newObj;
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
  const arrays = Object.entries(inputObject);
  for (let array in arrays){
      [arrays[array][0], arrays[array][1]] = [arrays[array][1], arrays[array][0]];
  }
  return(Object.fromEntries(arrays));
};

const result2 = resolve2(secondObject);
console.log(secondObject); 
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }

console.log(result2);
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }


// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math

const centuryFromYear = ( value ) => {
  return (value % 100 > 0) ? Math.floor(value/100 + 1) : value/100;
}

const year = 1905;
console.log(centuryFromYear(year)); // 20

const year2 = 1700;
console.log(centuryFromYear(year2)); // 17.

