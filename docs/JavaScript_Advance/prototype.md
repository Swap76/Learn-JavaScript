# Prototype 

[Prototype-based programming](https://en.wikipedia.org/wiki/Prototype-based_programming) and prototypal inheritance are very important concepts to learn in JavaScript programming language. It is very similar to object-oriented programming model where you can inherit the functions and properties of the parent class. JavaScript did not have class-based inheritance until the introduction of ES6 ([6th Edition - ECMAScript 2015](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015)). Objects in javascript are mutable, so it allows its properties to be modified or reassigned. An important idea about the prototype is the prototype chain. An object or a function initially points to its default prototype. 

Let's look at a basic example. When you create an object `car` using the `{}` notation. In the diagram below, when we created an object, it has by default inherited the methods (behaviors or functions) and properties of the Prototype Object. The magic is happening through `__proto__` property which appeared in the object. We did not add it while creating. It was attached by the prototypal feature of the language.

![Car object](https://i.imgur.com/XjSv8MP.png)

Let's see if we can invoke or call those functions against our object which is the `car`.

```javascript=
// lets create the car object
let car = {
    make: 'Audi',
    model: 'A8',
    wheels: 4
}

console.log(car.toString()) 
// [out] "[object Object]"

console.log(car.valueOf()) 
// [out] {make: "Audi", model: "A8", wheels: 4}

```

As you can see in the code snippet above, we have not created those functions but they were inherited by the car object from `Object`. What we understand from this is that any object or function can look for values or methods which are defined in `__proto__`

Let us take another example. This time we will create a constructor function `Person` and attach additional methods to the prototype to add additional features.

```javascript=
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

// these methods appear in the __proto__ property 
// of an Object instance of Person

const max = new Person("Max", "Payne");

console.log(max.getName());
// [out] Max

console.log(max.getLastName());
// [out] Payne

console.log(max.getFullName());
// [out] Max Payne

console.log(max.getFormalName());
// [out] Payne, Max
```

Now you may be a little confused with the above example. We are introducing another piece to the puzzle, `prototype` property. In the above example, the function `Person` (also known as constructor function as it returns an object) gets to be the prototype of the object `max`. When you add additional functions to the prototype, they apply to the object `max` as well. 

![Object max and its prototype](https://i.imgur.com/JifUNJj.png)

The diagram above shows that `max` has a `__proto__` which is pointing to the `prototype` of `Person`. Let's see if it matches.

![](https://i.imgur.com/b9zKCWY.png)

Looks similar, let us compare. Enter following code in the console (only after you have already executed the Person and max related code snippet above)

```javascript=
max.__proto__ === Person.prototype
// [out] true
``` 

And guess what? the chain does not end there, `Person.prototype` has a property `__proto__` which now points to `Object`.
