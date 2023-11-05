//inputs
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
//outputs
const daysOutput = document.getElementById("days-output");
const monthsOutputs = document.getElementById("months-output");
const yearsOutput = document.getElementById("years-output");

const inputErrorDay = document.querySelector(".error-message-day");
const inputErrorMonth = document.querySelector(".error-message-month");
const inputErrorYear = document.querySelector(".error-message-year");

const submit = document.getElementById("submit");
let isValid = true;

dayInput.addEventListener("input", function () {
  if (+dayInput.value > 31) {
    inputErrorDay.textContent = "Must be a valid day";
    isValid = false;
  } else {
    inputErrorDay.textContent = "";
  }
});

monthInput.addEventListener("input", function () {
  console.log("check");
  if (+monthInput.value > 12) {
    inputErrorMonth.textContent = "Must be a valid month";
    isValid = false;
  } else {
    inputErrorMonth.textContent = "";
  }
});

yearInput.addEventListener("input", function () {
  if (+yearInput.value > 2024) {
    inputErrorYear.textContent = "Must be a valid year";
    isValid = false;
  } else {
    inputErrorYear.textContent = "";
  }
});

submit.addEventListener("click", function () {
  checkforEmpty();

  if (isValid) {
    checkExeptions();
    daysOutput.textContent = dd - dayInput.value;
    monthsOutputs.textContent = mm - monthInput.value;
    yearsOutput.textContent = yy - yearInput.value;
  }
});

let currentDate = new Date();
let mm = currentDate.getMonth() + 1;
let dd = currentDate.getDate();
let yy = currentDate.getFullYear();
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function checkExeptions() {
  /*
  როცა ახლანდელი დღე არის პატარა დაბადების დღეზე
  დღეს მივუმატებ შესაბამისის თვის დღეების რაოდენობას
  და იმას გამოვაკლებ ასევე თვიდან ვისესხებ მაგ რიცხვს და თვე დაიკლებს ერთით
  თუ ახლადნელი თვეც პატარაა დაბადების თვეზე მაშინ 
  თვეს დავუმატებ 12ს და წელს დავაკლებ ერთს
  */
  if (dayInput.value > dd) {
    dd = dd + month[monthInput.value - 1];
    mm = mm - 1;
    console.log(dd, mm);
  }

  if (monthInput.value > mm) {
    yy -= 1;
    mm += 12;
  }
}

const errorMessage = document.querySelectorAll(".error-message");
function checkforEmpty() {
  const inputs = document.querySelectorAll("input");
  const inputsArray = Array.from(inputs);
  inputs.forEach(function (input) {
    if (input.value === "") {
      let index = inputsArray.indexOf(input);
      errorMessage[index].textContent = "This field is required";
    }
  });
}
