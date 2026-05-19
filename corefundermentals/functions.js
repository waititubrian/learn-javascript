// Block of code

// var - global/functional levels
// let - global/block{} levels
// const

function add(a,b){
    return a+b;
}
let sum = add(2,3);
console.log(sum);
// console.log(add(2,3));

// Anonymous functions -> don't have a name ---- Function that can be stored as a variable or pass as a value
let sum2 = function(c,d){
    return c+d;
}
console.log(sum2(2,3));
console.log("Can also be written this way: " + "\n");

let sum3 = ((c,d) => c+d);
console.log(sum3(2,3));