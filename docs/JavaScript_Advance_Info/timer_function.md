# Timer Function

Timer function allows us to execute a code at specified time intervals.

There are two imporant methods :
1.  setInterval(function, milliseconds)
2.  setTimeout(function, milliseconds)

We can run our code multiple times at particular time intervals. Let say we want to check the status of our website. We need to ping our website url after every minute. We can use setInterval method for this.

If we want to delay the execution of our code then setTimeOut method can be used. For example, we want to popup a message box to user after 30 seconds of the page load.

 The `setTimeout()` and `setInterval()` are methods of the Window object.

## setTimeout(function, milliseconds)

 The `setTimeout()` method runs a code after given time starting from calling this method in program..

  The setTimeout function accepts two parameters:

 - *function * :  a function to be executed
 - *milliseconds *: the number of milliseconds to wait before execution

```javascript

setTimeout(() => {

	console.log("Heloooo 7 !!!");

}, 7000); /* This will print Hellooo !!! after 7 seconds */


setTimeout(() => {

	console.log("Heloooo 3 !!!");

}, 3000); /* This will print Hellooo !!! after 3 seconds */

/* Output

Heloooo 3!!!
Heloooo 7!!!

 */

```

## Stopping the timer or Cancelling the setTimeout method

We can stop execution of `setTimeout()` using `clearTimeout` method.  This can only be done if the function has not already been executed. It uses the variable returned from `setTimeout()`

```javascript
var1 = setTimeout(() => {

	console.log("Heloooo 7 !!!");

}, 7000); /* This will print Hellooo !!! after 7 seconds */


var2 = setTimeout(() => {

	console.log("Heloooo 3 !!!");

}, 3000); /* This will print Hellooo !!! after 3 seconds */

clearTimeout(var1); /* this will not output Helooo 7 !!! */

/* Output

Heloooo 3!!!

 */
```


## setInterval(function, milliseconds)

 The `setInterval()` method runs a given function  after specific interval of time till we stop the timer.

  The setInterval function accepts two parameters:

 - *function * :  a function to be executed
 - *milliseconds *: the length of the timeinterval between each execution.



```javascript

// setInterval This runs a code after specific interval of time till we stop the timer.
starting =  setInterval(() => {

console.log("SetInterval is Called");

}, 3000); // This will print setInterval is Called after every 3sec

/* Output

SetInterval is Called
SetInterval is Called
SetInterval is Called
SetInterval is Called
.
.
.
 */

```

## Stopping the timer or Cancelling the setInterval method

We can stop the interval and timeout using `clearInterval` method.   It uses the variable returned from `setInterval`

```javascript
clearInterval(starting);
```
