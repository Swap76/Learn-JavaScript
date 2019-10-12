// Prototypes are an extension for objects in javascript
// we use to encapsulate certain functionality to an Object (like a Class)

// first create an Object Person
// that receive the name and lastName

function Person (name, lastName) {
  this.name = name
  this.lastName = lastName
}

// We user the prototype keyword to add some functionality to this Person Object

// add a method getName that return the name
Person.prototype.getName = function () {
  return this.name
}

// add a method getLastName that return the lastName
Person.prototype.getLastName = function () {
  return this.lastName
}

// add a method getFullName that return the name + lastName
Person.prototype.getFullName = function () {
  return this.name + ' ' + this.lastName
}

// this all methods appear in the __proto__ keyword of an Object instance of Person
