const house = 'cottage';

const men = {
  name: "Piter",
  age: 40,
  isCitizen: true,
  "have car": true,
  [5 + '4']: 'success',
  children: {
    daughter: 'Mery',
    firstSon: 'Stephen'
  },
  house,

  eating: function(dish) {
    if (dish) {
      console.log('17: ', dish);
      return;
    }

    console.log('21: I`m angry!');
  },

  working: () => 'hard',

  hi() { console.log('26: ', this.name); },

  get childrenNames() {
    return Object.values(this.children).join(', ');
  },

  set newChildrens(value = {}) {
    this.children = {
      ...this.children,
      ...value,
    };
  },

  wife: {
    name: 'Kate',
    phone: '8-903-909-99-99',
  }
};
console.log('44: ', men);
// ------------Область видимости функций
let test = 'zero';

function testing() {
  let test = 'one';
  test += ' two';

  let rest = 'vocation';
}

function testingTwo() {
  test += ' three';
}

testing();
testingTwo();
console.log('61: ', test);
// console.log('62: ', rest);


// ------------ This объекта
let newMenHi = men.hi;
// разделим получение метода объекта и его вызов в разных строках
newMenHi(); // undefined, this - Теряется
men.hi(); // "Piter", this - корректно используется

// Потеря this

setTimeout(men.hi, 1000); // Привет, undefined!
// Так как метод передан в кач-ве отдельной функции-коллбэка и потом вызван в отдельном контексте


// ------------ Замыкание
// Пример 1
function person(newName = 'Peter') {  
  const upperName = newName.toUpperCase();

  return function displayName() {
    console.log('83: ', upperName);
  };
}
let newPerson = person('Dmitry');

console.log('88: ', newPerson());

// Пример 2
function getCounter() {
  let counter = 0;

  return function() {
    return counter++;
  };
};
let count = getCounter(); // Замыкаем начальное значение counter в области видимости ф-ции getCounter()
console.log('99: ', count());  // 0
console.log('100: ', count());  // 1
console.log('101: ', count());  // 2

// ------------ Свойства - геттеры и сеттеры
let obj = {
  get property() {
    // геттер, срабатывает при чтении obj.property
  },

  set property(value) {
    // сеттер, срабатывает при записи obj.property = value
  }
};

console.log('114: ', men.childrenNames);

men.newChildrens = { secondSon: 'Henry' };
console.log('117: ', men.children);

// ------------ Дескрипторы свойств доступа

Object.defineProperty(men, 'wifesContacts', {
  get() {
    return `${this.wife.name}:${this.wife.phone}`;
  },

  set(value) {
    [this.wife.name, this.wife.phone] = value.split(":");
    console.log('128: ', this);
  }
});

men.wifesContacts = 'Nancy:8-905-555-50-50';

console.log('134: ', men.wifesContacts);
console.log('135: ', men.wife.name);


// ------------  Прототипное наследование объектов
let animal = {
  eats: true
};
let kangaroo = {
  jumps: true
};

kangaroo.__proto__ = animal;
console.log('147: ', kangaroo.eats); // true
console.log('148: ', kangaroo.jumps); // true

// длинная цепь прототипов
let newAnimal = {
  eats: true,
  walk() {
    console.log("154: Animal walk");
  }
};

let rabbit = {
  jumps: true,
};
Object.setPrototypeOf(rabbit, newAnimal) 

const longEar = Object.create(rabbit, { earLength: { value: 10, writable: false }});

// walk взят из цепочки прототипов
longEar.walk(); // Animal walk
console.log('167: ', longEar.jumps); // true (из rabbit)


// конструктор-свойство
var o = {};
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true

// ------------ Рекурсия:
const cart = {
  fruits: [{ name: 'apple', cost: 50 }, { name: 'orange', cost: 60 }],
  products: {
    vegetables: [{ name: 'potato', cost: 30 }, { name: 'carrot', cost: 40 }],
    meat: [{ name: 'chicken', cost: 100 }]
  }
};

// Рекурсивная функция определения общей стоимости
function totalCost(cart) {
  if (Array.isArray(cart)) {
    return cart.reduce((prev, cur) => prev + cur.cost, 0);
  } else { 
    let sum = 0;
    for (let value of Object.values(cart)) {
      sum += totalCost(value); // рекурсия
    }
    return sum;
  }
}

console.log('202: ', totalCost(cart));
