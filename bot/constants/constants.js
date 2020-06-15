/* Elements of page */

export const inputElem = $('#inp');
export const btnElem = $('#btn');
export const contentElem = $('#content')

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

