function sum(a, b) {
  if (arguments.length <= 1) {
    return arguments[0] || 0
  }
      return a + b;
}

function subtract(a, b) {
  if (arguments.length <= 1) {
    return arguments[0] || 0
  }
  return a - b;
}

function divide(a, b) {
  if(b == 0) {
    throw new Error('You cannot divide by 0');
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
