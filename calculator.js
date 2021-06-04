function sum(a, b) {
  let result = a + b
  return result;
}

function subtract(a, b) {
  let result = a - b
  return result;
}

function divide(a, b) {
  let result = a / b
  return result;
}

function multiply(a, b) {
  let result = a * b
  return result;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
