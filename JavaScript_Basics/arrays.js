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

// The pop() method removes the last element from an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); // Removes the last element ("Mango") from fruits and output is ["Banana","Orange","Apple"]

// Shifting is equivalent to popping, working on the first element instead of the last.
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
const cars = ["Acura", "Audi", "Bugatti", "Honda"];
cars.shift(); // Removes the first element ("Acura") from cars and output is ["Audi","Bugatti","Honda"]

// The length property provides an easy way to append a new element to an array:
const mobiles = ["Apple", "Nokia", "Samsung", "Sony"];
mobiles[mobiles.length] = "HTC"; // Appends "HTC" to mobiles and output is ["Apple", "Nokia", "Samsung", "Sony", "HTC"]

// delete will delete the object property, but will not reindex the array or update its length. This makes it appears as if it is undefined:
const myArray = ["a", "b", "c", "d"];
delete myArray[0];
"The first value is: " + myArray[0]; // The first value is: undefined
// Using delete may leave undefined holes in the array. Use pop() or shift() instead.

// The splice() method removes items from array and/or adds items to array and returns the removed items:
const names = ["Anne", "Belle", "Chloe", "Diane", "Ella", "Frances"];
names.splice(4, 1);
// This removes 1 item from index 4
// returns "Ella"
// names is now ["Anne", "Belle", "Chloe", "Diane", "Frances"]

names.splice(-2);
// This removes all items from index -2
// returns ["Diane", "Frances"]
// names is now ["Anne", "Belle", "Chloe"]

names.splice(0, 2, "Annabelle");
// This removes 2 items from index 0 and adds "Annabelle" in its place
// returns []
// names is now ["Annabelle", "Chloe"]

names.splice(1, 0, "Beatriz");
// This removes 0 items from index 1 and add	s "Beatriz" in its place
// returns []
// names is now ["Annabelle", "Beatriz", "Chloe"]

// The concat() method returns a new array of two or more arrays joined together:
const evenNumbers = [4, 36, 52, 68];
const oddNumbers = [9, 29, 499];
const moreOddNumbers = [1, 3, 5];
evenNumbers.concat(oddNumbers, moreOddNumbers);
// returns [4, 36, 52, 68, 9, 29, 499, 1, 3, 5]

// The slice() method returns a new array from a selected range:
const languages = ["JavaScript", "Python", "C", "PHP"];
languages.slice(2);
// This selects languages[2] onwards
// returns ["C", "PHP"]

languages.slice(1, 3);
// This selects languages[1] to the element before languages[3]
// returns ["Python", "C"]

languages.slice(-3, -1);
// This selects languages[-3] to the element before languages[-1]
// returns ["Python", "C"] which is the same as above

// To get an array copy
const arrayCopy = [...languages]
// This ... copuy the array by value
console.log(arrayCopy);

// Get a reverse copy of array
const reverseArray = languages.reverse();
console.log(reverseArray);