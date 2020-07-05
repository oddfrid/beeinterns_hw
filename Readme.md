Нужно создать проект с названием "Homework-npm", в авторах указать себя и добавить поле запрещающее публиковать проект.
Установите последнюю версию пакета "ramda", также установите "date-fns" версии 1.30.1 и "nodemon" через ссылку на git репозиторий:
https://github.com/remy/nodemon.git

Создайте файл "index.js" с следующим содержимым:
// start
const differenceInCalendarDays = require('date-fns/difference_in_calendar_days');
const R = require('ramda');

const getMessage = R.ifElse(
  (days) => R.gt(days, 30),
  () => 'До конца курса ещё больше месяца',
  () => 'До конца курса осталось мало времени',
);

const now = new Date(Date.now());
const end = new Date(2020, 7, 17, 12);

const daysCount = differenceInCalendarDays(now, end);

console.log(getMessage(daysCount));
// end

Добавьте скрипт "start", который с помощью nodemon запустит данный файл.

Отправлять на почту с темой: "Лекция 32: ФИО"

P.S. Не забудьте, что в git не должна попасть папка с установленными модулями
