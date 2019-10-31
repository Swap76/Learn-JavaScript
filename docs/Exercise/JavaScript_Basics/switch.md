### Switch Case Exercises
**1. Write a JavaScript function for basic arithmetic computations.** The function should accept two numbers and an operator and should return the computed value. If the operator is not included in the allowed values, return `Invalid operator`. _Hint: "operator" will be compared to each case_
```
Parameters:
x - any number
y - any number
operator - one of the arithmetic operators:
        + (addition)
        - (subtraction)
        * or x or X (multiplication)
        / (division)
```
```javascript
function compute(x,y,operator) {
    // your code here
}

console.log(compute(1,6,"*")) //6
console.log(compute(1,6,"%")) //Invalid operator
```

<details>
<summary>Solution</summary>
<p>

```javascript
function compute(x,y,operator) {
    let answer;
    // checking if x and y are numbers is optional
    if(isNaN(x) || isNaN(y)) {
        return "Invalid number";
    }

    switch (operator) {
        case "+":
            answer = x + y;
            break;
        case "-":
            answer = x - y;
            break;
        case "*":
        case "x":
        case "X":
            answer = x * y;
            break;
        case "/":
            answer = x / y;
            break;
        default:
            answer = "Invalid operator";
    }
    return answer;
}

console.log(compute(1,6,"*")); //6
```

</p>
</details>
