function sum(a, b) {
  if (!a && !b) {
    return 0;
  }
  else if (!a) { return 0 + b }
  else if (!b) { return 0 + a }
  else return a + b;






  return;
}

function subtract(a, b) {
  if (!a && !b) {
    return 0;
  }
  else if (!a) { return b - 0 }
  else if (!b) { return a - 0 }

  return a - b;
}

function divide(a, b) {
  if (b == 0) { throw "Error2"; }
  else return a / b;
  return;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
