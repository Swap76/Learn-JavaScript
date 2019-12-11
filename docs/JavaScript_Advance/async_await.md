```js
// Async Await Flow on JavaScript

// the most common case to use async await is to handle promises for fetch request

// When you need to use async keyword needs to add the reserved keyword before the function keyword
// this is in case of you use a normal function

async function getUsers () {
  // we use try/catch block because the async/await don't catch by default the errors
  // from a fetch request
  try {
    // first use the await keyword to fetch some data for an API
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // use again to get the values from the promise that returns the fetch request with the data from the API
    const data = await response.json()
    // at that moment we are able to use the data
    console.log('THIS LOGS 10 USER FROM JSON PLACEHOLDER >>', data)
  } catch (error) {
    // if something fails in the try block get an error in this catch block
    console.log('DISPLAY AN ERROR', error)
  }
}

// When you need to use async keyword needs to add the reserved keyword after the = sign
// this is in case of you use a arrow function

const getUsers = async () => {
  // we use try/catch block because the async/await don't catch by default the errors
  // from a fetch request
  try {
    // first use the await keyword to fetch some data for an API
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // use again to get the values from the promise that returns the fetch request with the data from the API
    const data = await response.json()
    // at that moment we are able to use the data
    console.log('THIS LOGS 10 USER FROM JSON PLACEHOLDER >>', data)
  } catch (error) {
    // if something fails in the try block get an error in this catch block
    console.log('DISPLAY AN ERROR', error)
  }
}
```