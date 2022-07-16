function sum(a = 0, b = 0) {
  return a + b;
}

function subtract(a = 0, b = 0) {
  let result = a - b;
  return result;
}

function divide(a = 0, b = 1) {
  if (!b) throw 'dividing by 0'
  let result = a / b;
  return result;
}

function multiply(a = 0, b = 0) {
  let result = a * b;
  return result;
}

module.exports = { sum, subtract, divide, multiply };
