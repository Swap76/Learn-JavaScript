# Destructuring

## What is destructuring?

Destructuring is a quick and clean way to assign a property on an object to a variable made available as part of ES2015 (ES6). Lets say that we have the following object:

```js
const a = { // Suppose this is the object coming from server then
  name: "Swapnil",
  age: 19,
  college: "SIES"
};
```

If we want to assign the name property of this object to a variable called `name`, we could do this:

```js
const name = a.name;
```

This works just fine until we want to assign each property of its object to it's own variable:

```js
const name = a.name;
const age = a.age;
const college = a.college;
```

This is a bit repetative and now with ES6 destructuring assignment, completely unnecessary. We can now do this:

```js
const { name, age, college } = a;
```

This may look a bit weird, but let's walk through it together. You can see that the open bracket directly follows the `const`, followed by the three different properties that we are assigning to variables by the same name. In essence what we are doing is extracting the value of `name`, `age`, and `college` from the `a` object and assigning those values to `const` variables by the exact same name.

## Destructuring and Assignment
There is a time when you want to destruct an item from an array and immediately name it, with javascript you can do it.

```js
const { name: surname } = a;
```
If you console the name and surname both will display print `Swapnil`.

### Destructuring Array
Sometime data is saved in an array datastructure, we can destruct them if we want
```js
const array = [1, 2, 3, 4]; // Array Declaration
```
How to access the items? we have options 
> option 1

When we want to skip specific item
```js
const [first, second, , fourth] = array; // Array Destructuring
```
Outoput is `1`, `2`, `4`  // notice we skipped `third 3`
> Option 2

When you want all items from array
```js
const [first, second, third, fourth] = array; // Array Destructuring
```
Outoput is `1`, `2`, `3`, `4`  // all are printed

Always check your array length before, and then use the power of destructuring.

## Destructuring and Combination
We can use our destructuring skills to get a specific item and combine the rest data. How to do it? Basically we need to use javascript `Spread operator`

```js
const bigArray = [ 1,2,3,4,5,6,6,7,8,9];
```
```js
const [firstItem, ...remainItems] = bigArray
```
The output will be first item will be `1` and remaining items will be combained in array `[2, 3, 4, 5, 6, 6, 7, 8, 9]`