const btn = document.querySelector("#btn");
const numField = document.querySelector("#numField");
const frame = window.frames.frame;

const addOne = (num) => num + 1;

const addNumber = () => {
    let numValue = window.prompt('Введите число', '');
    if (/^([+-]?\d+(\d*|\.\d*))$/.test(numValue.trim())) {
      frame.document.querySelector("#frameNumField").innerHTML = +numValue;      
      numField.innerHTML = addOne(+frame.document.querySelector("#frameNumField").innerHTML);
    } else {
      window.alert('Введите число!');
    }
}
window.onbeforeunload =  () => '';
window.frames.frame.onbeforeunload = () => {debugger};
btn.onclick = addNumber;