# This

JavaScript's 'this' keyword refers to the object it belongs to. It's values depends on where it is used.


## This as global variable
If `this` is used alone, it refers to a global object. In browsers it refers to Window Object as Global Object.

```javascript
var k = this;
console..log(k)

/* Output

Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

 */

```

  ## 'this'  in a function

In JavaScript, by default the owner of the function is `this`. The value of this in a function refers to the object it belongs to. In below example, `this` refers to window object, so instead of printing '5' it refers to global value '10'.

```javascript
var x =10;
function printX() {
	var x = 5;
	console.log(this.x)
}

printX(); /* its like this.printX() or window.printX() */


/* Output
10  /* this refers to global object so prints 10 */
*/
```

## This in function - strict mode

if `use strict` mode is enabled, `this` don't refer to the global object by default. It gives `undefined` when a function is called without explicitly using `this`

```javascript
// setInterval This runs a code after specific interval of time till we stop the timer.
`use strict'
var x =10;
function printX() {
	var x = 5;
	console.log(this.x)
}
this.printX();
printX();

/* Output
10 		// printX() called with this
 Uncaught TypeError: Cannot read property 'x' of undefined // printX() called without this
 */
```

  ## 'this' in a method

In JavaScript, `this` in a method refers to the object of which the method belongs to.  In below example, the `printX` method belongs to person object. so `this` refers to person object.

```javascript
var firstName = "John";
var person = {
	firstName: "Jenny",
	printX : function() {
		console.log(this.firstName)
	}
}
person.printX();

/* Output
 Jenny
*/
```

## Explicit function binding
Calling  `object A` method, using values of `object B` is called Explicit function binding. JavaScript provides two method `call()` and `apply()`

For more details read on [call()](/JavaScript_Basics/call) and [apply()](/JavaScript_Basics/apply) .


```javascript
var personA = {
	firstName: "Jenny",
	printX : function() {
		console.log(this.firstName)
	}
}
var personB = {
	firstName: "John"
}
personA.printX.call(personB);

/* Output
 John
*/
```
