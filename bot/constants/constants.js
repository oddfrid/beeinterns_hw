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
