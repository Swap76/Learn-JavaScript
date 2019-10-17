# Currying

## What is Currying? 
Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.

## Where we use Currying?
When we want a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.

When we want to avoid passing the same variable again and again.

When we want the little pieces to be configured and reused with ease.

## How we make Currying? 
We know that currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

For example: 
```js
const notCurry = (x, y, z) => x + y + z; // a regular function
```
Which will be turned into : 
```js
const curry = x => y => z => x + y + z; // a curry function
```