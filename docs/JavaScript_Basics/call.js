const person = {
  greetings: function () {
    return `Hello, my name is ${this.name} and i'm ${this.age} years old`;
  }
};

// Function to count years of birth
const countAge = (yearsOfBirth) => {
  return new Date().getFullYear() - yearsOfBirth;
};

// Object of arguments to the actual function
const person1 = {
  name: "Masyoudi",
  age: countAge(1997)
};

const greeting = person.greetings.call(person1);

console.log(greeting);