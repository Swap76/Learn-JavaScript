//Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object.


//Math.round(number) rounds off the value of number to nearest integer.
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
let x = 2;
let y = 3;
let z = Math.pow(x,y);
console.log(z);

//Math.sqrt(x) returns square root of the given number.
let x = 4;
let result = Math.sqrt(x);
console.log(result);

//Math.abs(x) returns absolute value of a number.
let x = -24;
let result = Math.abs(x);
console.log(result);