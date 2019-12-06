# Polymorphism
Polymorphism is one of the basic principles of **object-oriented programming (OOP)**. It is the practice of designing objects to share behavior and be able to overwrite common behaviors associated with specific ones. Polymorphism uses inheritance to realize this.

*Related: [Inheritance](JavaScript_Basics/inheritance.md), [Classes](JavaScript_Basics/classes.md)*

## Parent class
Let's create a `class` called Person first.
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    getPosition() {
        return "Unemployed";
    }
}
```

## Child class
We like to extend this `class` for Employees. This can be done by creating a `class` and adding `extends`.
```javascript
class Employee extends Person {
    constructor(name, position, salary) {
        super(name); // super() calls the constructor of Person

        this.position = position;
        this.salary = salary;
    }
    
    getPosition() { //overwrites the method of person
        return this.position
    }

    getSalary() {
        return this.salary
    }
}
```

## Output
As you can see in the output below, `getPosition()` gets overwritten in `Employee` and `getName()` can be used from `Person` in `Employee`
```javascript
let person = new Person("James");
let employee = new Employee("Torsten", "Developer", 45000);

console.log(employee.getName()); // Output: Torsten
console.log(person.getName()); // Output: James

console.log(employee.getPosition()); // Output: Developer
console.log(person.getPosition()); // Output: Unemployed
```

The above example describes the polymorphism in ECMAScript. 
An object "Person" can be described in many forms (e.g. Employee, ...).

Another example from reality about polymorphism:

When I mention an Asian person, it is very abstract. It can be Japanese, Vietnamese or Indian. But they all share the typical characteristics of Asians.