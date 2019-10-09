# MongoDb - Connecting and Debugging like a Pro

## Prerequisites
- Have a mongodb server up and running.

## First things first - Installation
```sh
$ npm i mongoose
```

This will add mongoose to our dependency section in our `package.json` file.

We can now refer `mongoose` in our javascript file by declaring a constant:
```js
const mongoose = require('mongoose');
```
In order to connect to a database specify a connection URL.
```js
const url = `mongodb://localhost:27017/database`;
```
where `localhost` is the hostname running the database, `27017` the standard mongodb port and `database` the name of the database mongoose should connect to.