function sum(a, b) {
  if (a === undefined && b === undefined) {
    return 0
  } else if (a === undefined) {
    return b
  } else if (b === undefined) {
    return a
  } else
    return a + b
}

function subtract(a, b) {
  if (a === undefined && b === undefined) {
    return 0
  } else if (a === undefined) {
    return b
  } else if (b === undefined) {
    return a
  } else
    return a - b
}

function divide(a, b) {
  if (a == 0 || b == 0) {
    return indivisible
  } else
    return a / b
}


// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
