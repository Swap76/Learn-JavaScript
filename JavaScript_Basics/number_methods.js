// isFinite()

/*  
Checks whether a value is a finite number. 
Finite is a number that isn't infinite and can be measured or given a value.

It only takes a single parameter which is the value you'd like to check. 
It's return value will be a boolean (true or false)

Numbers that pass as finite: 
0
whole numbers
negative numbers
decimals
equations

*/

console.log(Number.isFinite(80)) // output = true 
console.log(Number.isFinite(-1.80)) // output = true 
console.log(Number.isFinite(2 * 2)) // output = true 
console.log(Number.isFinite(80)) // output = true 
console.log(Number.isFinite(0)) // output = true 
console.log(Number.isFinite('10/17/2019')) // output = false 
console.log(Number.isFinite('3')) // output = false 

//isInteger()

/* 
Checks whether the value passed is an integer.
It's return value will be a boolean (true / false)
*/
console.log(Number.isInteger(2)) // output = true
console.log(Number.isInteger(-10)) // output = true
console.log(Number.isInteger(2.50)) // output = false
console.log(Number.isInteger(0)) // output = true


// isNaN()

/* 
Checks whether the value passed is NaN (Not a number) or if the value is a number
true = NaN 
false = A number 
*/

console.log(Number.isNaN(436)) // output = false
console.log(Number.isNaN(91.9)) // output = false
console.log(Number.isNaN('76')) // output = false
console.log(Number.isNaN(true)) // output = false
console.log(Number.isNaN(NaN)) // output = true
console.log(Number.isNaN('NaN')) // output = false


// isSafeInteger()

/* 
Checks whether the method passed is a safe integer. The returned value will provide a boolean.

A safe integer is represented as an IEEE-754 double precision number. This is simply any number between -9007199254740991 and 9007199254740991. 

Note that the value isn't changed to a number if a string is passed in. 
*/

Number.isSafeInteger(9); // true 
Number.isSafeInteger(-234); // true 
Number.isSafeInteger('234'); // false 
Number.isSafeInteger(0.7); // true 
Number.isSafeInteger(2.0); // true 

// toExponential()

/* 
Converts a number to its exponential form. The returned value is a string that represents the Number object in exponential notation
*/

const num1 = 89.0
num.toExponential() // '"8.9e+1"

const num2 = 2.5692
num.toExponential() // "2.5691e+0"

const num3 = -100.45
num.toExponential() // "-1.0045e+2"

//toFixed()

/* 
Formats a number using the fixed-point notation. It allows you to format a number with a specific number of digits to the right of the decimal. Numbers will be rounded is ncessary. 

Its return value is a string with the given number using fixed-point notation. If the number given is negative, the return value will be a number and won't be converted into a string. 
*/

3.45.toFixed() // '"3"
3.45.toFixed(1) // "3.5"
48573.120.toFixed(5) // "48573.12000"
3.45.toFixed() // "3"
  - 180.45.toFixed() // -100


//toLocaleString() 

/*
Converts a number into a language-sensitive representation of said number. 
It can take in two optional parameters: 
- locales: A string with a language tag (bali, latn)
- options: A set of options for the given locale (curency, style)

The return value is a string.
*/

let number = 8000
number.toLocaleString(); // "8,000" because the locale is English

number = 800
number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }) // "￥800" because we set the the locale and options


//toPrecision()

/* 
Converts a number to the specified precision. 

The returned value is in the form of a string. The value will be rounded and padded with 0's if there are not enough digits. 
*/

const precisionNum = 9.473739

console.log(precisionNum.toPrecision()); // "9.473739"
console.log(precisionNum.toPrecision(4)); // "9.474"
console.log(precisionNum.toPrecision(1)); // "9"

//toString()

/* 
Converts a given number to a string with the specified base number (an integer betwen 2 and 36)

The return value is given in the form of a string if no radix is given. 

*/

const toStringNum = 100
toStringNum.toString(2) // "1100100"
toStringNum.toString() // "100"
toStringNum.toString(4) // "1210"

//valueOf()

/* 
Returns the number value in primitive form of a Number object. 
This is rarely something done on your own, as JavaScript invokes this automatically. 
*/

const age = new Number(45)
typeof age // object
age.valueOf() // 45