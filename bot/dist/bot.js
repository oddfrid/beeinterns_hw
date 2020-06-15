'use strict';

var _constants = require('../constants/constants.js');

// const inputElem = $('#inp');
// const btnElem = $('#btn');
// const contentElem = $('#content')

/* Disabled if input is empty */
_constants.inputElem.on('input', function () {
  var inputValue = $('#inp').val().trim();
  if (inputValue !== '') {
    _constants.btnElem.removeAttr('disabled');
  } else {
    _constants.btnElem.attr('disabled', true);
  }
});
/* * * * */

/* Bot's commands*/
//                           TODO                              //

//? 1. Написать тесты для каждой комманды
//? 2. Написать скрипт для получения погоды с сайта
//? 3. Написать функции для создания элементов contentElem.prepend($(`...`));
//? 4. Заново  верстать и стилизовать???

////////////////////////////////////////////////////////////////////
var status = {
  isStarted: 0,
  numArray: [],
  arrAdded: false
};

var allowedCommandsReg = [/^\/start$/, /^\/name:\s*[a-zA-Z]+$/, /^\/number:\s*\d+,\s*\d+$/, /^\+$/, /^\-$/, /^\*$/, /^\/$/, /^\/stop$/, /^\/weather$/];

var checkValidation = function checkValidation(inputValue) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = allowedCommandsReg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var commandReg = _step.value;

      if (commandReg.test(inputValue)) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var reportError = function reportError(value) {
  if (status.isStarted) {
    if (value === 'secondIsNull') {
      _constants.contentElem.prepend($('<div>\u041D\u0430 \u043D\u043E\u043B\u044C \u0434\u0435\u043B\u0438\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F! \u0412\u044B\u0431\u0435\u0440\u0438 \u0438 \u0432\u0432\u0435\u0434\u0438 \u0434\u0440\u0443\u0433\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438 \u0438 \u0432\u0432\u0435\u0434\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0447\u0438\u0441\u043B\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u044B <code>/number: <i>\u0447\u0438\u0441\u043B\u043E1</i>, <i>\u0447\u0438\u0441\u043B\u043E2</i></code></div>'));
    }
  } else {
    _constants.contentElem.prepend($('<div>' + value + '</div>\n                            <div>\u042F \u043D\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u044E, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443!</div>'));
  }
};

var doWork = function doWork(inputValue) {
  if (/^\/name/.test(inputValue)) {
    var name = inputValue.replace(/\/name\s*:/g, '');
    _constants.contentElem.prepend($('<div>/name</div>\n                          <div>\u041F\u0440\u0438\u0432\u0435\u0442 ' + name + ', \u043F\u0440\u0438\u044F\u0442\u043D\u043E \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u0441\u044F. \u042F \u0443\u043C\u0435\u044E \u0441\u0447\u0438\u0442\u0430\u0442\u044C, \u0432\u0432\u0435\u0434\u0438 \u0447\u0438\u0441\u043B\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0434\u043E \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u0442\u044C</div>'));
  } else if (/^\/number/.test(inputValue)) {
    _constants.contentElem.prepend($('<div>' + inputValue + '</div>'));
    var numArr = inputValue.replace(/\/number\s*:/g, '').split(',');
    status.numArray = numArr;
    status.arrAdded = true;
    _constants.contentElem.prepend($('<div>\u0412\u044B\u0431\u0435\u0440\u0438 \u0438 \u0432\u0432\u0435\u0434\u0438 \u043E\u0434\u043D\u043E \u0438\u0437 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439:  -, +, *, /</div>'));
  } else if (/^[\/\+\-\*]$/.test(inputValue) && status.arrAdded) {
    var operationValue = inputValue;
    var firstNumValue = +status.numArray[0];
    var secondNumValue = +status.numArray[1];
    if (secondNumValue === 0 && operationValue === "/") {
      reportError('secondIsNull');
    } else {
      status.arrAdded = false;
      if (operationValue === "+") {
        result = firstNumValue + secondNumValue;
      } else if (operationValue === "-") {
        result = firstNumValue - secondNumValue;
      } else if (operationValue === "*") {
        result = firstNumValue * secondNumValue;
      } else if (operationValue === "/") {
        result = firstNumValue / secondNumValue;
      }
      _constants.contentElem.prepend($('<div>' + result + '</div>'));
    }
  } else if (/^\/weather/.test(inputValue)) {
    _constants.contentElem.prepend($('<div>/weather</div>\n                              <div><img src="http://www.pogoda.msk.ru/tomorow.php3?st=5&t=9"  alt="\u041F\u043E\u0433\u043E\u0434\u0430 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 - \u043F\u0440\u043E\u0433\u043D\u043E\u0437 \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F"></div>'));
  } else if (/^\/stop/.test(inputValue)) {
    status.isStarted = 0;
  }
};

_constants.btnElem.on('click', function (e) {
  e.preventDefault();
  var inputValue = $('#inp').val().trim();
  if (checkValidation(inputValue)) {
    if (inputValue === '/start' && status.isStarted === 0) {
      status.isStarted = 1;
      _constants.contentElem.prepend($('<div>/start</div>\n                              <div>\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 \u0427\u0430\u0442-\u0431\u043E\u0442, \u0430 \u043A\u0430\u043A \u0437\u043E\u0432\u0443\u0442 \u0442\u0435\u0431\u044F?</div>'));
    } else if (status.isStarted === 0) {
      _constants.contentElem.prepend($('<div>' + inputValue + '</div>\n                              <div>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 /start, \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0431\u0449\u0435\u043D\u0438\u044F</div>'));
    } else {
      doWork(inputValue);
    }
  } else {
    reportError(inputValue);
  }
});
/* * * * */