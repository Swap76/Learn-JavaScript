/*
 * Usage of continue and break
*/

// Break examples
// --------------
const helloWorld = "Hello, world!".split("");
while (helloWorld.length > 0) {
  if (helloWorld[0] == ",") { break; }
  console.log(helloWorld.shift());
}
// Will output: *'Hello'* with a carriage return between each letters.

const color = "red";
switch (color) {
  case "red":
  case "yellow":
  case "blue":
    console.log(color + " is a primary color");
    break;
  case "green":
  case "purple":
  case "orange":
    console.log(color + " is a secondary color");
    break;
  default:
    console.log("Sorry, I don't know this color...");
    break;
}
// Will output: *'red is a primary color'*.

let array = [1, 2, 3, 4, 5];
let array2 = [];
firstFor: for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] * array[j] > 5) { break firstFor; }
    array2.push(array[i] * array[j]);
  }
}
console.log(array2);
// Will output: *'[1, 2, 3, 4, 2, 4]'* with 'break firstFor;' and *'[1, 2, 3, 4, 2, 4, 3, 4]'* with a simple break statement.

// Continue examples
// -----------------
let result1 = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) { continue; }
  result1 = result1 + i;
}
console.log(result1);
// Will output: *0124*, the digit `3` is ommited because of the continue statement.

let result2 = [];
firstFor: for (let i = 0; i < 5; i++) {
  let numbers = "";
  for (let j = 0; j < 2; j++) {
    if (i === 3) { continue firstFor; }
    numbers = numbers + " " + (i + j);
  }
  result2.push(numbers.trim());
}
console.log(result2);
// Will output: *'["0 1", "1 2", "2 3", "4 5"]'* with 'continue firstFor' and *'["0 1", "1 2", "2 3", "", "4 5"]'* with a simple continue statement.
