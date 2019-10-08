# Promise Chaining

Imagine that we have a sequence of asynchronous tasks that we would love to be done one after another, while passing the result through the promise chain. This can be very useful for something like loading scripts or other resources. Promises provide a couple of simple ways to achieve that.

Lets take the code we executed from the JS file and analyze it step by step:

    new Promise(function(resolve, reject) { 
    setTimeout(() => resolve(1), 1000);
Promise is set to a timeout of 1000 ms, which is 1 second.

    }).then(function(res) {
    alert("Value: " + res);
    return res * 2;
Handler `.then` is called taking the promise result `res = 1` as an argument. Result of our initial promise is `1`, so this code alerts `Value: 1` and returns `2` to be passed to the next handler.

    }).then(function(res) {
    alert("Value: " + res);
    return res * 2;
We have another `.then` handler, which is taking the previous handlers result, which is `2`. This code alerts `Value: 2`. Again, the result is returned as the result of the promise and being multiplied by 2, so in the next handler, the `res` argument equals `4`.

    }).then(function(res) {
    alert("Value: " + res); 
    });
We received `4` from the last handler and our last alert is with `Value: 4`.
Execution ends with three alerts: `Value: 1`, `Value: 2` and `Value: 4` since we multiplied the argument by `2` at each step.

## How it works 

Promise chaining works because the call to `promise.then` is returning a promise as well, allowing for a chain of `.then` calls that return a value which becomes the result of the promise, so the next `.then` is called along with the result of the previous `.then` handler.

## Usage

We use promise chaining to write way cleaner, yet more meaningful code.

Here's example code of someone who doesn't really have a good grasp of promise chaining:

    load("scriptOne.js").then(script1 => {
        load("scriptTwo.js").then(script2 => {
            load("scriptThree.js").then(script3 => {
                firstScript();
                secondScript();
                thirdScript();
            });
        });
    });

Now you can see that the code from the example above grows towards the right side. As you add more `.then` handlers, your code is slowly getting out of hand, notice the `script1`, `script2`, `script3` variables. Clearly, this code with some more chaining would become unmanageable, with variables such as `script100`. That is where the concept of promise chaining shines. You don't need to pass a new variable to each call, you can just use the initial variable and pass it down the chain. Clearly the person writing code from the above example does not understand the concept of promise chaining.


Now, let's take a look at a proper way of promise chaining:

    load("scriptOne.js")
        .then(script => load("scriptTwo.js"))
        .then(script => load("scriptThree"))
        .then(script => {
            firstScript();
            secondScript();
            thirdScript();
    });

This code is much easier to read. Nootice the lack of scoping, `});` and note that the code does not grow towards the right side. As you add more handlers, it's still very readable. The major point is, `script` variable is being re-used and passed through the chain.
