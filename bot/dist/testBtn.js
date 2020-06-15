'use strict';

var _constants = require('../constants/constants.js');

var chai = require('chai');
var expect = chai.expect;

describe('При пустом поле ввода сообщения, кнопка «отправить» должна быть не активна. После ввода одного и более символов кнопка меняет свой цвет на желтый становясь кликабельной', function () {

  beforeAll(function () {
    browser.url('http://127.0.0.1:5500/');
    setTimeout(function () {
      console.log('j');
    }, 10000);
  });

  _constants.testValidBtnValues.forEach(function (value) {
    it('Вводятся символы, копка должна быть активной', function () {
      $('input[id="inp"]').setValue(value);
      $('button[id="btn"]').click();
      expect($$('div[id ="content"]')[0].getText().to.contains(value));
    });
  });
  // it('Символы не вводятся или вводятся пробелы, копка должна быть НЕактивной, () => {

  // });
});