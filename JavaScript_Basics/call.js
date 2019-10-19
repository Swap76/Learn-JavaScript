const person = {
  greetings: function() {
    return `Hello, my name is ${this.name} and i'm ${this.age} years old`;
  }
}

// Function to count years of birth
let countAge = (yearsOfBirth) => {
  return new Date().getFullYear() - yearsOfBirth;
}

// Object of arguments to the actual function
let person1 = {
  name: 'Masyoudi',
  age: countAge(1997)
}

let greeting = person.greetings.call(person1);

console.log(greeting)
