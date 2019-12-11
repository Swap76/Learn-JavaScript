```js
// 1. join() method
const sayings = ["India", "is", "my", "country"];
sayings.join(" - ");
//Output : India-is-my-country

// 2. concat() method
var flowers = ["Rose", "Lotus"];
var leaf = ["green", "lightgreen", "Darkgreen"];
var garden = flowers.concat(leaf);
//Output : Rose ,Lotus,green,lightgreen Darkgreen


// 3. copyWithin() method
var Country = ["India", "US", "German", "Australia"];
console.log(Country); // Output : India , Us , German , Australia 
Country.copyWithin(2, 0); // Output : India , Us , India , Us

// 4.fill() method 
var Country = ["India", "US", "German", "Australia"];
console.log(Country); // Output : India , Us , German , Australia 
Country.fill("Canada"); // Output : Canada, Canada , Canada, Canada

// 5. find() method
var years = [2000, 2001, 2002, 2003];
console.log(years); // Output : 2000,2001,2002,2003
function checkYear(year) {
  return year >= 2002;
}
years.find(checkYear); // Output: 2002

// 6. findIndex()method
var years = [2000, 2001, 2002, 2003];
console.log(years); // Output : 2000,2001,2002,2003
function checkYear(year) {
  return year >= 2002;
}
years.findIndex(checkYear); // Output: 2

// 7.forEach() method
var Country = ["India", "US", "German", "Australia"];
console.log(Country); // Output : India , Us , German , Australia 
Country.forEach(countryFunction);

function countryFunction(item) {
  console.log(item) // Output: India , Us , German , Australia
}

// 8.  isArray() method
var Country = ["India", "US", "German", "Australia"];
console.log(Country); // Output : India , Us , German , Australia 
Array.isArray(Country); //Output: true

// 9.includes() method
var Country = ["India", "US", "German", "Australia"];
console.log(Country); // Output : India , Us , German , Australia 
var avail = Country.includes("Australia");
console.log(avail); // Output : true

// 10. IndexOf() method
var Country = ["India", "US", "German", "Australia"];
console.log(Country); // Output : India , Us , German , Australia 
var iof = Country.indexOf("Australia");
console.log(iof); // Output : 3


// 11 map() method
var numbers = [1, 2, 3, 4, 5];
console.log(numbers); //[1,2,3,4,5]
function double(num) {
  return num * 2;
}
numbers = numbers.map(double);
console.log(numbers); //[2,4,6,8,10]


{
  // 12 Array.prototype.reduce() Method
  // This method is used to generate a single output from the array
  let toReduceArray = [1, 2, 3, 4, 5];
  console.log("\nArray that will implement .reduce()")
  console.log(toReduceArray);

  function callbackFunctionForReduce(accumulator, currentValue) {
    return accumulator + currentValue.toString();
  }
  let reducedArray = toReduceArray.reduce(callbackFunctionForReduce);
  console.log("Reduced array is: ");
  console.log(reducedArray);
}

{
  // 13 Array.prototype.reduceRight() Method
  // This method is used to generate a single output from array by processing it from right to left
  let toReduceArray = [1, 2, 3, 4, 5];
  console.log("\nArray that will implement .reduceRight()")
  console.log(toReduceArray);

  function callbackFunctionForReduceRight(accumulator, currentValue) {
    return accumulator + currentValue.toString();
  }
  let reducedArray = toReduceArray.reduceRight(callbackFunctionForReduceRight);
  console.log("Reduced array is: ");
  console.log(reducedArray);
}

{
  //14 Array.prototype.some()
  // Checks whether at least one element in the array passes the test given as a parameter
  let toCheckArray = [1, 2, 3, 4, 5];
  console.log('Array to be checked for containing a multiple of 2 is:');
  console.log(toCheckArray);

  function checkingFunction(input) {
    // Checks if the value is multiple of 2;
    return ((input % 2) === 0);
  }
  console.log('Result is: ');
  console.log(toCheckArray.some(checkingFunction));
}

{
  //15 Array.prototype.lastIndexOf()
  // Finds the first element supplied as parameter from the last posistion in the array
  let containingArray = [1, 7, 6, 8, 7];
  console.log("the array that contains 7 two times in position 1,4 is: ");
  console.log(containingArray);
  console.log('The last posistion of 7 in array according to lastIndexOf() is: ');
  console.log(containingArray.lastIndexOf(7));
}

{
  //16 Array.prototype.every()
  //Checks if all the elements in array passes the condition implemented by the function given as parameter
  let fullfillingArray = [2, 4, 6, 8, 10];
  console.log('Array with all even numbers is: ');
  console.log(fullfillingArray);

  function checkIfEven(num) {
    return ((num % 2) === 0);
  }
  console.log('Check if all elements in array are even:');
  console.log(fullfillingArray.every(checkIfEven));
}

{
  //17 Array.prototype.filter()
  //returns all the elements in array that pass the test implemented by function passed as parameter
  let evenOddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log('the array from which to return all even numbers is: ');
  console.log(evenOddArray);
  console.log('Filetered array is: ');
  console.log(evenOddArray.filter(checkIfEven));
}

{
  //18 Array.prototype.flat()
  // This function returns the array with the consitituents array elements
  let arrayToFlatten = [
    [1, 3, 5, 7, 9],
    [2, 4, 6, 8]
  ];
  console.log('Array to flatten is: ');
  console.log(arrayToFlatten);
  console.log('Flattened array is: ');
  console.log(arrayToFlatten.flat());
  // an index is passed into the method that instructs the depth till which to flatten
  arrayToFlatten = [
    [
      [1],
      [3],
      [5],
      [7],
      [9]
    ],
    [
      [2],
      [4],
      [6],
      [8]
    ]
  ];
  console.log("Deepended array is: ");
  console.log(arrayToFlatten);
  console.log('Array flattened to depth of 1 is: ');
  console.log(arrayToFlatten.flat(1));
}

{
  //19 Array.prototype.shift()
  // this functions removes the element from index 0 and returns it. It is similar to pop but it removes from left
  let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log('Original array is:');
  console.log(originalArray);
  console.log('The element removed after shift is: ', originalArray.shift());
  console.log('Array after shifting is:');
  console.log(originalArray);
}

{
  //20 Array.prototype.unshift()
  // this functions adds the element to index 0 and returns array. It is similar to push but it adds to left
  let originalArray = [3, 4, 5, 6, 7, 8, 9];
  console.log('Original array is:');
  console.log(originalArray);
  console.log('Elements to be added in front are 1,2');
  originalArray.unshift(1, 2);
  console.log('Array after unshifting is:');
  console.log(originalArray);
}

{
  //21 Array.prototype.push();
  // this function adds elements to the end of the array;
  let originalArray = [1, 2, 3, 4, 5, 6, 7];
  console.log('Original array is:');
  console.log(originalArray);
  console.log('Elements to be pushed are: 8,9');
  originalArray.push(8, 9);
  console.log('Array after push is: ');
  console.log(originalArray);
}

{
  //22 Array.prototype.pop();
  // this function removes elements from the end of array;
  let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
  console.log('Original array is:');
  console.log(originalArray);
  console.log('The element removed after pop is: ', originalArray.pop());
  console.log('Array after pop is:');
  console.log(originalArray);
}```