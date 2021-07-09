function sum(a, b) {
  
  return a + b;

}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}
//I do it that just to maintain the data and then push it
// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
