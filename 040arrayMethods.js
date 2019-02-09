//array methods toString()
var fruits = ["apple","banana","orange"];
var string = fruits.toString();
console.log(typeof string);

//join methods
var temp = fruits.join("*");
console.log(temp);

//popping elements
var newfruits = fruits.pop();
console.log(fruits);

fruits[fruits.length] = "strawberry" ;
console.log(fruits);

var last = fruits.pop();
console.log(last);

console.log(fruits);

//push method
fruits.push("Kiwi");
console.log(fruits);

var  index = fruits.push("mango");
console.log(fruits);
console.log(index);

//shifting elements
fruits.shift();
console.log(fruits);

fruits.unshift("Lemon");
console.log(fruits);

//changing elements
fruits[0] = "strawberry" ;
console.log(fruits);

//deleting elements
delete fruits[0];
console.log(fruits);

//splicing an array
fruits.splice(2,0,"Lemon", "melon");
console.log(fruits);

//merging three arrays
//var totalarr =  arr1.concat(arr2, arr3);

//create a new array with slice
var citrus = fruits.slice(3)
console.log(citrus)

//documentgetElementById("myDiv").innerHTML = fruits //automatically string















