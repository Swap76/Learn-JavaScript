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


new Promise(function(resolve, reject){ 
    var request = new XMLHttpRequest(); // We define a new request.
    request.open('GET', 'https://openlibrary.org/api/books?bibkeys=ISBN:0201558025&format=json'); // Defining the API endpoint and the request method.
    request.send(); // Request is sent.
    request.onload = () => request.status == 200 ? resolve(request) : reject(request); // Check if request succeeded (response 200 = OK), otherwise, reject the promise.
    })
    .then(function(result) {
        return(result.response); // Due to the resolve(request), request is being passed down as a JSON object in the variable result, we then get the part that we need and pass it further (request response)
    })
    .then(function(result) {
    return JSON.parse(result); // We parse the JSON response from the API and return it.
    })
    .then(function(result) {
        alert(result[Object.keys(result)[0]].info_url); // In the last handler, we simply output the information we need.
    });