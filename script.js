let firstOperand = "";
let secondOperand = "";
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
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case operators.add:
      return a + b;
    case operators.subtract:
      return a - b;
    case operators.multiply:
      return a * b;
    case operators.divide:
      return a / b;
  }
}

function updateNumber(event) {
  let num = event.target.textContent;
  if (num === 0 && display.textContent === "0") {
    display.textContent = 0;
  } else if (display.textContent === "0") {
    display.textContent = num;
  } else {
    display.textContent += num;
  }
}

function updateOperator(event) {
  let operator = event.target.textContent;
  if (!firstOperand) {
    firstOperand = display.textContent;
    curOperation = operator;
  } else if (!secondOperand) {
    secondOperand = display.textContent;
    console.log(operate(operator, firstOperand, secondOperand));
  }
}

function evaluate() {
  let answer;
  if (!firstOperand) {
    firstOperand = display.textContent;
    answer = firstOperand;
  } else if (!secondOperand) {
    secondOperand = display.textContent;
    answer = operate(curOperation, firstOperand, secondOperand);
  }

  history.textContent = `${firstOperand} ${curOperation} ${secondOperand} =`;
  display.textContent = answer;

  firstOperand = "";
  secondOperand = "";
  curOperation = "";
}

function clearEntry() {
  display.textContent = 0;
}

function clear() {
  firstOperand = "";
  secondOperand = "";
  curOperation = "";

  display.textContent = 0;
  history.textContent = "";
}

function deleteNumber() {
  if (display.textContent.length == 1) {
    display.textContent = 0;
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
}

function plusOrMinus() {
  let curNum = Number(display.textContent);
  if (curNum !== 0) {
    curNum = -curNum;
    display.textContent = curNum;
  }
}

function appendComma() {
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
}
