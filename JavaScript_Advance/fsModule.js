// Fs is a inbuilt function in nodejs to perform operations on files

// There are always two ways to do fs operation as sync and async 

// Fs library sends data event continuously in this case event emitter comes into picture

// For importing the fs module we have following syntax
const fs = require('fs');

 // Here we created a read stream will give output as a object into string 
const content = fs.createReadStream('./Order.txt');

/* If we dont use the encoding as utf8 then it will print data in the form of buffer only
<Buffer 61 72 72 6f 77 46 75 6e 63 74 69 6f 6e 0a 64 65 73 74 72 75 63 74 75 72 69 6e 67 0a 73 70 72 65 61 64 20 61 6e 64 20 72 65 73 74 0a 74 69 6d 65 72 46 ... 35 more bytes>
*/
content.setEncoding('UTF8');// This encodes the data into our desired type

// Here we are listing to the event of closing of a file
content.on('open',() => {
  console.log("File opend for reading");
});

// Here we are listening to the event called data which will be called when data is present
content.on('data', (data) => {
  console.log(data);
});

// Here we are listing to the event of closing of a file
content.on('close',() => {
  console.log("File ends");
});

// Output is going to be 
/*
File opened for reading
arrowFunction
destructuring
spread and rest
timerFunction
eventloop

promises
fsModule
File ends
*/

// This is a kind of publish , subscribe system our stream is subscriber and file is publisher we can use that using MQTT