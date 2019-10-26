/**
 * Destructuring is a powerful way to create
 *  variables from values in arrays and objects
 */

 //Object Destructuring
 const person = {
  name: "Patrick",
  gender: "male",
  age: 20,
 }

 // May the destructuring begin
const { name, gender, age} = person;

console.log(name, gender, age); // Patrick male 20

//Array Destructuring

const names = ["Rusimbi", "Patrick"];
const [firstname, lastname] = names;

console.log(`Firstname: ${firstname}, Lastname: ${lastname}`); //Firstname: Rusimbi Lastname: Patrick