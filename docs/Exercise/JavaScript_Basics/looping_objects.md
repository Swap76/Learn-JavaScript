1. Given an object 
```js
const person = {
  name: 'John Doe',
  age: 26,
  gender: 'Male'
}
```
Write code to iterate through `person` object and output something like
```
// person.name = John Doe
// person.age = 26
// person.gender = Male
```

2. Given the following code
```js
function Dog (age) {
  this.age = age;
}

Dog.prototype = {
  bark: () => console.log('woof')
}

const dog = new Dog(2);
```

Write code to iterate through `dog` object and output something like
```
// dog.age = 2
```
