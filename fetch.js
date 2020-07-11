const serviceAvailableURL = '/serviceavailable/'
const getInfoURL = '/getinfo/'
const getDescriptionURL = '/getdescription/'

const textField = document.querySelector('.answer')

let i = 0

const createAnswr = (text) => {
  const node = document.createElement("p");
  node.innerText = text; 
  textField.appendChild(node);
}

const doReqAnsw = (url) => fetch(url).then(response => response.json()).then(data => createAnswr(JSON.stringify(data.text))).catch(() => i++)

const doRequests = async () => {
    await Promise.all([doReqAnsw(getInfoURL), doReqAnsw(getDescriptionURL)])
    if (i === 2) {
      console.log('Server Error');
    }
    i = 0
}

const sendRequest = () => {
  fetch(serviceAvailableURL)
    .then(response => response.json())
    .then(data => data.isSucceeded === true ? doRequests() : createAnswr("Произошла ошибка"))
    .catch(err => console.log(err))
    textField.innerHTML = ''
}