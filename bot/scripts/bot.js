//                           TODO                              //

//? 1. Написать тесты для каждой комманды
//? 2. Написать скрипт для получения погоды с сайта
//? 3. Написать функции для создания элементов contentElem.prepend($(`...`));

////////////////////////////////////////////////////////////////////
import { inputElem, dottedLineElem, btnElem, contentElem, userRequest, botAnswers, mainWrapElem } from '../constants/constants.js'

/* Disabled btn if input field is empty, else enabled btn + dots animation displaying*/
const inputValueExistCheck = () => {
  let inputValue = (inputElem.val()).trim();
  if (inputValue) {
    btnElem.removeAttr('disabled');
    dottedLineElem.removeClass('nodisplay')
  } else {
    btnElem.attr('disabled', true);
    dottedLineElem.addClass('nodisplay');
  }
}

inputElem.on('input', () => inputValueExistCheck());
/* * * * */

/* To empty input field */
const refreshInput = () => {
  inputElem.val('');
  inputValueExistCheck();
}
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
  for (let commandReg of allowedCommandsReg) {
      if (commandReg.test(inputValue)) {
        return true;
      }
    }
}

const reportError = value => {
    if (value === 'secondIsNull' && status.isStarted) {
        contentElem.prepend(botAnswers.getValue(7));
    } else {
      contentElem.prepend(userRequest.getValue(value));
      contentElem.prepend(botAnswers.getValue(8));
    }
}

const doWork = inputValue => {
  if (/^\/name/.test(inputValue)) {
    const name = inputValue.replace(/\/name\s*:/g, '');
    contentElem.prepend(userRequest.getValue(inputValue));
    contentElem.prepend(botAnswers.getValue(2, name));
  } else if (/^\/number/.test(inputValue)) {
    const numArr = (inputValue.replace(/\/number\s*:/g, '')).split(',');
    status.numArray = numArr
    status.arrAdded = true;
    contentElem.prepend(userRequest.getValue(inputValue));
    contentElem.prepend(botAnswers.getValue(3));
  } else if (/^[\/\+\-\*]$/.test(inputValue) && status.arrAdded){
      const operationValue = inputValue;
      const firstNumValue = +status.numArray[0];
      const secondNumValue = +status.numArray[1];
      if (secondNumValue === 0 && operationValue === "/") {
        reportError('secondIsNull');
      } else {
          status.arrAdded = false;   
          let result = 0
          if (operationValue === "+") {
            result = firstNumValue + secondNumValue
          } else if (operationValue === "-") {
            result = firstNumValue - secondNumValue
          } else if (operationValue === "*") {
            result = firstNumValue * secondNumValue
          } else if (operationValue === "/") {
            result = firstNumValue / secondNumValue
          }
          contentElem.prepend(userRequest.getValue(inputValue));
          contentElem.prepend(botAnswers.getValue(4, result));
        }
    } else if (/^\/weather/.test(inputValue)) {
      contentElem.prepend(userRequest.getValue(inputValue));
      contentElem.prepend(botAnswers.getValue(5));
    } else if (/^\/stop/.test(inputValue)) {
      contentElem.prepend(userRequest.getValue(inputValue));
      contentElem.prepend(botAnswers.getValue(6));
      status.isStarted = 0;
    }
  }

btnElem.on('click', (e) => {
  e.preventDefault();
  const inputValue = (inputElem.val()).trim();  
  if (checkValidation(inputValue)) {
    if (inputValue === '/start' && status.isStarted === 0) {
      status.isStarted = 1;
      contentElem.prepend(userRequest.getValue(inputValue));
      contentElem.prepend(botAnswers.getValue(1));
    } else if (status.isStarted === 0) {
      contentElem.prepend(userRequest.getValue(inputValue));
      contentElem.prepend(botAnswers.getValue(0));
    } else {
      doWork(inputValue);
    }
  }
  else {
    reportError(inputValue);
  }
  mainWrapElem.scrollTop(contentElem.height());
  refreshInput();
});
/* * * * */
