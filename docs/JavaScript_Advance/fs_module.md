# FS Module
FS is an inbuilt module in NodeJS used to perform operations on files and directories. There are two ways to do an FS operation: synchronous and asynchronous. The FS library sends event data continuously using NodeJS EventEmitter.

To use FS module, first import it with the following syntax.
```js
const fs = require("fs");
```
To read from a file, web can use `createReadStream()` method.
```js
const content = fs.createReadStream("./resources/file/order.txt");
```
If we don't set the encoding type, the data will be printed out in the form of buffer.
```
<Buffer 61 72 72 6f 77 46 75 6e 63 74 69 6f 6e 0a 64 65 73 74 72 75 63 74 75 72 69 6e 67 0a 73 70 72 65 61 64 20 61 6e 64 20 72 65 73 74 0a 74 69 6d 65 72 46 ... 35 more bytes>
```
Set the encoding to use UTF-8.
```js
content.setEncoding("UTF8);
```
Because the response object in this case is also a stream, we can listen to events happening on the file.
For example, here we are listening to the event when our file is successfully opened.
```js
content.on("open", () => {
  console.log("File opened for reading");
});
```
We can also listen to an event called `data` that will be called when data is present.
```fs
content.on("data", (data) => {
  console.log(data);
});
```
We can also listen to the event when a file is closed.
```fs
content.on("close", () => {
  console.log("File ends");
});
```

Working with above example, reading the `./resources/file/order.txt` file will results in the following ouput.

```
File opened for reading
arrowFunction
destructuring
spread and rest
timerFunction
eventloop

promises
fsModule
File ends
```

In conclusion, createReadStream is similar to a publish-subscribe system where our stream is the subscriber and the file is the publisher, and as such can be implemented using MQTT.