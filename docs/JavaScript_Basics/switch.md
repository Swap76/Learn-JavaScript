# Switch

OK, now you now how to check condition and then execute a block of code depending on that condition. Assume we have 5 conditions to check. Let's try it.

assume we check for user age between 5 numbers
```javascript

let age = 30, desc = '';
if (age == 10) {
  desc = 'boy'
} else if (age == 15) {
  desc = 'teenager'
} else if (age == 20) {
  desc = 'young man'
} else if (age == 30) {
  desc = 'grown man'
} else if (age == 50) {
  desc = 'old man'
}
 // desc = grown man

```

but that's boring in case we have 50 conditions!

And here comes the **SWITCH** use. Basically, it is used when we have multiple choices or cases and we have different result depending on each case. LEt's try the previous example in the switch way

```javascript

switch (age) {
  case 10:
    desc = 'boy'
    break;
  case 15:
    desc = 'teenager'
    break;
  case 20:
    desc = 'young man'
    break;
  case 30:
    desc = 'grown man'
    break;
  default:
    desc = 'old man'
}
 // desc = grown man

```

but let's clarify the new syntax:
```javascript
 Switch(here gos the variable which value is compared){
   case (value to compare):
     code to execute if value is matched
     break; ((will be explained at the end))

   case (value to compare):
     code to execute if value is matched
     break; ((will be explained at the end))

    default: ((will be explained at the end))

 }

 ```
How switch works: 
- Switch accepts a variable to compare its value, then loops from the first case to the last case to check if the variable value matches any case of its cases and here we have two possibilities:

    - variable value matched any case: then code of this case will be executed and then the BREAK statement works to break or end the loop and exit the Switch statement

    - variable value didn't match any case then if there is a default case, it will be executed otherwise no case will be executed
- **BREAK** statement is used to break the loop of the Switch if case is matched. If a break is missed then the code will keep executing cases code to the end of the switch statement which may cause wrong results.
- **DEFAULT** case is an optional case which used as a backup case that applies when all cases are not matched. We don't need break after default case because we are already at the end of the Switch statement


