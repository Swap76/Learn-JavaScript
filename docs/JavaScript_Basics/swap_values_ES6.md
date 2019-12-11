```js
// Swap values before ES6
// BAD because you need temp variable z to hold x value
let x = 5, y = 7; // x = 5, y = 7;
let z = x; // z = 5
x = y; // x = 7
y = z; // y = 5

// ES6 way
let x = 5, y = 7;
[x, y] = [y, x];
// x = 7, y = 5```