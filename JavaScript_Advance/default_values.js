/*
A JavaScript function can have default parameter value.
Using default function parameters, you can initialize parameters with default values.
If you do not initialize a parameter with some value, then the default value of the parameter is undefined.
*/

const helpGST = (name, age) => {
  console.log(name, age);
};

helpGST(); // Output will be undefined undefined

const helpGSTWithDefaultValues = (name, age = 19) => {
  console.log(name, age);
};

helpGSTWithDefaultValues("Swapnil"); // Output Swapnil 19

helpGSTWithDefaultValues("Vishal", 23); // Output Vishal 23

/*
 You can also reuse default parameters to set another default parameter.
*/

const addOneToANumberAsDefault = (number1 = 1, number2 = number1 + 8) => {
  console.log(number2);
};

addOneToANumberAsDefault(); // Output 9