function sum(a, b = 0) 
{
  if(!a && !b)return 0;
  return a + b;
}

function subtract(a, b = 0) 
{
  if(!a && !b)return 0;
  return a - b;
}

function divide(a, b) 
{
  if(!a && !b)return 0;
  if(b == 0)Throw();
  return a / b;
}

function multiply(a, b) 
{
  if(!a && !b)return 0;
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
