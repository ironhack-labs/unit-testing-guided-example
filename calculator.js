function sum(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  } else if (a === undefined) {
    return b;
  } else if (b === undefined) {
    return a;
  }
  return a + b;
}

function subtract(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  } else if (a === undefined) {
    return b;
  } else if (b === undefined) {
    return a;
  }
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('B cant be 0');
  }
  return a / b;
}

function multiply(a, b) {
  if (a === undefined || b === undefined) {
    throw new Error('A and/or B cant be Undefined');
  }
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
