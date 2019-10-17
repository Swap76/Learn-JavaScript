// Javascript arrays can take any values in the same array
// We don't have to specify the size
const a = ["hii", 26, "Swapnil"];

console.log(a);
// Output [ 'hii', 26, 'Swapnil' ]
console.log(a.length); // This will print the size of array
// Output 3

const Student = []; // Created Empty array

// Here we are pushing one by one element
Student.push("Swapnil Satish Shinde"); // Pushed the Name

Student.push(76); // Pushed rollno

Student.push(true); // Pushed true

console.log(Student); // Print Whole array
// Output [ 'Swapnil Satish Shinde', 76, true ]

const easyMethod = []; // Created Empty array

easyMethod.push("Swapnil Satish Shinde", 76, true); // This way you can push Multiple Values at once.

console.log(easyMethod);
// Output [ 'Swapnil Satish Shinde', 76, true ]

//The pop() method removes the last element from an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // Removes the last element ("Mango") from fruits and output is ["Banana","Orange","Apple"]

//Shifting is equivalent to popping, working on the first element instead of the last.
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
var cars = ["Acura", "Audi", "Bugatti", "Honda"];
cars.shift();           // Removes the first element ("Acura") from cars and output is ["Audi","Bugatti","Honda"]

//The length property provides an easy way to append a new element to an array:
var mobiles = ["Apple", "Nokia", "Samsung", "Sony"];
mobiles[mobiles.length] = "HTC";          // Appends "HTC" to mobiles and output is ["Apple", "Nokia", "Samsung", "Sony", "HTC"]

//delete will delete the object property, but will not reindex the array or update its length. This makes it appears as if it is undefined:
var myArray = ['a', 'b', 'c', 'd'];
delete myArray[0];
"The first value is: " + myArray[0]; //The first value is: undefined
//Using delete may leave undefined holes in the array. Use pop() or shift() instead.