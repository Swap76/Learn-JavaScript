const helpGST = (name, age) => {
  console.log(name,age);
}

helpGST(); // Output will be undefined undefined

const helpGSTWithDefaultValues = (name, age=19) => {
  console.log(name,age);
}

helpGSTWithDefaultValues("Swapnil"); // Output Swapnil 19

helpGSTWithDefaultValues("Vishal",23); // Output Vishal 23