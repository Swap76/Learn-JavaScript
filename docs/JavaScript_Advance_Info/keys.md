# Object.keys()

Object.keys() is a method on the Object class in javascript. It is useful for listing the enumerable parameter names of an object.

## Using Object.keys()

Object.keys() accepts a javascript object as a single parameter and returns an array of the parameter names. For example

```js
var exampleObject = {
  a: "apple",
  b: "boat",
  c: "car"
};

console.log(Object.keys(exampleObject));
// expected output: ["a", "b", "c"]
```

***An Exhaustive reference for Object.keys() and other object methods can be found at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)***
