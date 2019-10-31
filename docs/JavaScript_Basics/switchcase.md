# Switch Statement

## 1. Basic usage of `switch`

The switch statement is used to perform different actions based on up to n+1 possible outcomes of a single expression.

### Syntax
```javascript
switch (EXPRESSION) {
    case X:
        // code block
        break;
    case Y:
        // code block
        break;
    case Z:
        // code block
        break;
    default:
        // code block
}
```

### How switch operates

The switch **EXPRESSION** is evaluated once. Then the value of the evaluation is compared to each case, top to bottom. A `break` stops execution to fall through to the next case (see advanced usage of `switch`). If none of the cases match but there is a `default` clause, this will be executed.

#### Example
Turn the number `Date.getDay()` into the name of the day.

```javascript
let day = "";
switch((new Date).getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
```

## 2. Advanced usage of `switch`

### `default` cases
The `default:` keyword defines a default set of code instructions to be executed if none of the cases match the evaluated expression.

#### Example
A random number between 1 and 3 is generated. Is it 1 or 2?

```javascript
switch(Math.ceil(Math.random() * 3)) {
    case 1:
        return "The number is 1";
    case 2:
        return "The number is 2";
    default:
        return "The number is neither 1, nor 2!";
}
```

The default case does not need to be the last case in the switch block, it simply improves readability.

### Fall through

Without the `break` keyword or a `return` execution falls through to the next case after the currently selected one.

#### Example

Depending on the current weekday a different message appears.

```javascript
switch((new Date).getDay()) {
    case 0:
        console.log("I need to go back to work tomorrow :(")
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("I wish it was the weekend already");
        break;
    case 6:
        console.log("Saturday is my favorite day of the week!");
}
```

### Strict comparison

Switch statements use strict `===` comparison. The types need to match for a case to be selected.
