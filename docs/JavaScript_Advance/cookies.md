```js
// #1 Simple usage of cookies
document.cookie = "movie=Jungle Book";
document.cookie = "actor=Balu";
console.log("Simple usage:" + document.cookie);

// #2 Get a cookie with the name 'actor'
document.cookie = "movie=Jungle Book";
document.cookie = "actor=Balu";
const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)actor\s*\=\s*([^;]*).*$)|^.*$/, "$1");
console.log("Cookie with the name 'actor':" + cookieValue);

// #3 Set cookie and execute code only once if cookie doesn't exist yet
if (document.cookie.replace(/(?:(?:^|.*;\s*)doThisOnlyOnce\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
  alert("Do something here!");
  document.cookie = "doThisOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}
// Reset the previous code
document.cookie = "doThisOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

// #4 Check a cookie existence
// ES5
if (document.cookie.split(";").filter(function (item) {
  return item.trim().indexOf("actor=") == 0;
}).length) {
  console.log("The cookie \"reader\" exists (ES5)");
}
// ES2016
if (document.cookie.split(";").filter((item) => item.trim().startsWith("actor=")).length) {
  console.log("The cookie \"actor\" exists (ES6)");
}

// #5 Check that a cookie has a specific value
// ES5
if (document.cookie.split(";").filter(function (item) {
  return item.indexOf("actor=Balu") >= 0;
}).length) {
  console.log("The cookie \"actor\" has \"Balu\" for value (ES5)");
}
// ES2016
if (document.cookie.split(";").filter((item) => item.includes("actor=Balu")).length) {
  console.log("The cookie \"actor\" has \"Balu\" for value (ES6)");
}```