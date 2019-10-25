/* Examples of using Sets */

const testSet = new Set([1, 2, "orange", { name: "Frank" }]);

// Instance Methods and Properties

console.log(testSet.size); // output: 4

testSet.add(4); // testSet [1, 2, "orange", {name: "Frank"}, 4]
testSet.add(4); // Value not added, it's duplicated
testSet.delete(2); // testSet [1, "orange", {name: "Frank"}, 4]
testSet.has(1); // Return true
testSet.has({ name: "Frank" }); // Return false, because the use of "==="
testSet.clear(); // testSet []

// Iterating Sets

let iterSet = new Set([1, "blue", 125, "right"]);

// Using for..of

for (let item of iterSet) console.log(item); // output: 1, "blue", 125, "right"
for (let item of iterSet.keys()) console.log(item); // same output
for (let item of iterSet.values()) console.log(item); // same output
for (let item of iterSet.entries()) console.log(item); // output: [1, 1], ["blue", "blue"], ...etc

// Using for..each

iterSet.forEach(value => console.log(value)); // output: 1, "blue", 125, "right"

// Creating a Set from an Array

let array = [1, 2, 3, "Alehop"];
let arrToSet = new Set(array);

console.log(arrToSet); // output: [1, 2, 3, "Alehop"]

// Deleting duplicated elements in an Array using Set and spread operator

let dupArray = [1, 2, 2, "yes", "no", "yes", 69, 420];
let notDupArray = [...new Set(dupArray)];

console.log(notDupArray); // output: [1, 2, "yes", "no", 69, 420]

// Creating a Set form an String

let text = "Nice";
let strToSet = new Set(text);

console.log(strToSet); // output: ["N", "i", "c", "e"]

// Deleting duplicated letters in a string

let dupText = "Niceeee";
let notDupText = [...new Set(dupText)].join("");

console.log(notDupText); // output: "Nice"
