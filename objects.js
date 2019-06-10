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

console.log(a.name); // This way you can get the value of perticular element

a.name = "Swapnil Satish Shinde"; // This way we can change a perticular property of object

console.log(a.name); // This way you can get the value of perticular element

console.log(a);
// Output { name: 'Swapnil Satish Shinde', rollno: 76 }
