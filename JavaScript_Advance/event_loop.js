setTimeout(() => {
  console.log("Hey im setTimeout");
}, 3000); // Here program goes into waiting state till timer becomes zero

console.log("Last statement"); // This statement gets printed first

// This enables the non blocking using event based management

console.log("a");
setTimeout(() => {
  console.log("b")
}, 2000);
console.log("c");
setTimeout(() => {
  console.log("d");
}, 0)
//except answer : a , c , d , b