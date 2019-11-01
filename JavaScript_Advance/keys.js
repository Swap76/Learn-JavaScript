// Object.keys() is a useful way of checking a javascrip object's enumerable property names.
// This object method returns an array of the property names.

var exampleObject = {
  a: "apple",
  b: "boat",
  c: "car"
};

console.log(Object.keys(exampleObject));
// expected output: ["a", "b", "c"]

// Object.keys() can also be used on Arrays

var exampleArray = ["a", "b", "c"];

console.log(Object.keys(exampleArray));
// expected output: ["0", "1", "2"]

// Object.keys() can be useful in combination with array methods

Object.keys(exampleObject).forEach((propertyName) => {
  // your fancy logic here
});

// Such as

var funExampleObject = {
  look: "at",
  all: "of",
  the: "fine",
  grained: "control",
  you: "have",
  with: "Object.keys()!"
};

var funExampleResult = [];

Object.keys(funExampleObject).forEach((propertyName) => {
  funExampleResult.push(propertyName);
  funExampleResult.push(funExampleObject[propertyName]);
});

console.log(funExampleResult.join(" "));
// expected output: "look at all of the fine grained control you have wiht Object.keys()!"
