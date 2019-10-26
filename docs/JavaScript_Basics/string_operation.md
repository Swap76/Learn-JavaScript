# String Operation

#### JavaScript strings are used for storing and manipulating text, just like in any other language.

Strings are written inside quotes:
```javascript
const variableName = "Hello JavaScript";
// or with single quotes
const variableName = 'Hello JavaScript';
```

### Concatenation
First way of doing string concatenation is using **+** operator
```javascript
const name = "Richard";

const text = "Hello " + name; 
console.log(text);  // Hello Richard
``` 
Or using **template literals**. More convenient way for manipulating strings contains many variables.
```javascript
const name = "Richard";
// Use backticks ( ` ) inside quotes and put variables inside ${}
const text = `Hello ${Richard}`;
console.log(text);  // Hello Richard
```
