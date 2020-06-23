import { testValidDivNullValues, testNonValidDivNullValues } from '../constants/constants.js'
const chai = require('chai');
let expect = chai.expect;

describe('Бот выводит сообщение об ошибке только при делении на 0', () => {
  
  beforeAll(() =>{
    browser.url('http://127.0.0.1:5500/');
    setTimeout (()=>{console.log('j')}, 10000);
  })
  
  testValidDivNullValues.forEach((value) => {
    it('Второе число НЕ ноль, сообщение об ошибке не выводится', () => {
      $('input[id="inp"]').setValue(value);
      $('button[id="btn"]').click();
      $('input[id="inp"]').setValue('/');
      $('button[id="btn"]').click();
      expect(($$('div[id ="content"]')[0].getText()).to.not.include('<div>На ноль делить нельзя! Выбери и введи другое действие или выбери и введи другие числа с помощью команды <code>/number: <i>число1</i>, <i>число2</i></code></div>'));
    });
  });
  testNonValidDivNullValues.forEach((value) => {  
    it('Второе число ноль, сообщение об ошибке выводится', () => {
      $('input[id="inp"]').setValue(value);
      $('button[id="btn"]').click();
      $('input[id="inp"]').setValue('/');
      $('button[id="btn"]').click();
      expect(($$('div[id ="content"]')[0].getText()).to.include('<div>На ноль делить нельзя! Выбери и введи другое действие или выбери и введи другие числа с помощью команды <code>/number: <i>число1</i>, <i>число2</i></code></div>'));
    });
  });
});