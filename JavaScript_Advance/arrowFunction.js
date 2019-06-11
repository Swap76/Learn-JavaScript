let a = () => {
  // This is arrow function came new in ES6
};

let info = {
  firstName: "Swapnil",
  lastName: "Shinde",
  getFullName: () => {
    return(`My name is ${this.firstName} ${this.lastName}`); // Arrow functions don't have "this" property
  }
}

console.log(info.getFullName());
// Output My name is undefined undefined that's why we dont use this with arrow function

let newInfo = {
  firstName: "Swapnil",
  lastName: "Shinde",
  getFullName: () => {
    return(`My name is ${newInfo.firstName} ${newInfo.lastName}`); // If we are using arrow function then directly use the variables as shown
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

class Studentinfo {

  constructor (firstName,lastName, age, branch, college){ 
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age; 
    this.branch = branch;
    this.college = college;
  };

  getFullName = () => { // Returns full name using string interpolation
    return(`My name is ${this.firstName} ${this.lastName}`); // If we are using arrow function then directly use the variables as shown
  };

  getBranch = () => { // Returns Branch 
    return(this.branch);
  };

}

let Swapnil = new Studentinfo("Swapnil", "Shinde",19, "Computer", "Sies"); // This way we can create new objects with arguments

console.log(Swapnil.getFullName()); // Output My name is Swapnil Shinde