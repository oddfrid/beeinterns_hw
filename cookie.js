const form = document.querySelector("#form");

const setCookie = (cookieName, cookieValue, exdays) => {
  const date = new Date();
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
};

const putCookies = () => {
  const cookiesArr = document.cookie.split("; ");

  cookiesArr.forEach((cookiesArrElem) => {
    const [key, value] = cookiesArrElem.split("=");
    const elem = document.getElementById(key);
    if (elem) {
      if (key.includes("course") && +value) {
        elem.checked = "true";
      } else {
        elem.value = value;
      }
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const objectData = Object.fromEntries(formData.entries());
  const checkboxes = document.getElementsByClassName("checkbox");

  Object.keys(objectData).forEach((key) => {
    setCookie(key, objectData[key], 365);
  });
  Array.from(checkboxes).forEach((elem) => {
    if (elem.checked) {
      setCookie(elem.id, "1", 365);
    } else {
      setCookie(elem.id, "0", 365);
    }
  });
});

putCookies();
