function sum(a, b) {
  if (!b){
    b = 0;
  }

  if (!a && !b){
    a = 0;
    b = 0;
  }
  return a +b;
}

function subtract(a, b) {
  if (!b){
    b = 0;
  }

  if (!a && !b){
    a = 0;
    b = 0;
  }
  return a - b;
}

function divide(a, b) {
  if (b===0){
    throw "Can't divide by 0";
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
