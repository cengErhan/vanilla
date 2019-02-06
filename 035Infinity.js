var n = 2;
console.log(typeof Infinity);//infinity is a number and that's bigger than js largest num
while (n != Infinity) {//Execute until Infinity
    n *= n;
    console.log(n);//x = -2 / 0 -Infinity 2/0 Infinity
}
console.log(n);
