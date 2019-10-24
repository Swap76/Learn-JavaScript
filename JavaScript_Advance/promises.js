// Promises provide a more convenient syntax to handle asynchronous operations without wanting to tear your hair out.
// Consider this example, pre promises:
const getAsyncDataWithCallbacks = (string, cb) => {
  setTimeout(() => {
    cb(`${string} bar`);
  }, 1000);
};

// Assume we have a number of async operations that need to run in sequence - we need the result to grab the next result.
getAsyncDataWithCallbacks("foo", firstResult => {
  getAsyncDataWithCallbacks(firstResult, secondResult => {
    getAsyncDataWithCallbacks(secondResult, thirdResult => {
      // on and on and on...
    });
  });
});

// This is eased via the use of promises. You can change these async calls to return a promise instead that wraps that value like so:
const getAsyncDataWithPromises = string => {
  return new Promise((resolve, reject) => {
    // Assume an async operation here. We'll set a timeout to give an example.
    // After 5 seconds, our data will resolve.
    setTimeout(() => resolve(`${string} bar`), 1000);
  });
};

getAsyncDataWithPromises("foo")
  .then(firstSet => getAsyncDataWithPromises(firstSet))
  .then(secondSet => getAsyncDataWithPromises(secondSet));
// ... etc. etc. etc.

// Or, a more simplified version using references
getAsyncDataWithPromises("foo")
  .then(getAsyncDataWithPromises)
  .then(getAsyncDataWithPromises);

// As shown above, using promises allows us to create "chains" of asynchronous operations that can be run one after another.
// `then` will not be called until a promise's value is resolved. `catch` will only be called if something goes wrong.
getAsyncDataWithPromises()
  .then(data => {
    // ... use data
  }).catch(e => {
  // ... handle exception
  });

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