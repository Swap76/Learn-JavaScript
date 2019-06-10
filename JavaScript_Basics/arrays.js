// Javascript arrays can take any values in the same array
// We dont have to specify the size
let a = ['hii', 26 , "Swapnil"]; 

console.log(a); 
// Output [ 'hii', 26, 'Swapnil' ]
console.log(a.length); // This will print the size of array
// Output 3

let Student = []; // Created Empty array

// Here we are pushing one by one element
Student.push("Swapnil Satish Shinde"); // Pushed the Name 

Student.push(76); // Pushed rollno

Student.push(true); // Pushed true

console.log(Student); // Print Whole array
// Output [ 'Swapnil Satish Shinde', 76, true ]

let easyMethod = []; // Created Empty array

easyMethod.push("Swapnil Satish Shinde", 76 , true); // This way you can push Multiple Values at once.

console.log(easyMethod);
// Output [ 'Swapnil Satish Shinde', 76, true ]