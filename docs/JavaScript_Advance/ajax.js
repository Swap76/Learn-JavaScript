/* If we want to access the data, we need two .then() handlers (callback). But if we want to manipulate the resource, we need only one .then() handler. However, we can use the second one to make sure the value has been sent. */
// Basic blueprint
fetch(url)
  .then(response.something) // Define response type (JSON, Headers, Status codes)
  .then(data); // get the response type

// Practical example
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)));