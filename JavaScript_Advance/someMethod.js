//Array some() Method
//The some() method executes the function once for each element present in the array:
//If it finds an array element where the function returns a true value, 
// some() returns true (and does not check the remaining values)

let arr = ['name','test name', 'testtwo','ship'];

// syntax

let found = arr.some((element) => {
  console.log(element) // nam ,test name,  true;  stop iterating
  // if the condition matched it doesn't check for the whole array
  // beneficial where you want to check if a property in a whole array exist
   return element.includes('test')
})
console.log(found) // true

// it doesn't change the original array
