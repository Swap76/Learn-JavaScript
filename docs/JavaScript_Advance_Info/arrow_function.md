# Arrow Function  
An arrow function expression is a syntactically compact alternative to a regular function expression.

Example:
```javascript
// Regular function 
function greet(name){
  console.log("Hello " + name);
}

// Arrow function equivalent
const greet = name => {
  console.log("Hello " + name)
}
```
Both functions above are equivalent to each other.    

If we have more than one function argument then we should put them in paranthesis like this:
```javascript
const exampleFunc = (name,age,eyeColor) => {
  // ...
}
```
