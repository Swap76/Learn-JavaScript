const into = "My college is SIESGST. Our seniors and alumnus are best in Mumbai";

const fullName = "My name is Swapnil Satish Shinde";

const branch = "I belong to Computer Science branch";

const oldBio = into + " " + fullName + " " + branch;

const bio = `${into} ${fullName} ${branch}`; // New way of concatenation

console.log(oldBio); // My college is SIESGST. Our seniors and alumnus are best in Mumbai My name is Swapnil Satish Shinde I belong to Computer Science branch

console.log(bio); // My college is SIESGST. Our seniors and alumnus are best in Mumbai My name is Swapnil Satish Shinde I belong to Computer Science branch

// Output by both the methods is same but string interpolation is more beautiful as we only have to right 1 line for all we want

/** Capitalizing a string
 *
 * Here's a simple way to capitalize a string
 */
String.prototype.capitalize = (string) => string.slice(0, 1).toUpperCase() + string.slice(1)
console.log("a casual lower case string")
// Prints out: "A casual lower case string"


/** EXERCISE **/
// Add a function to the string prototype that counts the occurrences of a substring
// 'cheese and Bananas, and more cheese'.count('cheese') -----> 2
