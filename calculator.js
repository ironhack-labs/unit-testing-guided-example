function sum(a = 0, b = 0) {
  return a + b
}

function subtract(a, b) {
  if (a === undefined && b === undefined) {
    return 0
  } else if (a === undefined || b === undefined) {
    return a - 0
  } else if (Number.isInteger(a) && Number.isInteger(b)) {
    return a - b
  } else if (!Number.isInteger(a) && !Number.isInteger(b)) {
    return parseFloat(a - b)
  }
}

function divide(a, b) {
  if (a != 0 && b === 0) {
    throw new Error('Test Error')
  } else if (Number.isInteger(a) && Number.isInteger(b)) {
    return a / b
  } else if (!Number.isInteger(a) && !Number.isInteger(b)) {
    return parseFloat(a / b)
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
