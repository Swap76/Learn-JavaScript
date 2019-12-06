# Spread & Rest
JavaScript version ES6 introduced two new pieces of functionality which utilize the three-dot notation ("..."): the spread operator and the rest parameter.

## Spread
The spread operator can be used to expand arrays and objects into multiple elements. The following example combines two arrays into one using the spread operator on the original two arrays. Spreading them out into the new array creates that array using all of the elements of the original two arrays.
```javascript
const array1 = [1, 2, 3, 4, 5, 6];

const array2 = [6, 7, 8, 9, 10];

const combinedArray = [...array1, ...array2];

console.log(combinedArray);
/* Output
[
  1,  2,  3,
  4,  5,  6,
  6,  7,  8,
  9, 10
] */
```
The spread operator can also be used on objects. In the following example, two objects are combined into one new object.
```javascript
const obj1 = {
  name: "Swapnil",
  branch: "Comps"
};

const obj2 = {
  age: 19,
  college: "SIES"
};

const finalObj = { ...obj1, ...obj2 };

console.log(finalObj);
/* Output
{ name: 'Swapnil', branch: 'Comps', age: 19, college: 'SIES' }
*/
```

## Rest
The rest parameter is essentially the opposite of the spread operator. While spread allows you to expand a collection into its individual elements, rest allows you to combine elements back into a collection. In the following example, the remaining (or "rest") of the elements in the original array are combined into a new array called *remaining* because they represent the rest of the elements in the *marks* array.
```javascript
const marks = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Array Declaration

const [first, second, third, ...remaining] = marks;

console.log(first, second, third); // Output 1 2 3

console.log(remaining); // Output [ 4, 5, 6, 7, 8, 9 ]
```

The rest parameter can also be used with objects. In this example, the rest of the elements within the *a* object (aside from the *name* and *age* object properties) are included in the new *unwanted* object.
```javascript
const a = {
  name: "Swapnil",
  branch: "Comps",
  age: 19,
  college: "SIES"
};

const { name, age, ...unwanted } = a; // Here in unwanted all key and values expect the name and age will come this is different than arrays

console.log(unwanted); // Output { branch: 'Comps', college: 'SIES' }
```
