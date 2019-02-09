//sorting an array
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.sort();
// console.log(fruits);

//reversing an array
// fruits.reverse();
// console.log(fruits);

//numeric sort
// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) { return a - b });//return b - a
// console.log(points);

//random order
var points = [40, 100, 1, 5, 25, 40];
points.sort(function (a, b) { return Math.random - 0.5 });
console.log(points);

//math.max.apply
var points = [40, 100, 1, 5, 25, 40];
console.log(Math.max.apply(null, points));
console.log(Math.min.apply(null, points));

//Sorting Objects Arrays
var cars = [
    { type: "Volvo", year: 2016 },
    { type: "BMW", year: 2001 },
    { type: "Audi", year: 2008 },
];

//cars.sort(function (a, b) { return a.year - b.year });
//console.log(cars);

cars.sort(function (a, b) {
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {
        return -1;
    }
    if(x>y){
        return 1;
    }
    return 0;
});

console.log(cars);









