```js
// Object in basically collection of key value pairs
const old = {
  name: "Swapnil", // left is key and right one is value
  rollno: 76 // We assign any type to keys
};

console.log(old);
// Output { name: 'Swapnil', rollno: 76 }

const a = {
  name: "Swapnil", // We can omit the " " in keys but for string values it is necessary
  rollno: 76 // We assign any type to keys
};

console.log(a);
// Output { name: 'Swapnil', rollno: 76 }

const b = {
  name: "Swapnil",
  rollno: 76,
  rollno: "Swap" // If we repeat the same key then the latest value is stored
};

console.log(b);
// Output { name: 'Swapnil', rollno: 'Swap' }

console.log(a.name); // This way we can get a particular value for a key. " " around are imp.

console.log(a.name); // This way you can get the value of particular element
// Output Swapnil
a.name = "Swapnil Satish Shinde"; // This way we can change a particular property of object

console.log(a.name); // This way you can get the value of particular element
// Output Swapnil Satish Shinde

console.log(a);
// Output { name: 'Swapnil Satish Shinde', rollno: 76 }

const objectWithFunction = {
  name: "Swapnil", // We can omit the " " in keys but for string values it is necessary
  rollno: 76, // We assign any type to keys
  getfull: function () { // Don't use arrow function here as arrow functions don't have this property
    console.log(`${this.name} ${this.rollno}`);
  }
};

console.log(objectWithFunction);
// Output { name: 'Swapnil', rollno: 76, getfull: [Function: getfull] }

objectWithFunction.getfull(); // Output Swapnil 76

const canAddValue = { // This is normal object having 2 keys name and rollno
  name: "Swapnil",
  rollno: 76
};

// We can add the keys we want any time into the object by directly assigning value to it
canAddValue.branch = "Computer";

console.log(canAddValue);
// Output { name: 'Swapnil', rollno: 76, branch: 'Computer' }```