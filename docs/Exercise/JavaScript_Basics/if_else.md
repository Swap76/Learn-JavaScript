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

**4. Write a JavaScript function that tells the user whether a code is the right password or not. If the password is correct then the output should be "Vault opening...", if it's not the output should be "Wrong Password!".**

```
Example Input:
"abcd12345"
with correct password being "abcd12345"
```

```
Expected Output:
"Vault opening..."
```
<details>
<summary>Solution</summary>
<p>

```javascript
let password = "abcd12345";

function check(code){
  if (code === password) {
    console.log("Vault opening...");
}
  else {
    console.log("Wrong Password!");
  }
}

```

</p>
</details>

5. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.  
Sample numbers : 3, -7, 2 
Output : The sign is -

6. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.  
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 

7. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. Go to the editor

Student Name	Marks
David	80
Vinoth	77
Divya	88
Ishitha	95
Thomas	68
The grades are computed as follows :

Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A

8. According to Wikipedia a happy number is defined by the following process : 
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". 
Write a JavaScript program to find and print the first 5 happy numbers.

9. You are given a variable marks. Your task is to print: 

- AA if marks is greater than 90. 
- AB if marks is greater than 80 and less than or equal to 90. 
- BB if marks is greater than 70 and less than or equal to 80. 
- BC if marks is greater than 60 and less than or equal to 70. 
- CC if marks is greater than 50 and less than or equal to 60. 
- CD if marks is greater than 40 and less than or equal to 50. 
- DD if marks is greater than 30 and less than or equal to 40. 
- FF if marks is less than or equal to 30.

10. Write a function named pluralize that:
	takes 2 arguments, a noun and a number.
	returns the number and pluralized form, like "5 cats" or "1 dog".
	Call that function for a few different scores and log the result to make sure it works.
	Bonus: Make it handle a few collective nouns like "sheep" and "geese".

11. Write a JavaScript program that prompts for an employee name, SSN, rate of pay, and hours worked, and computes the total pay for the employee. If the hours worked is greater than 40, use one and the half for overtime rate (for hours beyond 40) and compute accordingly.