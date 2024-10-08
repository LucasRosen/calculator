let firstOperand = "";
let secondOperatnd = "";
let curOperation = "";

const operators = {
  add: "+",
  subtract: "−",
  multiply: "×",
  divide: "÷",
};

// UI
const display = document.getElementById("calculation");
const history = document.getElementById("history");

const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

const equalsButton = document.getElementById("equals");
const clearEntryButton = document.getElementById("clear-entry");
const clearButton = document.getElementById("clear");
const delButton = document.getElementById("delete");
const plusMinusButton = document.getElementById("plus-minus");
const commaButton = document.getElementById("comma");

equalsButton.addEventListener("click", evaluate);
clearEntryButton.addEventListener("click", clearEntry);
clearButton.addEventListener("click", clear);
delButton.addEventListener("click", deleteNumber);
plusMinusButton.addEventListener("click", plusOrMinus);
commaButton.addEventListener("click", appendComma);

numberButtons.forEach((button) =>
  button.addEventListener("click", updateNumber)
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", updateOperator)
);

function operate(operator, a, b) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

function updateNumber(event) {
  let num = event.target.textContent;
  if (num === 0 && display.textContent === "0") {
    display.textContent = 0;
  } else if (display.textContent === "0") {
    display.textContent = "";
    display.textContent += event.target.textContent;
  } else {
    display.textContent += event.target.textContent;
  }
}

function updateOperator(event) {}

function evaluate() {}

function clearEntry() {}

function clear() {}

function deleteNumber() {}

function plusOrMinus() {}

function appendComma() {}
