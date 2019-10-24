// Polymorphism is one of the basic principles of object-oriented programming (OOP)
// It is the practice of designing objects to share behavior and be able to overwrite common behaviors associated with specific ones.

// First create the class Person
class Person {
  constructor (name) {
    this.name = name;
  }

  getName () {
    return this.name;
  }

  getPosition () {
    return "Unemployed";
  }
}

// Extend the class Person with Employee
class Employee extends Person {
  constructor (name, position, salary) {
    super(name); // super() calls the constructor of Person

    this.position = position;
    this.salary = salary;
  }

  getPosition () { // overwrites the method of person
    return this.position;
  }

  getSalary () {
    return this.salary;
  }
}

const person = new Person("James");
const employee = new Employee("Torsten", "Developer", 45000);

console.log(employee.getName()); // Output: Torsten
console.log(person.getName()); // Output: James

console.log(employee.getPosition()); // Output: Developer
console.log(person.getPosition()); // Output: Unemployed