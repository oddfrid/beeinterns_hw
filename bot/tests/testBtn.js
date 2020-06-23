// import {  testValidBtnValues, testNonValidBtnValues } from '../constants/constants.js'
const chai = require('chai');
let expect = chai.expect;

const testValidBtnValues = [
  'fqw',
  'v',
  '/name',
  '/start',
  'start',
  '...',
  '   /name',
  ' .   ',
  '/ ysop',
]
const testNonValidBtnValues = [
  '',
  '             ',
  '    ',
]

describe('При пустом поле ввода сообщения, кнопка «отправить» должна быть не активна. После ввода одного и более символов кнопка меняет свой цвет на желтый становясь кликабельной', () => {
  

    console.log('f')
    browser.url('http://127.0.0.1:5500/');

  testValidBtnValues.forEach((value) => {
    it('Вводятся символы, копка должна быть активной', () => {
      $('input[id="inp"]').setValue(value);
      $('button[id="btn"]').click();
      expect(($$('div[id ="content"]')[0].getText()).to.include(value));
    });
  });
  testNonValidBtnValues.forEach((value) => {  
    it('Символы не вводятся или вводятся пробелы, копка должна быть НЕактивной', () => {
      $('input[id="inp"]').setValue(value);
      expect(($('button[id="btn"]').isEnabled()));
    });
  });
});

