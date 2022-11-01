const calculatorFunctions = {};

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(num1, operator, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
}

let display = document.getElementById("display-value");
let grabFirstValue = "";
let isFirstValueIn = false;
let grabSecondValue = "";
let operator = "";

const button7 = document.getElementById("7");
const clear = document.getElementById("clear");
const mult = document.getElementById("x");
const equals = document.getElementById("equals");

button7.addEventListener("click", () => {
  if (isFirstValueIn == false) {
    grabFirstValue += "7";
  } else {
    grabSecondValue += "7";
  }
  display.textContent += "7";
});

clear.addEventListener("click", () => {
  display.textContent = "";
  grabFirstValue = "";
  grabSecondValue = "";
  isFirstValueIn = false;
});

mult.addEventListener("click", () => {
  display.textContent = "";
  parseInt(grabFirstValue);
  operator = "x";
  isFirstValueIn = true;
});

equals.addEventListener("click", () => {
  parseInt(grabFirstValue);
  parseInt(grabSecondValue);
  console.log(grabFirstValue);
  console.log(operator);
  console.log(grabSecondValue);
  let total = 0;

  if (operator == "x") {
    total = multiply(grabFirstValue, grabSecondValue);
    display.textContent = total;
    grabFirstValue = total.toString();
    grabSecondValue = "";
  }
});
