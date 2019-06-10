class Student {
  // Created the constuctor for student
  constructor (firstName,lastName,age,college,bio){ 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.age = age;
    this.college = college;
    this.bio = bio;
  }

  // This method retunrs combined firstname and lastname
  getFullName() {
    return(`${this.firstName} ${this.lastName}`);
  }

  // This method returns bio
  getBio() {
    return(`${this.bio}`);
  }

  // This method returns All details
  getAllDetails() {
    return(`My name is ${this.firstName} ${this.lastName} \nMy age is ${this.age} \nMy college is ${this.college}, I am ${this.bio}.`)
  }
}

let Swapnil = new Student('Swapnil','Shinde',19,"SIES","Web Developer"); // Created object with arguments

console.log(Swapnil.getFullName()); // Output Swapnil Shinde

console.log(Swapnil.getBio()); // Output Web Developer

console.log(Swapnil.getAllDetails()); // Output My name is Swapnil Shinde. My age is 19. My college is SIES, I am Web Developer.