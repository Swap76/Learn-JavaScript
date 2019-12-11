// Object.assign() is a useful method for copying objects in javascript. This method can be useful when mutating data in javascript.
// Object.assign() accepts two parameters: a target object and source objects.

// Problem statement
var object1 = {
  thing1: "thing1's things",
  thing2: "thing2's things"
};

var object2 = object1;

object2.thing1 = "thing1's new things";

console.log(object1);
// expected output: { thing1: "thing1's new things", thing2: "thing2's things" }
console.log(object2);
// expected output: { thing1: "thing1's new things", thing2: "thing2's things" }

object2 = Object.assign({}, object1);

object2.thing2 = "thing2's new things";

console.log(object1);
// expected output: { thing1: "thing1's new things", thing2: "thing2's things" }
console.log(object2);
// expected output: { thing1: "thing1's new things", thing2: "thing2's new things" }

// it is worth noting that Object.assign() will not perform a deep copy of your entire object. For this, the following is useful:

var object2 = JSON.parse(JSON.stringify(object1));

// Object.assign() can also be used for merging objects

var newObject1 = {
  a: "1"
};

var newObject2 = {
  b: "2"
};

Object.assign(newObject1, newObject2);

console.log(newObject1);
// expected output: { a: "1", b: "2" }
