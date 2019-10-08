new Promise(function(resolve, reject){ 
    setTimeout(() => resolve(1), 1000);
    // Promise set to a timeout of 1000ms, which is 1 second.

    }).then(function(res) { // .then handler is called taking the promise result (1) as an argument
    alert("Value: " + res); // result of our initial promise is 1, so this code alerts Value: 1
    return res * 2; // This .then handler itself is returning a promise, which allows us to keep chaining .then handlers further
    
    }).then(function(res) { // we have another .then handler, which is taking the previous handler's result (2)
    alert("Value: " + res); // Value of the result is now 2, since the last handler returned res*2 = 1 * 2 = 2
    return res * 2; // We return the current res value multiplied by 2, so 2 *2 = 4

    }).then(function(res) {
    alert("Value: " + res); // We received 4 from the last handler and our output is an alert with Value: 4. 
    // - Execution ends with Value: 1, Value: 2, Value: 4 alerts.
});


