# Looping an Object
A for...in loop iterates over properties of an object.

```javascript
for (const key in studentObject) {
  if (key === 105) {
    console.log("The Student's name is ", studentObject[key]);
  }
}
```
In this code we are iterating over all the properties of the studentObject and if the property is __105__ we are logging to the console the value of that property.

The issue with type of looping is that we need to check if the property belongs to the object. We can do this with **hasOwnProperty**
```javascript
for (const key in studentObject) {
	if(studentObject.hasOwnProperty(key)){
		if (key === 105) {
    		console.log("The Student's name is ", studentObject[key]);
  		}
	}
}
```

We can also use other methods to convert an object into an array, loop through the array and check for a specific key.
- Object.keys
- Object.entries

## Object.keys
We can use **Object.Keys** to convert into an array of property values and we can loop through the array as follows,
```javascript
const keys = Object.keys(studentObject)
for(const key of keys){
	if (key === 105) {
		console.log("The Student's name is ", studentObject[key]);
	}
}
```

## Object.entries
We can use **Object.Keys** to convert into an array of property values and we can loop through the array as follows,
```javascript
const entries = Object.entries(studentObject)
for(const [key, value] of keys){
	if (key === 105) {
    		console.log("The Student's name is ", value);
  	}
}
```
