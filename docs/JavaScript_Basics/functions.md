# Functions
Functions are used to structure and generalize the code. It will become more flexible and you will have a better overview.

## What is a function?
A Function is a type of varable which essentially contains code you can run.
There are different ways to write code into a variable (declare a function).

```javascript
function foo () { // Puts codes inside if the curly brackets into the variable "foo".
  console.log("Hello World")
}
```

Shows that "foo" is a variable with the type function
```javascript
console.log(typeof foo) // "function"
console.log(typeof 1) // "number"
console.log(typeof "hello") // "string"
```

## How to call a function?
The function is defined. Now we want to execute the code inside the Function


The most common way to execute a function by appending the variable name with brackets
```javascript
foo() // "Hello World"
```

## Functions with output
Printing text is acually the wrong format of getting informations out of variables.
To get usable informations back we can use the return keyword.

```javascript
x = foo() // "Hello World" and x: undefined
```
Nothing is returned -> x is empty

```javascript
function foo () { // get a value from the inside of the function to te outside.
  text = "Hello World"
  return text
}
```
Call the updated function
```javascript
x = foo() // x: "Hello World"
```
Text is returned, but nothing prited into the console.

```javascript
console.log(text) // undefined
```
You can see that variables from inside the function are not accessible anymore

```javascript
console.log(x) // "Hello World"
```
The string from the "text" variable was retuned an is now "x"

## Functions with input
Input for functions is called parameters.
When you define the function you can also define what input variables the function can have.
That is the purpose of the "()". "()" means no input both wen you define and call a function.

Define with parameters
```javascript
function add(a, b) { // in the "()" you define what variable names the inputs get. Multiple parameters are septerated by a ","
  c = a + b // add the value of the two variables
  return c
}
```

## Call with input
Depending on the sequence, the values separated by a "," are assigned to the parameter variables.

`a = 5` `b = 8;`
```javascript
result = add(5, 8) // result: 13
```
