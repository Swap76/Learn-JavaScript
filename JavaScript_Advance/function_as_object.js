/*

Functions are special type of objects that has key-value pairs along with some code which gets executed

*/

function returnName (name) {
  return name;
}

returnName.hiddenObj = {
  name: "i am a javascript object"
};

console.log(returnName("hello")); // hello
console.log(returnName.hiddenObj); // { name : 'i am a javascript object' }