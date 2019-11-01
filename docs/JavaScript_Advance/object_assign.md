# Object.assign()

Object.assign() is a method on the Object class in javascript. It is useful for creating copies of objects as well as merging objects.

## Using Object.assign()

Object.assign() accepts two paramaters as follows: ```Object.assign(targetObject, ...sources)```

Object.assign() can be particularly useful for dealing with the fact that assigning a javascript object 
to another javascript object is really passing along a reference to the first object. 
This can result in confusion and surprise when you pass some data along to a method that mutates it, and then try to
operate on the original object with the expectation that it has stayed the same. Object.assign() allows you to avoid this
confusion by creating a brand new object for you to pass along so your original data is safe from these "side effects".
An example of this is as follows:

```js
var object1 = {
  key: "value"
};

var object2 = object1;

object2.key = "newValue";

console.log(object1);
// expected output: { key: "newValue" }
console.log(object2);
// expected output: { key: "newValue" }

object2 = Object.assign({}, object1);

object2.thing2 = "reallyNewValue";

console.log(object1);
// expected output: { key: "newValue" }
console.log(object2);
// expected output: { key: "reallyNewValue" }
```

***An Exhaustive reference for Object.assign() and other object methods can be found at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)***
