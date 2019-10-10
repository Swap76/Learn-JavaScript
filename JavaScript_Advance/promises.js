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