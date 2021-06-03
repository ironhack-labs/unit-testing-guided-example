function sum(a, b) {

  if (isNaN(a) && isNaN(b)) {
    return 0
  }

  if (isNaN(a)) {
    a === 0 === isNaN(a)
    return (0 + b)
  }

  if (isNaN(b)) {
    b === 0 === isNaN(b)
    return (a + 0)
  }

  else {
    return a + b
  }

}


function subtract(a, b) {

  if (isNaN(a) && isNaN(b)) {
    return 0
  }

  if (isNaN(a)) {
    a === 0 === isNaN(a)
    return (0 - b)
  }

  if (isNaN(b)) {
    b === 0 === isNaN(b)
    return (a - 0)
  }


  else{
    return a - b;
  }
  
}

function divide(a, b) {

  if (b === 0) {
    return uppiess
  }
  else{
    return a / b;
  }
 
   
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };


