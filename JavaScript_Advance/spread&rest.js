let marks = [1,2,3,4,5,6,7,8,9]; // Array Declaration

// If we want 1 to 3 as different variables and 4 to 9 as full array then in such cases we use "rest" operator

let [first, second, third, ...remaining] = marks;

console.log(first, second, third); // Output 1 2 3

console.log(remaining); // Output [ 4, 5, 6, 7, 8, 9 ]

let a = {
  name : "Swapnil",
  branch : "Comps",
  age : 19,
  college : "SIES"
};

let {name ,age, ...unwanted} = a; // Here in unwanted all key and values expect the name and age will come this is different than arrays

console.log(unwanted);// Output { branch: 'Comps', college: 'SIES' }


// "spread" operator can also be used for merging the arrays

let array1 = [1,2,3,4,5,6];

let array2 = [6,7,8,9,10];

let combinedArray  = [...array1, ...array2]; // Here "..." are considered as spread operation we are spreading the two arrays into one

console.log(combinedArray); 
/* Output 
[
  1,  2,  3,
  4,  5,  6,
  6,  7,  8,
  9, 10
] */

let obj1 = { // First Object
  name : "Swapnil",
  branch : "Comps"
};

let obj2 = { // Second Object
  age : 19,
  college : "SIES",
}

let finalObj = {...obj1, ...obj2}; // Using Spread operator we are combining two objects into one

console.log(finalObj); // Output { name: 'Swapnil', branch: 'Comps', age: 19, college: 'SIES' }