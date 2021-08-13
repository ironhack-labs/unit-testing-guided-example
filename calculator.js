function sum(a, b) {
 
 if(a == undefined && b == undefined){
  result = 0; 
  return result;
 }if(b == undefined){ 
  return a;
   }else { 
  result = a + b
  return result;
   }
 }


function subtract(a, b) {
  if(a == undefined && b == undefined){
    result = 0; 
    return result;
   }if(b == undefined){ 
    return a;
     }else { 
       result = a -  b
        return result;
     }
   }
  


function divide(a, b) {
if(b == 0){
 result = error;
 return result;
}else{ 
  result = a/b
  return result;
 }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
