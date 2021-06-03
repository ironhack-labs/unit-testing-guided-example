function sum(a, b) {

  if (typeof a != 'number' && typeof b != 'number') {
    return 0;
  } else if (typeof a != 'number' && typeof b === 'number') {
    return 0 + b;
  } else if (typeof b != 'number' && typeof a === 'number') {
    return a + 0;
  }
  else {
    let sum = a + b
    return sum;
  }
}

function subtract(a, b) {
  if (typeof a != 'number' && typeof b != 'number') {
    return 0;
  } else if (typeof a != 'number' && typeof b === 'number') {
    return 0 - b;
  } else if (typeof b != 'number' && typeof a === 'number') {
    return a - 0;
  }
  else {
    let sub = a - b
    return sub;
  }
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('An explanatory error message');
  } else {
    let division = (a / b)
    return division;
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
