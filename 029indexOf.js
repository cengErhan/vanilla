var str = "Please locate where 'locate' occurs! locate deneme locate  ";

var pos = str.indexOf("locate");
console.log(pos);//return 7

var pos = str.lastIndexOf("locate");
console.log(pos);//return 51

var pos = str.indexOf("'locate'");
console.log(pos);//return 20 with single quotes '

var pos = str.indexOf("locate",15);
console.log(pos);//return 21

var pos = str.indexOf("locate",30);
console.log(pos);//return 37

var pos = str.lastIndexOf("locate",15);
console.log(pos);//return 7


