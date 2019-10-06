function helpGST () { // This way you can write functions in JS 
  // There is no requirement of specifying the return type of function
  console.log("Hii GST");
}
// Function is written to do a specific task many types in program. 
// This increases the maintainability and decreases the repetition of same code.
helpGST(); // For executing we have to call that function 

function Add (a,b) { // Here We have taken 2 Arguments a and b
  let c = a + b;
  return c; // This returns the result
}

console.log(Add(10,5)); // This Calls the function 
// We have to directly pass the arguments in function call

// Functions which dont have name are called Anonymous this should be assigned to a particular variable 
let helpFast = function (){
  return("Fast Fast");
}
console.log(helpFast());
// Output Fast Fast

let helpVeryFast = () => {
  return("Very Fast");
}

console.log(helpVeryFast());
// Output Very Fast