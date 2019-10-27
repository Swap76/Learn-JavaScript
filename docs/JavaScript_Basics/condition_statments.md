# IF, ELSE IF, ELSE CONDITION
Conditional statements run specific blocks of code based on certain perimeters that you set. Like other code it reads top to bottom so the order that you put your conditions in matter.

Example of an if/else if/else:
```
if(this statement is true){
  do this
} else if (this statement is true){
  do this
} else{
  do this
}
```
If's always come first and have a set of parenthesis with a statement in them that you are checking to see if it's true, if it is the code in the curly brackets is run, otherwise it would move on to the else if and see if that statement is true. If it is then it runs that block of code, if not then it would run the code in the else statement. Once a statement is deemed true and the code is run it doesn't continue to read through the code even if there is a more accurate  statement lower down. A good example of where this matters would be the common coding challenge fizzbuzz. The idea of fizzbuzz is that you want to log all the numbers from 1-100 however if it's divisible by 3 print "fizz", 5 print "buzz", and if it's divisible by both 3 and 5 print "fizzbuzz".
If we write our if's the way the problem is stated we would would write:
```
if(num % 3 == 0){
  console.log("fizz")
} else if(num % 5 == 0){
  console.log("buzz")
} else if(num % 3 == 0 && num % 5 == 0){
  console.log("fizzbuzz")
} else {
  console.log(num)
}
```
In this case every time we'd hit a number that should print fizzbuzz we'd get fizz because that is a truthful statement and it's not looking for a more correct answer.
To account for that we'd want to adjust our statement order to:
```
if(num % 3 == 0 && num % 5 == 0){
  console.log("fizzbuzz")
} else if(num % 5 == 0){
  console.log("buzz")
} else if(num % 3 == 0){
  console.log("fizz")
} else {
  console.log(num)
}
```

## What if we don't write else if but just another if?
Sometimes you see code that has a number of if's in a row but no else if's or else's in this case it's checking each condition in that case each if

This code will only print "it's a number":
```
var number = 2
if(typeof number === "number"){
console.log("it's a number")
} else if(number % 2 === 0){
console.log("it's even")
}
```
However this code will print both "it's a number" and "it's even"
```
var number = 2
if(typeof number === "number"){
console.log("it's a number")
}
if(number % 2 === 0){
console.log("it's even")
}
```

## What if we only have an if?
If there is only one if then it only does that code if the condition is true and nothing if it's false.

For example:
```
if(number % 2 === 0){
console.log("it's even")
}
console.log(number)
```
In this case if `number` is even it will print it's even and it will always print the number. 
