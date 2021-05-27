function sum(a, b) {
  a + b;
}

function subtract(a, b) {
  a - b;
}

function divide(a, b) {
  a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
module.exports = { sum, subtract, divide, multiply };
