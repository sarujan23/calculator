var result = document.getElementById('result');
var currentValue = '0';
var operator = '';
var operand1 = null;
var operand2 = null;
var operand2Started = false;

function addDigit(digit) {
  if (operand2Started) {
    currentValue = '0';
    operand2Started = false;
  }
  if (currentValue === '0' && digit !== '.') {
    currentValue = digit;
  } else {
    currentValue += digit;
  }
  result.value = currentValue;
}

function addOperator(op) {
  operator = op;
  operand1 = parseFloat(currentValue);
  operand2Started = true;
}

function calculate() {
  operand2 = parseFloat(currentValue);
  var resultValue = null;
  switch (operator) {
    case '+':
      resultValue = operand1 + operand2;
      break;
    case '-':
      resultValue = operand1 - operand2;
      break;
    case '*':
      resultValue = operand1 * operand2;
      break;
    case '/':
      resultValue = operand1 / operand2;
      break;
    default:
      break;
  }
  result.value = resultValue;
  currentValue = resultValue.toString();
  operand1 = null;
  operand2 = null;
  operator = '';
  operand2Started = false;
}

function clearScreen() {
  currentValue = '0';
  operator = '';
  operand1 = null;
  operand2 = null;
  operand2Started = false;
  result.value = currentValue;
}

function deleteDigit() {
  currentValue = currentValue.slice(0, -1);
  if (currentValue === '') {
    currentValue = '0';
  }
  result.value = currentValue;
}
