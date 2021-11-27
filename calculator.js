function testParameters(a,b,operation){
  //A function that checks all the problems that are coming for the parameters
  switch(operation){
    case "sum":
    case "substract":
      if(!a){
        a=0;
      }
      if(!b){
        b=0;
      }
      break;
    case "division":
      if(b===0){
        throw new Error('Cannot divide by 0');
      }
      break;
  }
  
  return [a,b];
}

function sum(a, b) {
  //If the function is called with a single number, and no second argument is passed, the function should act as if the second argument passed equals 0.
  //If the function is called without any arguments, the function should act as if both arguments passed equal 0.
  parameters = testParameters(a,b,"sum");
  return parameters[0]+parameters[1];
}

function subtract(a, b) {
  //follows the same logic as the function before
  parameters = testParameters(a,b,"substract");
  return parameters[0]-parameters[1];
}

function divide(a, b) {
  // the user calls the function divide and passes a 0 as the second argument, you should "throw" an error with the message "Cannot divide by 0".
  parameters = testParameters(a,b,"division");
  return parameters[0]/parameters[1];
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
