function sum(a, b) {
  if (((a == undefined) && (b == undefined)) || ((a == null) && (b == null)))
  {
    return 0;
  }
  if ((a == null) ||  (a == undefined))
  {
    a = 0;
  }
  if ((b == null) ||  (b == undefined))
  {
    b = 0;
  }
  return a + b;
}

function subtract(a, b) {
  if (((a == undefined) && (b == undefined)) || ((a == null) && (b == null)))
  {
    return 0;
  }
  if ((a == null) ||  (a == undefined))
  {
    return b;
  }
  if ((b == null) ||  (b == undefined))
  {
    return a;
  }
  return a - b;
}

function divide(a, b) {
  if (b == 0)
  {
    throw new DivisionException("Teilen durch Null nicht möglich");
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
