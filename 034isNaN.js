var x = "100" ;//x is a string but we can use x like a number
console.log(typeof x);//return string
console.log(isNaN(x));//return false
var x = x + "20" ;
console.log(x);
console.log(typeof x);
console.log(isNaN(x));//return false because 10020 is an arithmetic value
var x = x + "string" ;
console.log(typeof x);
console.log(isNaN(x));//return true because x is not an arithmetic value at the now




 

