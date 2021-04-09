function sum(a = 0, b = 0) {
  return a + b;
}

function subtract(a = 0, b = 0) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by 0");
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// Ignore the following lines

module.exports = { sum, subtract, divide, multiply };
