class Student {
  // onlyname; // This should not have let or const only in classes
  constructor (name, age){ // name and age are arguments given to object at the time of creation of object
    this.name = name; // This initializes the local variable as name passed in argument
    this.age = age; // This initializes the local variable as age passed in argument
  }
  // function printClass (){
  //   console.log(`${this.name} ${this.age}`);
  // }
}

Swapnil = new Student("Swapnil", 19); // This way we can create new objects with arguments

console.log(Swapnil.name);// Output Swapnil

console.log(Swapnil.age);// Output 19