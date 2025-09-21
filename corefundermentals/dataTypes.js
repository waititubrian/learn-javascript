console.log("Hello World!");

// ES1 - ES5 we declare variables using (var)
var a = 4;
// ES6 - .... these ways for declaring variables were introduced (let, const)
var a = 4;
console.log(a);
console.log(typeof(a)+ "\n");

let b = 234.6
console.log(b);
console.log(typeof(b));
console.log();

var c = "Brian Waititu";
console.log(c)
console.log(typeof(c));
console.log();

let required =  true;
console.log(required);
console.log(typeof(required));
console.log(!required)
console.log();

// null and undefined

// We cannot redeclare variable with 'let' keyword but possible with 'var' (The first declared varible has to be 'var' and the rediclared variable also 'var')
var c = a+b;
console.log(c);
console.log()

// We cannot reassign variable with 'var' & 'const' keyword but possible with 'let' (The first declared varible has to be 'let' and the reassinged variable not set to any Keyword)
// c = a+b;
// console.log(c);
// console.log()

// 'const' Keyword is used if variable declared won't be changed throught the program

/*
  Best Practice for Declaring Variables in JavaScript:

  1. Use `const` by default
     - Safer, avoids accidental reassignment.
     - Great for values that should never change.

  2. Use `let` only when the value will change
     - Block-scoped.
     - Useful for counters, loops, or mutable data.

  3. Avoid `var`
     - Function-scoped (not block-scoped).
     - Can lead to bugs due to hoisting and scope leakage.
     - Only use when maintaining legacy (old) codebases.
*/



