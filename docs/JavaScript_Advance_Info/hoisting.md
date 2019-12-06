# Hoisting

Basically, when Javascript compiles all of your code, all variable declarations using var are hoisted/lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. This is what we mean by “hoisting”.


In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.

Example 1 gives the same result as Example 2:
```js
Example 1 :

x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x
```
```js
Example 2:
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;
```

To understand this, you have to understand the term "hoisting".

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
