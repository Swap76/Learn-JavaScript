# Map Function

We can use `map()` when we want to manipulate each data inside an array without changing the values of the original array.

The `map()` method creates a new array with the results of calling the provided function for each element in the array.

**Note:** `map()` does not execute the function if the array has no values.

**Note:** this method does not change the original array.

## Example

The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.

Using a callback function
```js
var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num)
});

// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```

Using an arrow function
```js
var numbers = [1, 4, 9];
var roots = numbers.map(num => Math.sqrt(num));

// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```

Using map method to extract keys from objects
```js
const sampleArray = [{ user: 'John', id: 1, age: 20 },{ user: 'Mike', id: 5, age: 30 },{ user: 'Paul', id: 2, age: 40 }]
console.log( sampleArray.map( ({ user, age}) => ({ user, age}) ) )
// prints the sample array but with only the user and age key
```