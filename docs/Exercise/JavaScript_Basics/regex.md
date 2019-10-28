1. Write a JavaScript program to test the first character of a string is uppercase or not. 
Expected Answer: 
```js
   regexp = /^[A-Z]/;
```
2. Write a JavaScript program to check a credit card number. 
Expected Answer:
```js 
   regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/
```

3. Write a pattern that matches e-mail addresses. 
	The personal information part contains the following ASCII characters.
	Uppercase (A-Z) and lowercase (a-z) English letters.
	Digits (0-9).
	Characters ! # $ % & * + - / = ? ^ _  { | } ~
   Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

Expected Answer:
```js regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/```

4. Write a JavaScript program to search a date within a string. 
Expected Answer: 
```js regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;```

5. Write a JavaScript program that work as a trim function (string) using regular expression. 
Expected Answer:
```js result = str.replace(/^\s+|\s+$/g, '');```

6. Write a JavaScript program to count number of words in string. 
Note : 
- Remove white-space from start and end position. 
- Convert 2 or more spaces to 1. 
- Exclude newline with a start spacing.
  
Expected Answer: 
 ```js
function count_words()
{
	str1= document.getElementById("InputText").value;
	
	//exclude  start and end white-space
	str1 = str1.replace(/(^\s*)|(\s*$)/gi,"");
	
	//convert 2 or more spaces to 1  
	str1 = str1.replace(/[ ]{2,}/gi," ");
	// exclude newline with a start spacing  
	str1 = str1.replace(/\n /,"\n");
	document.getElementById("noofwords").value = str1.split(' ').length;
}
```
  
