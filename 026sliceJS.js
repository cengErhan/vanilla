var $txt = "I can eat bananas all day";
var $bananas = $txt.slice(10, 17);//return bananas
console.log($bananas);
var $bananas = $txt.slice(-12, -5);//anas al (...,-3,-2,-1)
console.log($bananas);
var res = $txt.slice(7);//at bananas all day (7, ...)
console.log(res);
var res = $txt.slice(-7);//at bananas all day (-7,-6,-5...,-1)
console.log(res);

