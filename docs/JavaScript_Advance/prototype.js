// Prototypes are an extension for objects in javascript
// we use to encapsulate certain functionality to an Object (like a Class)

// first create an Object Person
// that receive the name and lastName

function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// We user the prototype keyword to add some functionality to this Person Object

// add a method getName that return the name
Person.prototype.getName = function () {
  return this.firstName;
};

// add a method getLastName that return the lastName
Person.prototype.getLastName = function () {
  return this.lastName;
};

// add a method getFullName that return the name + lastName
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

// add a method getFormalName
Person.prototype.getFormalName = function () {
  return this.lastName + ", " + this.firstName;
};

// these methods appear in the __proto__ property of an Object instance of Person

const max = new Person("Max", "Payne");

console.log(max.getName());
// [out] Max

console.log(max.getLastName());
// [out] Payne

console.log(max.getFullName());
// [out] Max Payne

console.log(max.getFormalName());
// [out] Payne, Max