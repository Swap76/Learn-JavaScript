console.log(5 & 13); // 0101 & 1101 = 0101
// expected output: 5;

console.log(parseInt("0101",2) & parseInt("1101",2));
// expected output: 5;

console.log(5 & 13 & 3); // 0101 & 1101 & 0011 = 0001
// expected output: 1;

console.log(5 | 13); // 0101 | 1101 = 1101

/*
Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal,
or octal numbers. For example, the decimal number nine has a binary representation of 1001.
Bitwise operators perform their operations on such binary representations,but they return standard JavaScript numerical values.
*/
/*Bitwise AND
When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.*/

var x = 5 & 1; // outputs 1

/*Bitwise OR
Bitwise OR returns 1 if one of the bits are 1:*/

var x = 5 | 1; // outputs 5

/*JavaScript Bitwise XOR (^)
Bitwise OR returns 1 if one of the bits are 1:*/

var x = 5 ^ 1; // outputs 4

/*JavaScript Bitwise NOT (~)
var x = ~5; // outputs -6

/*JavaScript (Zero Fill) Bitwise Left Shift (<<)
This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:*/
var x = 5 << 1; //outputs 10

/*JavaScript (Sign Preserving) Bitwise Right Shift (>>)
This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:*/
var x = -5 >> 1; // outputs -3

/*JavaScript (Zero Fill) Right Shift (>>>)
This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:*/
var x = 5 >>> 1; // outputs 2



