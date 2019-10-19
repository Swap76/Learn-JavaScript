//Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object.


//Math.round(number) rounds off the value of number to nearest integer.
//when a string input is provided it says "NaN"
//It can take number in string format as well.
let num1 = 24.45;
let num2 = 24.5;
let num3 = 24.95;
let num4 = "5.6";
let num5 = "hello";

num1 = Math.round(num1);
console.log(num1);
num2 = Math.round(num2);
console.log(num2);
num3 = Math.round(num3);
console.log(num3);
num4 = Math.round(num4);
console.log(num4);
num5 = Math.round(num5);
console.log(num5);

//Math.pow(x,y) returns base to the exponent power, that is, base^exponent.
//when a string input is provided it says "NaN"
//It can take number in string format as well.
let x = 2;
let y = 3;
let p = "2";
let z = Math.pow(x,y);
let q = Math.pow(p,y);
console.log(z);
console.log(q);

//Math.sqrt(x) returns square root of the given number.
//when a string input is provided it says "NaN"
//It can take number in string format as well.
let x = 4;
let y = "16";
let result1 = Math.sqrt(y);
let result = Math.sqrt(x);
console.log(result);
console.log(result1);

//Math.abs(x) returns absolute value of a number.
//when a string input is provided it says "NaN"
//It can take number in string format as well.
let x = -24;
let y = "-24";
let result1 = Math.abs(y);
let result = Math.abs(x);
console.log(result);
console.log(result1);