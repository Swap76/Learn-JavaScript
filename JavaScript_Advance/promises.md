Promises provide a more convenient syntax to handle asynchronous operations without wanting to tear your hair out.

Consider this example, pre promises:
```javascript
// Assume we have a number of async operations that need to run in sequence - we need the result to grab the next result.
getAsyncData(function (firstSet) {
  getSecondSet(firstSet, function (secondSet) {
    getThirdSet(secondSet, function (thirdSet) {
      //on and on and on...
    });
  });
});
```

Notice the nested layers of callbacks - callbacks inside of callbacks. This is commonly referred to as "callback hell" -
where we have too many callbacks to the point of making our code unmanageable.

This is eased via the use of promises. You can change these async calls to return a promise instead that wraps that value like so:

```javascript
const getAsyncData = () => {
  return new Promise((resolve, reject) => {
    //Assume an async operation here. We'll set a timeout to give an example.
    //After 5 seconds, our data will resolve.
    setTimeout(() => resolve('sample data'), 5000);
  });
}
```

Our callback chaining above instead now becomes:

```javascript
getAsyncData()
  .then(firstSet => getSecondSet(firstSet))
  .then(secondSet => getThirdSet(secondSet));
  //... etc. etc. etc.

// Or, a more simplified version using references
getAsyncData()
    .then(getSecondSet)
    .then(getThirdSet);
```

As shown above, using promises allows us to create "chains" of asynchronous operations that can be run one after another.
`then` will not be called until a promise's value is resolved. `catch` will only be called if something goes wrong.

````javascript
getAsyncData()
  .then(data => {
    //... use data
  }).catch(e => {
    //... handle exception  
  });
````

Some further examples:

```javascript
// promises promise the nodejs main thread that i'm going to come after doing a particular task

const a = new Promise((resolve, reject) => { // This is a empty promise
  // resolve will only be called if there is data to return like resolve(data);
  // resolve will reject the promise and send the error back
});

const b = new Promise((resolve, reject) => {
  reject("Hii");
});

b.then((value) => {
  console.log(value);
})
  .catch((value) => {
    console.log(value);
  });

// you can chain promises like so:
// Assuming we have an asynchronous call to retrieve a value like so:
const asyncCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 2000);
});

asyncCall
  // will become 'FOO'
  .then(val => val.toUpperCase())
  // converted back to 'foo'
  .then(val => val.toLowerCase())
  // appended with ' bar' to become 'foo bar'
  .then(val => `${val} bar`)
  // console logs 'foo bar'
  .then(console.log);
```