function sum(a, b) {
  if (b === undefined) {
    b = 0;
  }
  if (a === undefined) {
    a = 0;
  }
  return a + b;
}

function subtract(a, b) {
  if (b === undefined) {
    b = 0;
  }
  if (a === undefined) {
    a = 0;
  }
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by 0');
  } else {
    var c = a / b
  }
  return c;
}

function multiply(a, b) {
  if (b === undefined) {
    b = 1;
  }
  if (a === undefined) {
    a = 1;
  }
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
