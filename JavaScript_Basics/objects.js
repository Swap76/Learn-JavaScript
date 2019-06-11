// Object in basically colection of key value pairs
let old = { 
  "name": "Swapnil",// left is key and right one is value
  "rollno": 76, // We assign any type to keys 
};

console.log(old);
// Output { name: 'Swapnil', rollno: 76 }

let a = { 
  name: "Swapnil",// We can omit the " " in keys but for string values it is neccessary
  rollno: 76, // We assign any type to keys 
};

console.log(a);
// Output { name: 'Swapnil', rollno: 76 }

let b = { 
  name: "Swapnil", 
  rollno: 76, 
  rollno: "Swap" // If we repeat the same key then the latest value is stored
};

console.log(b);
// Output { name: 'Swapnil', rollno: 'Swap' }

console.log(a["name"]); // This way we can get a perticular value for a key. " " around are imp.

console.log(a.name); // This way you can get the value of perticular element
// Output Swapnil
a.name = "Swapnil Satish Shinde"; // This way we can change a perticular property of object

console.log(a.name); // This way you can get the value of perticular element
// Output Swapnil Satish Shinde

console.log(a);
// Output { name: 'Swapnil Satish Shinde', rollno: 76 }

let objectWithFunction = { 
  name: "Swapnil",// We can omit the " " in keys but for string values it is neccessary
  rollno: 76, // We assign any type to keys 
  getfull: function() { // Dont use arrow funciton here as arrow functions dont have this property 
    console.log(`${this.name} ${this.rollno}`);
  }
};

console.log(objectWithFunction);
// Output { name: 'Swapnil', rollno: 76, getfull: [Function: getfull] }

objectWithFunction.getfull() // Output Swapnil 76

let canAddValue = { // This is normal object having 2 keys name and rollno
  name: "Swapnil",
  rollno: 76,
}

// We can add the keys we want any time into the object by directly assigning value to it 
canAddValue.branch = "Computer";

console.log(canAddValue);
// Output { name: 'Swapnil', rollno: 76, branch: 'Computer' }