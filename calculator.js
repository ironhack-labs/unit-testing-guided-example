function sum(a, b) {
  if ( typeof a === "number" && typeof b === "number"  ) {
    return (a + b);
  } 
  
  else if ( !a && !b ) {
    return 0;
  } 
  
  else if ( typeof a === "undefined" || typeof b === "undefined" ) {
    return a;
  }
}


function subtract(a, b) {
  if ( typeof a === "number" && typeof b === "number"  ) {
    return (a - b);
  } 
  
  else if ( !a && !b ) {
    return 0;
  } 
  
  else if ( typeof a === "undefined" || typeof b === "undefined" ) {
    return a;
  }
}

function divide(a, b) {
  if ( typeof a === "number" && typeof b === "number" && b !== 0 ) {
    return (a / b);
  } 
  
  else if ( !a && !b ) {
    return 0;
  } 
  
  else if ( b === 0 ) {
    throw new Error('cannot be divided by zero');
  }

}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
