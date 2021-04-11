# Higher Order Functions

A **Higher Order function** or **HOF** is a function that receives a function as an argument or returns the function as output.

There are some built-in HOF for Arrays in Javascript, such as

- _Array.prototype.map_
- _Array.prototype.filter_
- _Array.prototype.reduce_.

Let's understand each of these through examples.

We will use the below array `list` as the base array to operate over.

```js
const list = [1, 2, 3, 4, 5];
```

## 1. map

- The **map** function iterates over an input array and returns a new array.
- It does not change the original array, but creates a new array.
- The map receives a callback function as its argument. This callback function receives 3 arguments
  - 1st arg is the **elememt** of the array, like 1, 2, 3, 4, 5
  - 2nd arg is the **index** of the item in the list (index for first element is 0, and so on)
  - 3rd arg is the original array [1,2,3,4,5] on which map is being called

```js
const newList = list.map(function (item, index, list) {
	return item * 2;
});

console.log(list); // prints [1, 2, 3, 4, 5]
console.log(newList); // prints [2, 4, 6, 8, 10]
```

## 2. filter

- the **filter** function iterates over an input array and returns a new array based on a condition
- the filter receive a callnack function as its argument. This callback functions receives 3 arguments:
  - 1st arg is the **element** in the list like "1" or "2" in the list example
  - 2nd arg is the **index** of the item in the list (index for first element is 0, and so on)
  - 3rd arg is the original array [1,2,3,4,5] on which filter is being called

```js
// this filtered list will contain only even numbers

const newListFiltered = list.filter(function (item, index, list) {
	// filter will return the value if it satisfies the below condition
	return item % 2 === 0;
});

console.log(list); // prints [1, 2, 3, 4, 5]
console.log(newList); // prints [2, 4]
```

## 3. reduce

- the **reduce** function iterates over an input array and returns a single output value
- it receives two arguments:
  - a callback function, also called as **reducer** function
  - an **initialValue** (this is optional parameter)
- the reducer function accepts four parameters:
  - 1st arg is **accumulator** which contains the accumulated value which will be returned when the array is reduced.
    If initalvalue is provided, accumulator will be equal to initialvalue, else it will be equal to the first element in the array
  - 2nd arg is **currentValue** which points to the current value of the array which is being iterated over.
    If initalvalue is provided, currentValue will be equal to the first element in the array, else it will be equal to the second element in the array
  - 3rd arg is **index** which contains the index of the currentValue in the input array
  - 4th arg is the **sourceArray** which is the input array on which reduce is called

```js
// Example 1
// this will return sum of all items in list. here, there is no initialvalue provided

const sumOfListItems = list.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
});

console.log(list); // prints [1, 2, 3, 4, 5]
console.log(sumOfListItems); // prints 15
```

```js
// Example 2
// this will return sum of all items in list. here, the initialvalue is provided as 20

const newSumOfListItems = list.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
}, 20);

console.log(list); // prints [1, 2, 3, 4, 5]
console.log(newSumOfListItems); // prints 35 (the sum of list items is 15, and the initial value was 20, so, 20 + 15 = 35)
```

## 4. sort

- If no input function is provided, values are sorted as strings by default, which means even if the elements are numbers, it converts them to strings and compare them with alphabetic order.
- To sort numbers, a compare function is needed. The compare function takes two arguments (a, b).
- Ascending oder: If the return (a-b) is negative, a comes before b. If the return (a-b) is positive, a comes after b.
- Descending oder: If the return (b-a) is negative, a comes before b. If the return (b-a) is positive, a comes after b.

```js
// Example 1
const fruits = ['apple', 'orange', 'grape'];
console.log(fruits.sort()); // prints ["apple","grape","orange"]
```

```js
// Example 2
const numList = [34, 67, 100, 20];
console.log(numList.sort()); // prints [100,20,34,67]
```

```js
// Example 3
const numList = [34, 67, 100, 20];
console.log(numList.sort()); // prints [100,20,34,67]
```

```js
// Example 4
const numList = [34, 67, 100, 20];
console.log(numList.sort((a, b) => a - b)); // prints [20,34,67,100]
console.log(numList.sort((a, b) => b - a)); // prints [100,67,34,20]
```
