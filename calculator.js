function sum(a, b) {
  if (a === undefined && b === undefined) {
    return 0
  }
  else if (a === undefined || b === undefined) {
    return a + 0
  }
  else {
    return a + b
  }
}

function subtract(a, b) {
  if (a === undefined && b === undefined) {
    return 0
  }
  else if (a === undefined || b === undefined) {
    return a - 0
  }
  else {
    return a - b
  }

}

function divide(a, b) {
  let splitTwoNumbers = 0
  if (a === 0 || b === 0) {
    throw new Error('')
  }
  else {
    splitTwoNumbers = a / b
  }
  return splitTwoNumbers

}

function multiply(a, b) {
  return;
}


// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
