### String Operations Exercises

**1. Write a JavaScript function to convert a string in abbreviated form.** 

Example of call of the function
```js

console.log(abbrev_name("Musa Bajwa"));
```


```
Example Output:- 
"Musa B."
```


**2. Write a JavaScript function to concatenates a given string n times (default is 1).**

```javascript
//Example of function call
function repeat(){
  //write code here
}

console.log(repeat('Lol!'));
console.log(repeat('Lol!',2));
console.log(repeat('Lol!',3));
```

```
Example Output

"Lol!"
"Lol!Lol!"
"Lol!Lol!Lol!"
```


<details>
<summary>Solution</summary>
<p>

```javascript
function repeat(string, times){
  var newString="";
  for(var i=0; i<times; i++){
    newString += string; 
  }

  return newString;
}
```

</p>
</details>


**3. Write a JavaScript function to strip leading and trailing spaces from a string.**

```javascript
//Example of function call
function strip(){
  //write code here
}

console.log(strip("cool"));
console.log(strip(" cool "));
console.log(strip("  cool  "));
```

```
Example Output

"cool"
"cool"
"cool"
```

<details>
<summary>Solution</summary>
<p>

```javascript
function strip(string){
  return string.replace(/(^\s+|\s+$)/g,'');
}
```

</p>
</details>
