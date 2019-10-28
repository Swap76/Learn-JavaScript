// JavaScript Array forEach() Method

/*
-- forEach() method takes a callback function then loops through all the array elements and execute the callback function once for each array element
-- forEach() method DOES NOT modify the array and unlike map() method, forEach() DOES NOT return a new array
*/
// assume we have an array of numbers and we need to get square of each number
const numbers = [5, 4, 6, 12, 23, 1, 72], squares = [];

[5, 4, 6, 12, 23, 1, 72].forEach(n => {
  squares.push(n * n)
});

console.log(squares);

// expected output: Array [25, 16, 36, 144, 529, 1, 5184]

/*
-- Another example using index of elements in the callback function
-- In this example, we create an Object from an Array
*/
const users = ['John', 'Sally', 'Brad', 'Jack'], usersObj = {}

users.forEach((user, index) => {
  usersObj[index] = user
})

console.log(usersObj)
// expected output : Object {0: "John", 1: "Sally", 2: "Brad", 3: "Jack"}
