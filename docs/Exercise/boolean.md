## Excercise to understand 'Boolean' data type

Let us go through some examples below to understand the concepts:

```js
console.log( !!0 );            // false

console.log( !!1 );            // true

console.log( !!undefined );    // false

console.log( !!null );         // false

const emptyString = '';

console.log( !emptyString );   // true
console.log( !!emptyString );  // false

const anyString = "test value";

console.log( !anyString );     // false
console.log( !!anyString );    // true

const obj = {};

console.log( !obj );           // false
console.log( !!obj );          // true

const arr = [];

console.log( !arr );           // false
console.log( !!arr );          // true

const negativeNum = -1;

console.log( !negativeNum );    // false
console.log( !!negativeNum );   // true

```
