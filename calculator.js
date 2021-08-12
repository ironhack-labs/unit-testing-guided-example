function sum(a, b) {

  if(a==undefined && b==undefined){
    return 0;
  }

  else if(a==undefined){
    return b;
  }
  else if(b==undefined){
    return a;
  }
  else{
    result = a+ b;
    return result;
  }
   
  }
  
  


function subtract(a, b) {

  if(a==undefined && b==undefined){
    return 0;
  }
  else if(a==undefined){
    return b;
  }
  else if(b==undefined){
    return a;
  }
  else{
    return a-b;
  }

  
}

function divide(a, b) {
  if(b==0){
    return error;
  }
  return a/b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
