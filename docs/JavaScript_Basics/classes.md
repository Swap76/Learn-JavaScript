# Classes

JavaScript is a programming language based on **prototypes**.
Classes represent an improvement to the prototype-based inheritance, and provides a clearer and simpler syntax for creating objects and a new way to deal with inheritance.

> By definition, a class represents a template for the creation of objects, they provides the values ​​for the initial state (variables) and the implementation of the behavior (functions or methods).

## How to define a class

One way to define a class is through a **[class declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)**, the syntax is as follows:

```javascript
class Student {
  builder() {...}

  methodA() {...}

  methodB() {...}
}
```

The reserved word `class` is used, followed by the class name (`Student`)

It is also possible to define a class through a **[class expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class)**, which can be **anonymous** or **named**, the syntax is as follows:

```javascript
// Anonymous
const Student = class {
  builder() {...}

  methodA() {...}

  methodB() {...}
}

// Named
const Student = class TheStudent {
  builder() { ... }

  methodA() {...}

  methodB() {...}
}
```

> The maiin difference between a **declaration** and an **expression** is that an **expression** creates a local scope; this means that the class name `TheStudent` will only be visible and usable within the class body.

## How to instantiate a class

To instantiate a class, use the reserved keyword [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new), in this way a new object of the class type will be created.

```javascript
let Bill = new Student();
```

## Class body

Within the body of the class, there is a special method called [`constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor), this special method is called every time the class is instantiated to create a new object, and serves to define the initial state of the created object, for instance:

```javascript
class Student {
  // onlyname; // This should not have let or const only in classes
  constructor(name, age) { // name and age are arguments given to object at the time of creation of object
    this.name = name; // This initializes the local variable as name passed in argument
    this.age = age; // This initializes the local variable as age passed in argument
  }
}

const Swapnil = new Student("Swapnil", 19); // This way we can create new objects with arguments
```

The previous example defines a class of type `Student`, which receives two arguments in the constructor: `name` and `age`, both arguments will define the initial state of the object in two internal variables of the class (called in the same way) `this.name = name` and `this.age = age`.

> The body of the class is all the code that is between the curly braces `{}`.


## Class methods

Class methods are defined as functions within the body of the class:

```javascript
class StudentInfo {
  // college = "SIES"; // This is allowed above ES7, ES8
  constructor(name) {// name and age are arguments given to object at the time of creation of object
    this.name = name; // This initializes the local variable as name passed in argument
    this.college = "SIES"; // We want the College to be same for all students that's why it is declared outside of constructor
  }

  getNameAndCollege() {// This is a method in Student
    console.log(`${this.name} ${this.college}`);
  }
}
```

In the example, a method called `getNameAndCollege` has been defined, to invoke the method it's necessary to instantiate the class to create an object, and then perform the method call, as follows:

```javascript
const SwapnilInfo = new StudentInfo("Swapnil Bio");
SwapnilInfo.getNameAndCollege();
```

## Static methids

It's also possible to define define **[static methods](https://developer.mozilla.org/en-US/docs/Glossary/Static_method)**, [static methods](https://developer.mozilla.org/en-US/docs/Glossary/Static_method) can be called without needing to instantiate the class, for instance:

```javascript
class StudentInfo {
  constructor(name) {
    this.name = name;
    this.college = "SIES";
  }

  getNameAndCollege() {
    console.log(`${this.name} ${this.college}`);
  }

  static getGreeting() {
    console.log('Hello world'!);
  }
}

StudentInfo.getGreeting();
// logs on console "Hello world!"
```

The `getGreeting` method will log `Hello world!` in the console without creating an object with the keyword [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).

## Getters and Setters

It's also possible to define two types of special methods: **[getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)** and **[setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)**.
**[Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)** help us to assign a value to a class variable, and since it is a function, it is possible to add extra logic in the method as necessary.
**[Getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)** help us to retrieve the value of a class variable, and same as **[setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)**, they allow us to define some extra logic inside the method as necessary.

```javascript
class StudentInfo {
 constructor() { }

  set name(name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
  }

  get name() {
    console.log (`${this.name}`);
  }

  set college(college) {
    this.college = college.toUpperCase();
  }

  get college() {
    console.log (`${this.name}`);
  }

  static getGreeting() {
    console.log ('Hello world');
  }
}

let BillInfo = new StudentInfo();

BillInfo.name = "bill";
console.log (BillInfo.name); // Logs "Bill" because the extra logic capitalize the first letter

BillInfo.college = "sies";
console.log (BillInfo.college); // Logs "SIES" because the extra logic capitalizes the whole string
```
