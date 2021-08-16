function sum(a, b) {
  return a+b;
} if(a=undefined && b=undefined)
 else if (a=undefined || b=undefined)
{return 0;}

function subtract(a, b) {
  return a-b;
}

function divide(a, b) {
  return a/b;
} 
if (b==0) {throw Error('impossible to divide by 0');}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
