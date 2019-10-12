function helpGST () { // This way you can write functions in JS
  // There is no requirement of specifying the return type of function
  console.log("Hii GST");
}
// Function is written to do a specific task many types in program.
// This increases the maintainability and decreases the repetition of same code.
helpGST(); // For executing we have to call that function

function Add (a, b) { // Here We have taken 2 Arguments a and b
  const c = a + b;
  return c; // This returns the result
}

console.log(Add(10, 5)); // This Calls the function
// We have to directly pass the arguments in function call

// Functions can have a default parameter value.
// Default value will be used if the argument is not defined.
function subtract(a, b = 1) {
  const c = a - b;
  return c;
}

console.log(subtract(5)); // Output 4.
console.log(subtract(5, 3)); // Output 2.
console.log(subtract(5, null)); // Output 5, because null is a valid value.

// Functions which don't have name are called Anonymous this should be assigned to a particular variable
const helpFast = function () {
  return ("Fast Fast");
};
console.log(helpFast());
// Output Fast Fast

const helpVeryFast = () => {
  return ("Very Fast");
};

console.log(helpVeryFast());
// Output Very Fast