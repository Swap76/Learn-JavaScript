# Math

> Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object.
> 
> *[MDN web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)*

- As simple as it seems, Math helps to perform mathematical operations on numbers - not [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) -
- t has a lot of useful methods but here we will mention the most common ones.
- More Methods are [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

```javascript

// Math.floor(x) : returns the largest integer less than or equal to x
console.log(Math.floor(4.9)) // 4
console.log(Math.floor(4)) // 4

// Math.ceil(x) : returns the largest integer greater than or equal to x
console.log(Math.ceil(5.2)) // 6
console.log(Math.ceil(6)) // 6

// Math.round(x) : returns number rounded to x
console.log(Math.round(5.2)) // 5
console.log(Math.round(5.6)) // 6

// Math.random() : returns random number between 0,1 and changes every time you call the method
console.log(Math.random()) // 0.8215147093313706

// Math.max(x,y,z,w) : returns the maximum number of set of numbers
console.log(Math.max(4,5,2,9)) // 9

// Math.min(x,y,z,w) : returns the minimum number of set of numbers
console.log(Math.min(4,5,2,9)) // 2

// Math.sqrt(x) : returns sqrt of x
console.log(Math.min(9)) // 3

// Math.pow(x,y) : return base to the exponent power
console.log(Math.pow(4,2)) // 16
console.log(Math.pow(144,0.5)) // 12
console.log(Math.pow(160,0.3)) // 4.58391

// Math.abs(x) returns the absolute values of x
console.log(Math.abs(-100)) // 100

// Math.PI returns Ratio of the circumference of a circle to its diameter, approximately 3.14159
console.log(Math.PI) // 3.14159265


```