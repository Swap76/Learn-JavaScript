### If Else Exercises

**1. Write a JavaScript program to determine if a number is positive, negative, or zero.**

```
Example Input:
6  
0  
-20
```

```
Expected Output:
"positive"  
"zero"  
"negative"  
```

**2. Look up how to get the current time in Javascript. Based on this, create a series of if-else statements that will check against the current time and print either:**

- "Good morning!" if it's from 6:00am-12:00pm
- "Good afternoon!" if the time is between 12:00pm - 6:00pm
- "Good evening!" if the time is from 6:00pm to Midnight 
- "Good night!" if the time is from Midnight to 6:00am. 

**3. Write a JavaScript code that identifies whether a number is odd or even. _Hint: A number is even if it is divisible by two, otherwise it is odd._**

```
Example Input:
143 
27  
100
```

```
Expected Output:
"odd"  
"odd"  
"even"  
```
<details>
<summary>Solution</summary>
<p>

```javascript
let x = 143; //change value
if (x%2 == 0) {
    console.log('even');
}
else {
    console.log('odd');
}
```

</p>
</details>
