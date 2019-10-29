# Loops
There are different four main types of loops in Javascript. All of them are a way move over a set of data and interact with it but they have different applications and syntax.

## For Loops
For loops are the most common types of loops in JS.

```js
var food = ["rice", "beans", "tortilla"]
for (var i = 0; i < food.length; i++){
  console.log("Burritos have " + food[i])
}
```

This code will output:
`"Burritos have rice"`
`"Burritos have beans"`
`"Burritos have tortilla"`

*But how is this happening?*
2 important things to remember:
 - Arrays are 0 indexed
 - the `.length` method counts the number of items in the array

The syntax of the for loop says that we have a variable `i` that is equal to 0, as long as `i` is less than the length of food, and `i++` means every time we get through the code increase the value of `i` by one. So the first time through `food[i]` is equal to `food[0]` which is "rice", then `i` increases by one making it `food[1]` which is "beans". The third time through `i` = 2 which is `food[2]` which is "tortilla". When `i` increases this time it's equal to 3 which is not less than 3 so we have completed the for loop and the code would move on to whatever was below the for loop.
*An important thing to remember to make your i less than your length or you run the risk of causing an infinite loop.*

## While Loops
While loops are less common than for loops but also very powerful. While loops say while this thing is true do this

```js
var num = 0
while(num < 5){
  console.log(num)
  num++
}
```

This code is running while num is less than 5.
If we had this code instead:

```js
var num = 5
while(num < 5){
  console.log(num)
  num++
}
```
The while loop would never run because that condition is never true

*An important thing to remember to make sure your condition has a way to be false or you will get an infinite loop.*

## Do While Loops
Do While loops are similar to while loops but they will alway run once.

```js
var num = 5
do {
  console.log(num)
  num++
} while(num < 5)
```

Even though this wouldn't run in a while loop a do while loops always run at least once so you would see `num` in the console

*An important thing to remember to make sure your condition has a way to be false or you will get an infinite loop.*


## For In Loops
Our article [looping an object](./looping_an_object.md) covers for in loops. While these are primarily used with objects they can also be used with arrays. the down side of this is that you cannot access the index like you can with a regular for loop. If you need the index I'd suggest a regular for loop.
