function sum(a, b) {

  if (a == undefined && b == undefined) {
    result = 0
  }
  else if (a == undefined) {

    result = b + 0
  }

  else if (b == undefined) {

    result = a + 0
  }
  else {
    result = a + b
  }

  return result;
}

function subtract(a, b) {
  if (a == undefined && b == undefined) {
    result = 0
  }
  else if (a == undefined) {

    result = b - 0
  }

  else if (b == undefined) {

    result = a - 0
  }

  else {
    result = a - b
  }
  return result;
}

function divide(a, b) {

  if (a && b) { result = a / b }
  else if (b == 0) { throw "" }

  return result;


}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
