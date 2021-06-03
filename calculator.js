function sum(a, b) {
  let sum = 0;
  if (a) sum += a;
  if (b) sum += b;
  if (!a && !b) return 0;
  return sum;
}

function subtract(a, b) {
  let sum = 0;
  if (a && b) {
    return a - b;
  } else {
    if (a) sum += a;
    if (b) sum += b;
    return sum;
  }
}

function divide(a, b) {
  if (a === 0 || b === 0) throw 'error';
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
