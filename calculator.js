const validateInput = (a) => a && typeof a === 'number';
const reasignInput = (a) => (validateInput(a) ? a : 0);

function sum(a, b) {
  a = reasignInput(a);
  b = reasignInput(b);
  return a + b;
}

function subtract(a, b) {
  a = reasignInput(a);
  b = reasignInput(b);
  return a - b;
}

function divide(a, b) {
  a = reasignInput(a);
  b = reasignInput(b);
  if(b===0) throw new Error(
    `you provided /n a : ${a}/n b: ${b} /nDivision by Zero is not possible`
  );
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
