let validateInput = (a) => (a && typeof a === 'number');

function sum(a, b) {
  b = validateInput(b) ? b : 0;
  a = validateInput(a) ? a : 0;
  return a + b;
}

function subtract(a, b) {
  return;
}

function divide(a, b) {
  return;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
