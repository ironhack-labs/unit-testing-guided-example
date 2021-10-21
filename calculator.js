function sum(a, b) {

  if (a === undefined) {a = 0}
  
  if (b === undefined) {b = 0}

  return (a + b);

}

function subtract(a, b) {

  if (a === undefined) {a = 0}
  
  if (b === undefined) {b = 0}

  if (!a && !b) {
    return (0);}

  return (a - b);

}

function divide(a, b) { 

  if (b === 0) {
    throw new Error('oh noooo');
  }
  
  return (a / b);
}

function multiply(a, b) {
  
  if (a===undefined || b===undefined) {
    return (0); 

  } else if (!a || !b) {
    return (0);

  } else if (!a && !b) {
    return (0);

  }
  
  return (a * b);
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
