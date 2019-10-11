# MongoDB - Connecting and Debugging like a Pro

## Install MongoDB
We want to create a connection to a mongodb. To achieve this task we need to set up a database on our local machine.

There are not that much ways to do this. It's for the most part, just like any other program you want to install.

[The install MongoDB section of the docs][wiki] tells you the exact steps to reproduce that should then result in the successful
installation of mongodb.

You first choose your operating system and then follow along the steps provided by the documentation.

:tada: Your database is now installed.

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

[wiki]: https://docs.mongodb.com/guides/server/install/