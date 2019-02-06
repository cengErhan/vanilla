var $txt = "bananas apple" ;
console.log($txt);

$txt = $txt.replace("bananas", "orange");
console.log($txt);


$txt = $txt.replace($txt, "Hello World");
console.log($txt);

var $txt = "please visit microsoft microsoft and MICROSOFT and Microsoft and microSoft";
var $res = $txt.replace(/microsoft/g, "multireplace");
//you can replace all microsoft data within switch-case loop
console.log($res);

