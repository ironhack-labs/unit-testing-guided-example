function sum(a, b) {
  if(!a && !b){
  return 0;
  } else if (!a || !b) {
  return a;
  } else {
  return a + b;
  }
}  


function subtract(a, b) {
  if (!a && !b){
  return 0;
  } else if (!a || !b) {
  return a;
  } else {
  return a - b;
  }
}

function divide(a, b) {
if (a === 0 || b === 0) {
  return error;
} else {
  return a / b;
}

}


function multiply(a, b) {
  return 
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
