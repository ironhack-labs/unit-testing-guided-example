function sum(a, b) {
  if (a === undefined || b === undefined){
    return 0;
  }else {
    return a+b;

  }
}

function subtract(a, b) {
  if (a === undefined || b === undefined){
    return 0;
  }
  return a-b;
}

function divide(a, b) {
  return a/b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
