const helpGST = (name, age) => {
  console.log(name,age);
}

helpGST(); // Output will be undefined undefined

const helpGSTwithDefaultValues = (name, age=19) => {
  console.log(name,age);
}

helpGSTwithDefaultValues("Swapnil"); // Output Swapnil 19

helpGSTwithDefaultValues("Vishal",23); // Output Vishal 23