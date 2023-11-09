const dancing = document.getElementById("js--dancing");
const lato = document.getElementById("js--lato");
const merriweather = document.getElementById("js--merriweather");
const input = document.getElementById("js--input");
const toggle = document.getElementById("toggle");
const header = document.querySelector(".header");
const showCase = document.querySelector(".showCase");
const showCaseInput = document.querySelector(".showCase__input");
const showCaseFont = document.querySelectorAll(".showCase__font");
const showCaseOutput = document.querySelectorAll(".showCase__output");
const hearts = document.querySelectorAll(".heart");

toggle.addEventListener("click", function (event) {
  if (event.target.checked) {
    header.style.background = "#2E3440";
    showCase.style.background = "#2E3440";
    showCaseInput.style.borderBottom = "0.2rem solid #ECEFF4";
    hearts.forEach(function (heart) {
      heart.children[0].style.color = "#ECEFF4";
    });
    showCaseFont.forEach(function (font) {
      font.style.color = "#ECEFF4";
    });
    showCaseOutput.forEach(function (output) {
      output.style.color = "#ECEFF4";
    });
  } else {
    header.style.background = "#ECEFF4";
    showCase.style.background = "#ECEFF4";
    showCaseInput.style.borderBottom = "0.2rem solid #2E3440";
    hearts.forEach(function (heart) {
      heart.children[0].style.color = "#2E3440";
    });
    showCaseFont.forEach(function (font) {
      font.style.color = "#2E3440";
    });
    showCaseOutput.forEach(function (output) {
      output.style.color = "#2E3440";
    });
  }
});

input.addEventListener("input", function (event) {
  const value = event.target.value;
  dancing.innerText = value;
  lato.innerText = value;
  merriweather.innerText = value;
});

hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    hearts.forEach(function (heart) {
      heart.children[0].classList = "fa-regular fa-heart heart__logo";
    });
    heart.children[0].classList = "fa-solid fa-heart heart__logo";
  });
});