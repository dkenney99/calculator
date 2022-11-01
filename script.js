const calculatorFunctions = {};

function add(a, b) {
  return parseInt(a) + parseInt(b);
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
const button0 = document.getElementById("0");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");

const adding = document.getElementById("+");
const subtracting = document.getElementById("-");
const dividing = document.getElementById("%");
const mult = document.getElementById("x");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

button7.addEventListener("click", () => {
  if (isFirstValueIn == false) {
    grabFirstValue += "7";
  } else {
    grabSecondValue += "7";
  }
  display.textContent += "7";
});

button0.addEventListener("click", () => {
  if (isFirstValueIn == false) {
    grabFirstValue += "0";
  } else {
    grabSecondValue += "0";
  }
  display.textContent += "0";
});

button1.addEventListener("click", () => {
  if (isFirstValueIn == false) {
    grabFirstValue += "1";
  } else {
    grabSecondValue += "1";
  }
  display.textContent += "1";
});

button2.addEventListener("click", () => {
  if (isFirstValueIn == false) {
    grabFirstValue += "2";
  } else {
    grabSecondValue += "2";
  }
  display.textContent += "2";
});

button3.addEventListener("click", () => {
  if (isFirstValueIn == false) {
    grabFirstValue += "3";
  } else {
    grabSecondValue += "3";
  }
  display.textContent += "3";
});
button4.addEventListener("click", () => {
  if (isFirstValueIn == false) {
    grabFirstValue += "4";
  } else {
    grabSecondValue += "4";
  }
  display.textContent += "4";
});
button5.addEventListener("click", () => {
  if (isFirstValueIn == false) {
    grabFirstValue += "5";
  } else {
    grabSecondValue += "5";
  }
  display.textContent += "5";
});

button6.addEventListener("click", () => {
  if (isFirstValueIn == false) {
    grabFirstValue += "6";
  } else {
    grabSecondValue += "6";
  }
  display.textContent += "6";
});

button8.addEventListener("click", () => {
  if (isFirstValueIn == false) {
    grabFirstValue += "8";
  } else {
    grabSecondValue += "8";
  }
  display.textContent += "8";
});

button9.addEventListener("click", () => {
  if (isFirstValueIn == false) {
    grabFirstValue += "9";
  } else {
    grabSecondValue += "9";
  }
  display.textContent += "9";
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

adding.addEventListener("click", () => {
  display.textContent = "";
  parseInt(grabFirstValue);
  operator = "+";
  isFirstValueIn = true;
});

subtracting.addEventListener("click", () => {
  display.textContent = "";
  parseInt(grabFirstValue);
  operator = "-";
  isFirstValueIn = true;
});

dividing.addEventListener("click", () => {
  display.textContent = "";
  parseInt(grabFirstValue);
  operator = "/";
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
  } else if (operator == "+") {
    total = add(grabFirstValue, grabSecondValue);
    display.textContent = total;
    grabFirstValue = total.toString();
    grabSecondValue = "";
  } else if (operator == "-") {
    total = subtract(grabFirstValue, grabSecondValue);
    display.textContent = total;
    grabFirstValue = total.toString();
    grabSecondValue = "";
  } else if (operator == "/") {
    total = Math.round(divide(grabFirstValue, grabSecondValue));
    display.textContent = total;
    grabFirstValue = total.toString();
    grabSecondValue = "";
  }
});
