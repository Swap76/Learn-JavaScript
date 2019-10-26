# Express

## What is Express?
Express.js is a Node js web application server framework that helps to build single page and hybrid web application.
It is Fast, unopinionated, minimalist web framework, it means that developers have a right to design or structure the application how they want.

## What can you do with Express?
You can build the following stacks
 - MongoDB, Express.js, AngularJS, and Node.js. `MEAN`
 - MongoDB, Express.js, React, and Node.js. `MERN`
 - MongoDB, Express.js, Vue, and Node.js. `MEVN`

## How to install Express?
 > npm install express

## How to configure port?
```js
const port = 3003;
```
However, If port is taken there will be an issue when we deploy our project to server. it is better we to configure it dynamically.

```js
const port = process.env.PORT || 3003;
```


## How to import Express?
```js
const app = express();
```

## How to access Route?
```js
const routes = express.Router();
```
Express has `Router` method that will help us to use `Http method`. for example `get`, `put`, `post` and `patch`.

## get Methods
Get method is used to request a resource from the server.
```js
routes.get("/system_info", (req, res) => {
  res.send("System on!");
});
```
`"/system_info"` our routes.
`req` contains information about the http request.
`res` contains information about the http response.
`res.send("System on!");` is a message to display on screen after `get` request.

## How to access data?
If we want to pass json data in our express app we need to configure it. lets say we are expecting `json` data.
```js
app.use(express.json());
```
## How to configure routes?
```
app.use(routes);
```
## How to start nodejs server?
```js
app.listen(port, () => console.log(`Server running in port ${port}`));
```

*Full example*
```js
const express = require("express");

const port = 3003;
const app = express();

const routes = express.Router();

routes.get("/system_info", (req, res) => {
  res.send("System on!");
});

app.use(express.json());
app.use(routes);
app.listen(port, () => console.log(`Server running in port ${port}`));
```