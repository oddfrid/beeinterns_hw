/* Elements of page */

export const inputElem = $('#inp');
export const btnElem = $('#btn');
export const contentElem = $('#content');
export const dottedLineElem = $('#dotted-line');
export const mainWrapElem = $('.main-wrap');
// valid command, but start is not used yet == 0
// start == 1
// name == 2
// number == 3
// operation == 4
// weather == 5
// stop == 6
// errDivNull == 7
// errcommand == 8

export const userRequest = {
  beginningOfMsg : `<li class="main__message">
  <div class="main__message-img"><img src="./img/avatar-user.svg" alt=""></div>
  <div class="main__message-text-wrap user">
      <p class="main__message-text">`,
  endOfMsg : `</p>
          </div>
          </li>`,
  getValue(...args) {
    return ($(`${this.beginningOfMsg}${args[0]}${this.endOfMsg}`))
  }
}

export const botAnswers = {
  beginningOfMsg : `<li class="main__message">
  <div class="main__message-img"><img src="./img/avatar-bot.svg" alt=""></div>
  <div class="main__message-text-wrap bot">
      <p class="main__message-text bot">`,
  endOfMsg : `</p>
          </div>
          </li>`,
  getValue(...args){
    if (args[0] === 0) {
      return ($(`${this.beginningOfMsg}Введите команду /start, для начала общения${this.endOfMsg}`))
    } else if (args[0] === 1) {
      return ($(`${this.beginningOfMsg}Привет, меня зовут Чат-бот, а как зовут тебя?${this.endOfMsg}`))
    } else if (args[0] === 2) {
      return ($(`${this.beginningOfMsg}Привет ${args[1]}, приятно познакомится. Я умею считать, введи числа которые надо посчитать${this.endOfMsg}`))
    } else if (args[0] === 3) {
      return ($(`${this.beginningOfMsg}Выбери и введи одно из следующих действий:  -, +, *, /${this.endOfMsg}`))
    } else if (args[0] === 4) {
      return ($(`${this.beginningOfMsg} ${args[1]} ${this.endOfMsg}`))
    } else if (args[0] === 5) {
      return ($(`${this.beginningOfMsg}<img src="http://www.pogoda.msk.ru/tomorow.php3?st=5&t=9"  alt="Погода в Москве - прогноз на завтра">${this.endOfMsg}`))
    } else if (args[0] === 6) {
      return ($(`${this.beginningOfMsg}Всего доброго, если хочешь поговорить пиши /start${this.endOfMsg}`))
    } else if (args[0] === 7) {
      return ($(`${this.beginningOfMsg}На ноль делить нельзя! Выбери и введи другое действие или выбери и введи другие числа с помощью команды <code>/number: <i>число1</i>, <i>число2</i></code>${this.endOfMsg}`))
    } else if (args[0] === 8) {
      return ($(`${this.beginningOfMsg}Я не понимаю, введите другую команду!${this.endOfMsg}`))
    }
  }
}

//? Tests constants ?//
/* Values for testBtn*/

export const testValidBtnValues = [
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
export const testNonValidBtnValues = [
  '',
  '             ',
  '    ',
]

/* Values for testValidation*/

export const testValidValidationValues = {

  start: ['/start', '   /start', '/start   ', '   /start   '],
  name: ['/name: Alex', '   /name:Alex', '/name:  Alex   ', '    /name:Alex   '],
  number: ['/number: 12, 5', '/number:    10,   0  ', '/number:0,777', '   /number:  0,   2', '  /number: 11, 11  '],
  options: ['+', '-', '*', '/',
             ' +', ' -', ' *', ' /', 
              '+ ', '- ', '* ', '/ ', 
             ' + ', ' - ', ' * ', ' / '],
  weather : ['/weather ', '  /weather ', '/weather    ', '   /weather   '],
  stop:['/stop', '  /stop', '/stop  ', '   /stop   '],
}
export const testNonValidValidationValues = {

  start: ['/ start', 'f/start', '2/start', ' \  /start   ', '/startstart', '/star', '/start:'],
  name: ['/name', '/name:', '/name:  42', '/name: ...', '/name: Алекс', '/ name:Alex', '/name: Alex Alex'],
  number: ['/number', '/number:  ', '/ number', '/number: ,  ', '/number: , 11 ', '/number:  11,  ',
          '/number: da, 11', '/number: 14, 11, 16', '/number: 14  11'],
  options: ['++', '--', '**', '//',
            '+-', '-5', '*/', 'd/', 
            'g', '8', '%', '$', '.'],
  weather : ['/ weather ', 'f/weather ', '2/weather ', './weather ', '/weath', '/weather:'],
  stop:['/ stop', 'f/stop', '2/stop', './stop', '/st', '/stop:'],
}
/* Values for testDivNull*/
export const testValidDivNullValues = [
  '/number: 12, 5',
  '/number: 0, 5',
  '/number: 3, 5',
]
export const testNonValidDivNullValues = [
  '/number: 0, 0',
  '/number: 12, 0',
]

