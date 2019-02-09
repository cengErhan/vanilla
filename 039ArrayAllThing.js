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
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

//console.log(text);

//array.forEach();
text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>";
}

//console.log(text);

//adding array elements
fruits.push("Lemon");
//console.log(fruits);

//array element adding with using length
fruits[fruits.length] = "melon";
//console.log(fruits);

fruits[fruits.length + 5] = "banana";
//console.log(fruits);//5 empty items //undefined undeined ...

//recognize an array
//console.log(typeof fruits); returns object value beacuse in the js everythings is an object
//solution for this problem : Array.isArray();
//console.log(Array.isArray(fruits));// returns true (this method can using ec5 and after version)
//but ec5 not supported every browser yet
//solution 2
function isArray() {
    return x.constructor.toString().indexOf("Array") > -1 ;
}

//Solution 3 :
//console.log(fruits instanceof Array); returns true

 fruits = ["apple","melon","orange"];
// console.log(fruits);
// fruits.pop(); deleted the last item
// console.log(fruits);

// Array splice() you can use this method for the element deleting with index numbers
//fruits.splice(1,1);
//console.log(fruits);returns ["apple","orange"]

//for merging arrays array1.concat(array2).concat(array3)....
//for sorting arrays array1.sort() //return the alphabetically sorted array1




































