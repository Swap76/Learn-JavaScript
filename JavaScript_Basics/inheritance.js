// common functions are combined in a class to have less repetition in code

class Animals { // Animal class is created where the legs are defined 4
  constructor () {
    this.legs = 4;
  }

  getLegs () { // Function for getting legs
    return (this.legs);
  }
}

class Dog extends Animals {
  constructor (age) {
    super(); // As We have to also call the constructor of Animals if constructor is empty this automatically calls the super
    this.age = age;
  }

  // we have inherited the animals so getLegs method is also there in Dog class
  getSound () {
    return ("Bhow");
  }

  getAge () {
    return (this.age);
  }
}

const tommy = new Dog(10); // Created Object of Dog class

console.log(tommy.getLegs()); // Output 4

console.log(tommy.getSound()); // Bhow

console.log(tommy.getAge()); // 10