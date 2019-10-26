# Variables 

A variable is a value, can be changed, paired with an associated symbolic name, make your code more useful and easyful

--------------------

In the Javascript has this types of variables:

**Number**
```javascript
var exemple = 0; //Any number
```

**String**
```javascript
var exemple = "text"; //Any character in quotation marks
```

**Bool**
```javascript
var exemple = true; //or false
```

**Object**
```javascript
var exemple = {name:'carl',years:15}; //any object
```

**Array**
```javascript
var exemple = [1,"test"]; //list of any type of variable
```

**Class**
```javascript
var exemple = new Class(); //any classes
```

In the Javascript you don't need to declare the variable type.

--------------------

There are also ways to declare the variable:

**Var**
```javascript
if(true){
  var exemple = 1; //Declare like this
  exemple = 2;     //Can be changed
  console.log(exemple);
}
console.log(exemple); //Is globally
```

**Let**
```javascript
if(true){
  let exemple = 1; //Declare like this
  exemple = 2;     //Can be changed
  console.log(exemple);
}
console.log(exemple); //Isn't globally, just work in blocks
```

**Const**
```javascript
if(true){
  const exemple = 1; //Declare like this
  exemple = 2;        //Can't be changed, can only be declare one time
  console.log(exemple);
}
console.log(exemple); //Is globally
```
