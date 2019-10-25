/**
 * Callback functions are derived from a programming paradigm called
 * `functional programming`. This basically can be concluded to this sentence:
 * You can pass (`closure`) functions as an argument to another function.
 *
 * Higher order functions:-  In javascript, functions can be used as value.
 * We can assign function to a variable.
 * Pass them as parameters to another functions.
 * Return them from a function
 *
 * Callback:- We pass a function as parameters to another function, which calls/invokes
 * the provided function. Hence the name Callback
 *
 *
 *
 * look at this example:
 */

const sayHi = (afterHi) => {
  console.log("Hi, ");
  return afterHi();
};

sayHi(() => { console.log("How are you?"); });
// [out] 'Hi, '
// [out] 'How are you?'

/**
 * If you look at the way we called `sayHi`, you will see that, we have not called
 * the function which is going to print `'How are you?'`, we have not even named it (Anonymous function)
 * This is the prototype of the function. The passed function, will act as if it has been defined
 * inside the `sayHi` function. Therefore, you can assume that your function has access to the scope
 * of the other function.
 *
 * example:
 */

const transformNumber = (num, operator) => {
  const test = 2;
  console.log(num);
  console.log(test);
  operator(num);
  console.log(num);
  console.log(test);
};

transformNumber(10, (num) => {
  num = num * num;
  test = 3;
});
// [out] 10
// [out] 2
// [out] 100
// [out] 3

/**
  * One of very common uses of callback functions, is in `Promises`.
  * I suggest you read `promises.js` file, before continuing this section.
  * If you know about javascript `Promise` concept, you should be familiar with
  * `.then()` and `.catch()` functions. These are `Promise`'s prototype methods.
  * When a promise gets resolved (when `.resolve()` gets called), all the arguments
  * passed to the `resolve()` function, will get passed to the function passed to `.then()`
  * function. Look at the following example from MDN official documents:
  */
const p1 = new Promise((resolve, reject) => {
  resolve("Success!");
  // or
  // reject(new Error("Error!"));
});

p1.then(value => {
  console.log(value); // Success!
}, reason => {
  console.error(reason); // Error!
});

/**
 * So, basically the function that we pass to `.then()` function, is a `callback` function.
 *
 * We see usage of `Promise` widely in different API call scenarios.
 * Different HTTP libraries (`fetch, axios, ...`), use javascript `Promise` object,
 * for handling `onSuccess` and `onError` scenarios when calling an API endpoint.
 * When you make an API call, if everything goes well and server's response has some
 * 2xx status code, this API call will be considered as `success` and otherwise, it has `failed`,
 * and some `error` messages should be returned.
 *
 * In the following example, we are going to use `axios` as our HTTP library.
 * But you can simulate the exact same scenario using any other HTTP libraries.
 *
 */

axios
  .get("https://cat-fact.herokuapp.com/facts/random")
  .then(response => {
    console.log(response, "success!");
  })
  .catch(error => {
    console.log(error, "failed!");
  });

/**
 * This process of making HTTP requests can get pretty much complicated.
 * There are many cases that you need to make several API calls which each
 * of them, will rely on the response from some previous requests.
 *
 * (In this tutorial, we are using the `cat-facts` public API to demonstrate
 *  different usages of HTTP libraries. You can read the documentation related
 *  to this API, here: https://alexwohlbruck.github.io/cat-facts/docs/)
 *
 * Let's say we want to retrieve 2 random facts about cats and after retrieving
 * the list of 2 facts, start making another API call to retrieve details of each.
 *
 * According to `cat-facts` docs, we will receive an `_id` field in the list of facts
 * and when we make an API call to `/facts/:id` endpoint, we can get details of that specific fact.
 *
 * Look at the following code snippet:
 */

axios({
  url: "https://cat-fact.herokuapp.com/facts/random",
  method: "GET",
  params: { animal_type: "cat", amount: "2" }
}).then(response => {
  console.log("list success!");
  response.data.forEach((fact, idx) => {
    axios
      .get(`https://cat-fact.herokuapp.com/facts/${fact._id}`)
      .then(factRes => { console.log(`fact #${idx} success: `, factRes); })
      .catch(factErr => { console.log(`fact #${idx} failed: `, factErr); });
  });
}).catch(err => {
  console.log(err, "list failed!");
});

/**
 * You can see that sometimes, we need to make API calls that rely on
 * response of some other API call, therefore we need to make those calls
 * in order, and also, if one of these API calls somewhere in this chain fails,
 * we do not want to continue making next API calls.
 * This specific scenario, can be extended in real lif usage of APIs. You might
 * face some situations that you need to chain more than 4-5 API calls. In these
 * cases, one will end up writing many nested `.then().catch()` blocks. Also,
 * it is not True that we "Always" want to ignore making API calls next in chain,
 * if one of requests in chain fails. So, different situations and more exceptions
 * to handle and apparently, more nested `.then().catch()` code blocks.
 *
 * This situations is referred to as `Callbacks Hell`. It really can turn in to a
 * mess, if you don't take cautions in writing your clean and readable using callback
 * functions. To solve this issue, one might advise to use `async` `await` syntaxes,
 * instead of using callback functions. This approach also have pros and cons. One of
 * the cons of this approach, is instead of nested `.then()` blocks, you are going to
 * need nested `try` `catch` blocks. Sometimes this kind of problems are inevitable.
 */