# Async Await

`async` and `await` is **syntactic sugar** for using `promises`. That means that the `async` and `await` keywords are transpiled to normal `promise` syntax.

A simple example of usage of `async` and `await`:

```JavaScript
// A simple example:
async function example(){
  const aVariable = await aFunction();
  console.log(aVariable)
}

example();
```

`async` is written before the function keyword when creating a new function, and enables the usage of the `await` keyword within the function. `await` is only used before function calls that return a promise. We can therefore directly see that `aFucntion` above will be run asynchronously, and return a promise.

Let's say that `aFunction` returns a promise that resolves to the string `hello`. What happens when using the `Async / Await` keyword is:

0. The function `example` is invoked.
1. The function `aFunction`, which returns a `promise`, is executed asynchronously.
1. The code waits for the promise returned by `aFunction` to resolve.
1. When the `promise` is resolved, then `aVariable` is assigned whatever the `promise` is resolved to (`'hello'`).
1. The `console.log` prints `hello` to the standard output.

Let's remove the `Async / Await`.

```JavaScript
// A simple example:
function example(){
  const aVariable = aFunction();
  console.log(aVariable)
}

example();
```

What happens in this example is:

1. The function `aFunction`, which returns a `promise`, is executed asynchronously.
2. `aVariable` is assigned the promise.
3. The `console.log` prints `Promise { <state>: "pending" }`.
4. The promise resolves to `'hello'`, but that `'hello'` is never handled.

## Extended explanation

```JavaScript
async function getUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log('THIS LOGS 10 USER FROM JSON PLACEHOLDER >>', data)
  return data
}
```

or as arrow function

```JavaScript
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log('THIS LOGS 10 USER FROM JSON PLACEHOLDER >>', data)
  return data
}
```

The two functions above can be written using the `Promise` syntax. It is then written as follows:

```JavaScript
function getUsers() {
  return new Promise(resolve => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('THIS LOGS 10 USER FROM JSON PLACEHOLDER >>', data)
        resolve(data);
      })
  })
}
```

If you do not return anything from the `async function`, then the promise is simply resolved to `undefined`.

When having `async/await` translated, we can see a two important things.

1. An async function always returns a promise
2. Async function does not have error handling

```JavaScript
console.log(getUsers() instanceof Promise) // true
```

The error is best handled by using a `try/catch` statement inside the async function. **You can then either handle the error in the async function or throw an error and handle it outside the async function.**

```JavaScript
// Handle error inside of the async function
async function getUsers () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await ressspondse.json()
    console.log('THIS LOGS 10 USER FROM JSON PLACEHOLDER >>', data)
  } catch (error) {
    console.log(error) // ReferenceError: "ressspondse is not defined"
  }
}

getUsers()

// Handle error outside the async function
async function getUsers () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await ressspondse.json()
    console.log('THIS LOGS 10 USER FROM JSON PLACEHOLDER >>', data)
  } catch (error) {
    throw error;
  }
}

getUsers().catch(error => {
  console.log(error) // ReferenceError: "ressspondse is not defined"
})
```
