1. **Create** an object of class `Student` containing his/her `first name`, `last name`, `age`, `college` and `bio`.

2. Encapsulate *(with getters and setters)* the user details **using normal functions**.

3. **Implement** a class `Student`, which should contain his/her `first name`, `last name`, `age`, `college` and `bio`.

4. Encapsulate *(with getters and setters)* the user details **using class members**.

# Answer

### Solution Using Object
```js
const student = {
  firstName: "Swapnil",
  lastName: "Shinde",
  age: 19,
  college: "SIES",
  bio: "Web developer"
};

getFullName = () => {
  return `${student.firstName} ${student.lastName}`;
};

getBio = () => {
  return student.bio;
};

getAllDetails = () => {
  return `My name is ${student.firstName} ${student.lastName} \nMy age is ${student.age} \nMy college is ${student.college}, I am ${student.bio}.`;
};

console.log(getFullName()); // Output Swapnil Shinde

console.log(getBio()); // Output Web developer

console.log(getAllDetails()); // Output My name is Swapnil Shinde. My age is 19. My college is SIES, I am Web developer.
```

### Solution Using Classes
```js
class Student {
  // Created the constructor for student
  constructor (firstName, lastName, age, college, bio) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.college = college;
    this.bio = bio;
  }

  // This method returns combined firstname and lastname
  getFullName () {
    return (`${this.firstName} ${this.lastName}`);
  }

  // This method returns bio
  getBio () {
    return (`${this.bio}`);
  }

  // This method returns All details
  getAllDetails () {
    return (`My name is ${this.firstName} ${this.lastName} \nMy age is ${this.age} \nMy college is ${this.college}, I am ${this.bio}.`);
  }
}

const Swapnil = new Student("Swapnil", "Shinde", 19, "SIES", "Web Developer"); // Created object with arguments

console.log(Swapnil.getFullName()); // Output Swapnil Shinde

console.log(Swapnil.getBio()); // Output Web Developer

console.log(Swapnil.getAllDetails()); // Output My name is Swapnil Shinde. My age is 19. My college is SIES, I am Web Developer.

console.log(Swapnil); // This returns the object only
/*
  Output

Student {
  firstName: 'Swapnil',
  lastName: 'Shinde',
  age: 19,
  college: 'SIES',
  bio: 'Web Developer'
}
*/
```

### Solution Using Arrays

```js
const array = [1, 0.16, "Random", function () {
  console.log("this is function in an array");
}, { Key: "Answer" }, false];

console.log("Array can contain anything");
console.log(array);
// add last
array.push("add last");
console.log(array);
// remove last
array.pop();
console.log(array);
// add first
array.shift("add first");
console.log(array);

// remove first
array.unshift();
console.log(array);
// this element is function
array[2]();
// object inside array
console.log(array[3].Key);
```