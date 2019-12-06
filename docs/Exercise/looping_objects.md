1. Given an object 
```js
const person = {
  name: 'John Doe',
  age: 26,
  gender: 'Male'
}
```
Write code to iterate through `person` object and output something like
```js
person.name = John Doe
person.age = 26
person.gender = Male
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
```js
dog.age = 2
```

<details>
<summary>Solution</summary>
<p>

1. 
Use `for...in loop` method.
```js
for(const key in person){
  console.log(`person.${key} = ${person[key]}`)
}
```

Use `Object.keys`
```js
Object.keys(person).forEach(key => console.log(`person.${key} = ${person[key]}`))
```

2. 
Use `for...in loop` method.
```js
for(const key in dog){
  if(dog.hasOwnProperty(key)) {
    console.log(`dog.${key} = ${dog[key]}`)
  }
}
```

Use `Object.keys`
```js
Object.keys(dog).forEach(key => {
  if(dog.hasOwnProperty(key)) {
    console.log(`dog.${key} = ${dog[key]}`)
  }
})
```
</p>
</details>
