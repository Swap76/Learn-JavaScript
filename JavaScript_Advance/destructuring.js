// As data coming from the server is very big then there is better way of getting the data out of object
let a = { // Suppose this is the object coming from server then
  name : "Swapnil",
  age : 19,
  college : "SIES"
}

// By using Destructuring we can get the data of specific keys out into variables

let { name, age, college } = a; // This way name variable gets "Swapnil" this is possible because the object also has same key

console.log(name); // Output Swapnil

let {name:Myname} = a // This way Myname variable get assigned the value of name key in from object a 

console.log(Myname); // Output Swapnil

array = [1, 2, 3, 4] // Array Declaration

let [ first, second, ,fourth ] = array // Array Destructuring 
// In this the Order of variables matters the most as arrays don't have keys
// For skipping some values we can do that using as shown here we have skipped the third value

console.log(fourth); // Output 4

newArray = ["Swapnil", 19, "Shinde"] // New array

let [firstName , , lastName] = newArray; // Destructured the firstName and lastName

console.log(`My name is ${firstName} ${lastName}`);// Output My name is Swapnil Shinde