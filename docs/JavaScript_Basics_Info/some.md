# Some Method

This method returns true if at least one element in the array passes the test in the provided function.

**Note:** This method returns false if used on an empty array.

The `some` method will iterate over the elements in the given array until it finds an element that, when provided as an argument to the callback function, returns a truthy value (a value that, when converted to Boolean, becomes `true`).
When that happens, the method stops and returns false.
If none of the elements in the given array pass the test, this method returns false.

The callback function can take up to three arguments:
The value of the current element, it's index (optional), and the array object being traversed (optional).

## Example

The following code tests two differents arrays of numbers to see if any of the numbers is bigger than 10.


```js
function isBiggerThan10(element) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // returns false
[12, 5, 8, 1, 4].some(isBiggerThan10); // returns true
```
The above can also be written like this:

```js
[2, 5, 8, 1, 4].some(function(element) {
  return element > 10;
});  // returns false

[12, 5, 8, 1, 4].some(function(element) {
  return element > 10;
}); // returns true
```

Or with an arrow function:

```js
[2, 5, 8, 1, 4].some((element) => {
  return element > 10;
});  // returns false

[12, 5, 8, 1, 4].some((element) => {
  return element > 10;
}); // returns true
```
