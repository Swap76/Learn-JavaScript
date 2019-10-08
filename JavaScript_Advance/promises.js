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