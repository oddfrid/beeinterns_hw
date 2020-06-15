//                           TODO                              //

//? 1. Написать тесты для каждой комманды
//? 2. Написать скрипт для получения погоды с сайта
//? 3. Написать функции для создания элементов contentElem.prepend($(`...`));
//? 4. Заново  верстать и стилизовать???

////////////////////////////////////////////////////////////////////
import { inputElem, btnElem, contentElem } from '../constants/constants.js'
// const inputElem = $('#inp');
// const btnElem = $('#btn');
// const contentElem = $('#content')

/* Disabled if input is empty */
inputElem.on('input', () => {
  let inputValue = ($('#inp').val()).trim();
  if (inputValue !== '') {
    btnElem.removeAttr('disabled');
  } else {
    btnElem.attr('disabled', true);
  }
})
/* * * * */

/* Bot's commands*/ 
const status = {
  isStarted: 0,
  numArray: [],
  arrAdded: false,
}

const allowedCommandsReg = [
  /^\/start$/,
  /^\/name:\s*[a-zA-Z]+$/,
  /^\/number:\s*\d+,\s*\d+$/,
  /^\+$/,
  /^\-$/,
  /^\*$/,
  /^\/$/,
  /^\/stop$/,
  /^\/weather$/,
]

const checkValidation = inputValue => { 
  for (const commandReg of allowedCommandsReg) {
      if (commandReg.test(inputValue)) {
        return true;
      }
    }
}

const reportError = value => {
    if (status.isStarted){
      if (value === 'secondIsNull') {
        contentElem.prepend($(`<div>На ноль делить нельзя! Выбери и введи другое действие или выбери и введи другие числа с помощью команды <code>/number: <i>число1</i>, <i>число2</i></code></div>`));
      }
    }
    else {
      contentElem.prepend($(`<div>${value}</div>
                            <div>Я не понимаю, введите другую команду!</div>`));
    }
}

const doWork = inputValue => {
  if (/^\/name/.test(inputValue)) {
    const name = inputValue.replace(/\/name\s*:/g, '');
    contentElem.prepend($(`<div>/name</div>
                          <div>Привет ${name}, приятно познакомится. Я умею считать, введи числа которые надо посчитать</div>`))
  } else if (/^\/number/.test(inputValue)) {
    contentElem.prepend($(`<div>${inputValue}</div>`));
    const numArr = (inputValue.replace(/\/number\s*:/g, '')).split(',');
    status.numArray = numArr
    status.arrAdded = true;
    contentElem.prepend($(`<div>Выбери и введи одно из следующих действий:  -, +, *, /</div>`));
  } else if (/^[\/\+\-\*]$/.test(inputValue) && status.arrAdded){
    const operationValue = inputValue;
    const firstNumValue = +status.numArray[0];
    const secondNumValue = +status.numArray[1];
    if (secondNumValue === 0 && operationValue === "/") {
      reportError('secondIsNull');
    } else {
        status.arrAdded = false;   
        if (operationValue === "+") {
          result = firstNumValue + secondNumValue
        } else if (operationValue === "-") {
          result = firstNumValue - secondNumValue
        } else if (operationValue === "*") {
          result = firstNumValue * secondNumValue
        } else if (operationValue === "/") {
          result = firstNumValue / secondNumValue
        }
        contentElem.prepend($(`<div>${result}</div>`))
      }
    } else if (/^\/weather/.test(inputValue)) {
      contentElem.prepend($(`<div>/weather</div>
                              <div><img src="http://www.pogoda.msk.ru/tomorow.php3?st=5&t=9"  alt="Погода в Москве - прогноз на сегодня"></div>`));
    } else if (/^\/stop/.test(inputValue)) {
      status.isStarted = 0;
    }
  }

btnElem.on('click', (e) => {
  e.preventDefault();
  const inputValue = ($('#inp').val()).trim();  
  if (checkValidation(inputValue)) {
    if (inputValue === '/start' && status.isStarted === 0) {
      status.isStarted = 1;
      contentElem.prepend($(`<div>/start</div>
                              <div>Привет, меня зовут Чат-бот, а как зовут тебя?</div>`))
    } else if (status.isStarted === 0) {
      contentElem.prepend($(`<div>${inputValue}</div>
                              <div>Введите команду /start, для начала общения</div>`))
    } else {
      doWork(inputValue);
    }
  }
  else {
    reportError(inputValue);
  }
});
/* * * * */
