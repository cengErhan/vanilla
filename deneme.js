//array can created two difference ways
//1 way using [] and other way using new Array() keyword
var cars1 = [
    "Saab",
    "Volvo",
    "Fiat"
];

var cars2 = new Array("Mercedes", "BMW", "Audi");

//Acces the element of array
var name = cars1[0];
//document.getElementById("myDiv").innerHTML = cars[0] ;

//changing an array element
cars1[0] = "Opel";
//for the access the full array you can using the name array like cars
//Arrays are objects
//Array elements can be objects
cars1[0] = new Date;

cars1[1] = function () {
    return "hello world";
}

cars1[2] = cars2;

//you can some methods with array properties like cars.length or cars.sort()

//accessing the last array element
var last = cars2[cars2.length - 1];

//looping array elements
var fruits, text, fLen, i;
fruits = ["aplle", "orange", "strawberry"];
fLen = fruits.length;

text = "<ul>";
for (i=0; i<fLen; i++) {
    text += "<>"
}













