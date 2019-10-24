# JSON Parse and Stringify

The `JSON.parse()` method parses a JSON string, which turns the JSON string into an object.

A version of `JSON.parse()` is also built into `fetch` so you can use it like this:

```js
// Make the request with fetch
let catFacts = await fetch(catFactsEndpoint);

// Parse the catFacts to a JavaScript object
// We use `await` because `.json()` is asynchronous
let parsedCatFacts = await catFacts.json();
```

# JSON Stringify

The `JSON.stringify()` method turns a JavaScript object into a JSON string. `JSON.Stringify` takes 3 arguments:

- The first argument is the value you want to output

- The second argument is a transformer function in case you want to transform your data

- The last argument is the amount of indentation you want.
