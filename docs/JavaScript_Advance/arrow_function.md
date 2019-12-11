```js
let a = () => {
  // This is arrow function came new in ES6
  //It assigns the function to variable a as the identifier with let instead and adds arrows before the curly braces. 
  
};

let multiply = (num) => num * num 
 
//arrow functions also works without curly braces {} and can directly write expression after the arrows 
// this is known as concise body as opposed to a block body (with {});
//cannot be used with if statements, or an error will appear since it only takes one expression; 
//ternary operators can be used with arrow functions as a more concise way to write if statements 

let info = {
  firstName: "Swapnil",
  lastName: "Shinde",
  getFullName: () => {
    return (`My name is ${this.firstName} ${this.lastName}`); // Arrow functions don't have "this" property
  }
}
//not having this. binding means it also cannot be called with new and used as a constructor 

console.log(info.getFullName());
// Output My name is undefined undefined that's why we don't use this with arrow function

let newInfo = {
  firstName: "Swapnil",
  lastName: "Shinde",
  getFullName: () => {
    return (`My name is ${newInfo.firstName} ${newInfo.lastName}`); // If we are using arrow function then directly use the variables as shown
  }
}

console.log(newInfo.getFullName());
// Output My name is Swapnil Shinde

// Using arrow functions in Class
class Student {
  constructor() {
    this.name = 'Vishal'
  }

  getName = () => {
    return this.name; 
  }
}

console.log((new Student).getName()) // Gives error for node versions before 12.4.0(Approx) SyntaxError: Unexpected token = 

class StudentInfo {

  constructor(firstName, lastName, age, branch, college) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.branch = branch;
    this.college = college;
  };

  getFullName = () => { // Returns full name using string interpolation
    return (`My name is ${this.firstName} ${this.lastName}`); // If we are using arrow function then directly use the variables as shown
  };

  getBranch = () => { // Returns Branch 
    return (this.branch);
  };

}

let Swapnil = new StudentInfo("Swapnil", "Shinde", 19, "Computer", "Sies"); // This way we can create new objects with arguments

console.log(Swapnil.getFullName()); // Output My name is Swapnil Shinde

//settimeout without arrow function
setTimeout(function () {
  console.log("hello world");
}, 1000);

//settimeout with arrow function
setTimeout(() => {
  console.log("hello world");
}, 0); //arrow functions provide better readability
```