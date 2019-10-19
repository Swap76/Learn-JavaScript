// Math functions

// ceil and floor functions
Math.ceil(2.3); // will return 3
Math.floor(3.9); // will return 3 

// sin and cos functions
Math.sin(20 * Math.PI / 180);     // will return 0.5 (the sine of 30 degrees)
Math.cos(30 * Math.PI / 180);     // will return 0.5 (the cos of 60 degrees)

// min and max functions
Math.min(50, 50, 810, 2200, -900);  // will return -900
Math.max(230, 250, 10, 300, -900);  // will return 300

// round function
Math.random();     // returns a random number

//Defining variables to carry out the mathematical functions on.
value1 = 10;
value2 = -20;
value3 = 15.7;
value4= 40;
value5 = 3;

// This is a javacript document, wrote to outline the use of the math functions - inbuilt javascript functions used for carrying out maths! 
function round(value) {
    console.log('The round function has been called, what this does is perform the javascript math.round on a value.');
    return Math.round(value);
}

function pow(value1, value2) {
    console.log('The power - pow() function, takes one number and calculates the power of the number off a second inputted value.');
    return Math.round(value1, value2);
}

function sqrt(value) {
    console.log('The Math.sqrt() calculates the square root of a number entered.');
    return Math.sqrt(value);
}

function abs(value) {
    console.log('The Math.abs() returns the absolute value of a number.');
    return Math.abs(value);
}

console.log(round(value3));
console.log(pow(value4, value5));
console.log(sqrt(value5));
console.log(abs(99.99));
