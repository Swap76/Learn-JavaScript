```js
// JavaScript | some() Method
/*
some() method in JavaScript is used to check if leasts one element of the set meets the condition implemented by
determinated function
*/

const array = [
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "David"
  },
  {
    id: 3,
    name: "Lisa"
  },
  {
    id: 4,
    name: "Ashley"
  }
];

const existAshley = array.some(element => element.name === "Ashley");

// The const existAshley return true or false if the condition is correct

// In this example the const existAshley return true```