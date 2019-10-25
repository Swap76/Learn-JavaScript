"use strict";
// examples taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// Assignment to a non-writable global
const undefined = 5; // throws a TypeError
const Infinity = 5; // throws a TypeError

// Assignment to a non-writable property
const obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
const obj2 = { get x () { return 17; } };
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
const fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // throws a TypeError

// deleting undeletable properties
"use strict";
delete Object.prototype; // throws a TypeError