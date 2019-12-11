```js
// JavaScript Boolean data type can store one of two values, true or false. ... e.g.
const YES = new Boolean(true);

// It can be declare to this way too
var negativeVariable = false;

//You can use the operator '!' to invert the value of the boolean
console.log(!sunnyDay) // Output: {true}

//also you can use the operator '||' or '&&' to envolv the result of two booleans in one value
var positiveVariable = true;
console.log(negativeVariable || positiveVariable) //Output: {true}
console.log(negativeVariable && positiveVariable) //Output: {false}

// JavaScript treats an empty string (""), 0, undefined and null as false.

// Everything else is true.```