```js
const array = [];
array.flat(); // This is array flat method came new in ES-2019

/**
 * The flat() method creates a new array with all sub-array elements concatenated into
 * it recursively up to the specified depth.
 *
 */

const arr = [[1, 2, 3], ["a", "b", "c"]];

console.log(arr.flat()); // [1,2,3,'a','b','c']

const arr1 = [[1, 2, 3], ["a", ["b", "c"]]];

// My default flat only work one level deep
console.log(arr1.flat()); // [1,2,3,'a', ['b','c']]

// if you want to work on more level you can pass level etc. 2, 3
console.log(arr1.flat(2)); // [1,2,3,'a', 'b','c']

// if you want to work on n level you need to pass Infinity
console.log(arr1.flat(Infinity)); // [1,2,3,'a', 'b','c']
```