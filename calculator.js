function sum(a, b){

if (a === undefined && b === undefined) {
  return 0
}

//SI b no es un valor
//retornar a + 0

if (b=== undefined) {
  return (a+0) 



}

 return (a+b)

}

function subtract(a, b) {
  if (!a&&!b)  {
return 0 
  }
  
a = a || 0
b = b || 0


return a-b;


}

function divide(a, b) {
  if (b==0){
  throw "error";
  }
  return a/b;

}


 


function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };



