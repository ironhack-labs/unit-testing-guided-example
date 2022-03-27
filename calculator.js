function sum(a, b) {
if ((!a) && (!b)) return 0;
else if (!a) return b;
else if (!b) return a;
else return a + b;
}

function subtract(a, b) {
if ((!a) && (!b)) return 0;
else if (!a) return b;
else if (!b) return a;
else return a - b;
}

function divide(a, b) {
  if (b == 0) {
    throw new Error('Division by 0');
  }
  else return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
