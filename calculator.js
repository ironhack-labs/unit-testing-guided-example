function sum(a, b) {
  if(arguments.length === 0){
    return 0;
  }
  if(arguments.length === 1){
    return arguments[0];
  }
  return a + b;
}

function subtract(a, b) {
  if(arguments.length === 0){
    return 0;
  }
  if(arguments.length === 1){
    return arguments[0];
  }
  return a-b;
}

function divide(a, b) {
  if(b === 0){
    throw new Error('An explanatory error message');
  }
  return a / b;
}

function multiply(a, b) {
  if(a === 0){
    return 0;
  } 
  if(b === 0){
    return 0;
  }
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
