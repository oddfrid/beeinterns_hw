const form = document.querySelector("#form");

function putLocalStorage() {
  let storageData = localStorage.getItem("storageData");
  storageData = JSON.parse(storageData);

  Object.keys(storageData).forEach((key) => {
    const value = storageData[key];
    const elem = document.getElementById(key);
    if (elem) {
      if (key.includes("course") && value !== "false") {
        elem.checked = "true";
      } else {
        elem.value = value;
      }
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const objectData = Object.fromEntries(formData.entries());
  const checkboxes = document.getElementsByClassName("checkbox");
  const storageData = {};

  Object.keys(objectData).forEach((key) => {
    storageData[key] = objectData[key];
  });

  Array.from(checkboxes).forEach((elem) => {
    if (elem.checked) {
      storageData[elem.id] = "true";
    } else {
      storageData[elem.id] = "false";
    }
  });
  localStorage.setItem("storageData", JSON.stringify(storageData));
});

putLocalStorage();
