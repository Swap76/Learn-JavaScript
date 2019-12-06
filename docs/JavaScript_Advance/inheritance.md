# Inheritance

## Prototypal Inheritance
Inheritance in JavaScript is based on the prototypal model. This means that each object has a private property called its prototype, denoted as `[[Prototype]]` in the ECMAScript standard. Each prototype object has is own prototype until a value of null is reached. This is commonly referred to as the prototype chain. (`null` has no prototype)

This is best demonstrated through example:
```javascript
let baseObject = {
  a: 1,
  b: 2
}

// Create a new object with baseObject as the prototype for extendedObject.
let extendedObject = Object.create(baseObject);

// Define property c to the baseObject.
// This is not explicitly defined on extendedObject
// but is accessible via the [[Prototype]].
baseObject.c = 3;

// It appears that there are no properties on extendedObject
console.log(extendedObject) // {}

// a and b were defined on the baseObject.
// The property looks up the prototype chain
// until the properties of a and b exist or null is encountered for [[Prototype]].
console.log(extendedObject.a); // 1
console.log(extendedObject.b); // 2

// Define d on the extendedObject
// this is not accessible to the baseObject
// as the [[Prototype]] inherits one way
extendedObject.d = 4;

// We now see property d on extendedObject
console.log(extendedObject) // { d: 4 }

// c is accessible because the prototype chain is "alive".
// As properties are added or deleted, they can be accessed 
// by objects that share a prototype
console.log(extendedObject.c); // 3

// d is accessible on extendedObject where it was defined
// but is inaccessible to baseObject and returns undefined
console.log(extendedObject.d); // 4
console.log(baseObject.d) // undefined
```

## Inheritance with Classes
Classes in JavaScript provide "syntactic sugar" for the prototypal model. Let's again look at this via example:

```javascript
// Animal class is defined with a property of legs and a method of getLegs 
// which returns the current value of legs. 
class Animal { 
  constructor () {
    this.legs = 4;
  }

  getLegs () { // Function for getting legs
    return (this.legs);
  }
}

// Dog inherits the base properties from Animal 
// and adds its own property of age (which is not shared with Animal) 
// and the methods getAge and getSound
class Dog extends Animal {
  constructor (age) {

    // We need to call super in order to instantiate the constructor on Animal.
    // If super is not called, then legs would be inaccessible to the Dog class
    super(); 
    this.age = age;
  }

  getSound () {
    return ("Bow");
  }

  getAge () {
    return (this.age);
  }
}

 // Create a new Dog object passing in 10 for the age parameter
const tommy = new Dog(10);

// Since the Dog class extends the Animal class
// tommy has access to the getLegs method
console.log(tommy.getLegs()); // Output 4

console.log(tommy.getSound()); // Bow

console.log(tommy.getAge()); // 10
```
---

Now let's look at the same code but without the syntactic sugar of the `class` keyword:

```javascript
// This function defines the base "constructor" for us and is 
// comparable to the constructor function found in the class example
function Animal() {
  this.legs = 4;
}

// Adding the getLegs property to the prototype ensures that 
// it will be inherited to any objects that are created from Animal
Animal.prototype.getLegs = function() {
  return this.legs;
}

// The Dog function acts as the constructor, but where is the super call
// that we use to call the constructor from Animal?
function Dog(age) {
  // the call method is similar in function to calling the super method in the 
  // super method in the class based example. In this case, it instantiates the
  // legs property
  Animal.call(this);

  this.age = age;
}

// We set the prototype of Dog to the prototype of Animal 
// in order to have access to the getLegs method that is 
// defined on Animal's prototype
Dog.prototype = Object.create(Animal.prototype);

// Dog is set as the constructor property on the Dog prototype to 
// match the object structure of the class example
Dog.prototype.constructor = Dog;

// Define getSound method
Dog.prototype.getSound = function() {
  return ("Bow");
}

// Define getAge method
Dog.prototype.getAge = function() {
  return (this.age);
}

// create new Dog with age 10
const tommy = new Dog(10);

console.log(tommy); // Dog { legs: 4, age: 10 }

// call getLegs that was inherited from Animal
console.log(tommy.getLegs()); // 4

// call both getSound and getAge that are defined on Dog
console.log(tommy.getSound()); // Bow
console.log(tommy.getAge()); // 10
```
