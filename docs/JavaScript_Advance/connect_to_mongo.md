```js
const mongo = require("mongoose");

//           protocol   hostname port  database
const URL = "mongodb://localhost:27017/database"; // url of mongodb server

// error handling option one
mongo.connect(URL, { useNewUrlParser: true }).then(() => {
  // this code will be executed if the script is able to establish a connection to the mongodb.
  console.log("Succeed! The connection is now established.");
}).catch((err) => {
  // this code will be executed once the script fails to connect to the mongodb.
  console.error("---> Error handling option one: An error occurred. Please have a look at the stacktrace beyond.");
  console.error(err);
});

// error handling option two
mongo.connection.on("error", (err) => {
  // this code will also be executed once the script fails to connect to the mongodb.
  console.error("---> Error handling option two: An error occurred. Please have a look at the stacktrace beyond.");
  console.error(err);
});```