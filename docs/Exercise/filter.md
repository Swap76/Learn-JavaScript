### Filter Exercises
**1. Filter the array with values greated than 10**
1. **Create** an array called numbers with the next elements
`array` = [21,10,5,9,100,2,5,6,90,25,14,32]
2. **Filter** the numbers greater than 10
3. **Print** the result of filter

   **Expected Output**:
   [21,100,90,25,14,32]

**2. Write a JavaScript code that filters an array of integers to even integers and odd integers.**
```javascript
let numbers = [1,232,143,101,73,99,23,1998];
// let even_integers = <your filter code here> 
// let odd_integers = <your filter code here>

console.log(even_integers); // [232,1998]
console.log(odd_integers); // [1,143,101,73,99,23]
```
<details>
<summary>Solution</summary>
<p>

```javascript
let numbers = [1,232,143,101,73,99,23,1998];
let even_integers = numbers.filter(num => num%2==0);
let odd_integers = numbers.filter(num => num%2==1);

console.log(even_integers); // [232,1998]
console.log(odd_integers); // [1,143,101,73,99,23]
```

</p>
</details>
