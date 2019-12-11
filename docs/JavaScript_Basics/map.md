```js
// Let's create an array of numbers that we want to get the square of each number in the array
const numbers = [1, 2, 3, 4, 5];

// pass a function to map
const square = numbers.map(function (num) {
  return num * num;
});

// You can also do this using an arrow function
const square2 = numbers.map(num => num * num);

console.log(square);
// expected output: Array [1, 4, 9, 16, 25]

console.log(square2);
// expected output: Array [1, 4, 9, 16, 25]```