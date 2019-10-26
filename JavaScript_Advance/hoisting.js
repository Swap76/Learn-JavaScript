/*

Hoisting: Before executing any code, the javscript engine sets up memory for variables and functions.
variables are assigned undefined by the engine.
*/

// Example 1
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x; // Display x in the element

var x; // Declare x

// Example 2
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x; // Display x in the element

// ________________________________________________________
/* Conclusion :Example 1 gives the same result as Example 2
so, Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
(to the top of the current script or the current function)
*/

console.log(foo);
let foo = 'foo'; //unable to print due to the hoisting behaviour

console.log(ok);
var ok = 'this is printing'//var is hoisted

