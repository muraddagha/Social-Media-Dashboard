let checkbox = document.querySelector(".switch");
let body = document.querySelector("body");
let box = document.querySelectorAll(".box");
let boxSmall = document.querySelectorAll(".box-small");

checkbox.addEventListener("click", function () {
  console.log("Salam");
  body.classList.toggle("dark-mode");
  checkbox.classList.toggle("switch-dark");
  box.forEach((elem) => {
    elem.classList.toggle("dark-mode-box");
  });
  boxSmall.forEach((elem) => {
    elem.classList.toggle("dark-mode-box");
  });
});
