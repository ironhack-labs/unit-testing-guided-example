function sum(a, b) {
  if( a === undefined ){
    return 0
  }
  if( b === undefined ){
    return a
  }
  // if ( exception(a, b) !== NaN ){
  //   return exception(a, b)
  // }
  return a + b;
}

function subtract(a, b) {
  if( a === undefined ){
    return 0
  }
  if( b === undefined ){
    return a
  }
  return a-b;
}

function divide(a, b) {
  if (b == 0){
    throw("Error!")
  }
  return a/b;
}

function multiply(a, b) {
  return a * b;
}

function exception(a, b){
  if( a === undefined ){
    return 0
  }
  if( b === undefined ){
    return a
  }
  return NaN;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
