/*
A closure is the combination of a function bundled together (enclosed)
with references to its surrounding state (the lexical environment).
In other words, a closure gives you access to an outer function’s scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.
*/

function modifyString (sampleString) {
  const modifier = function () {
    const modifiedString = sampleString + " is modified";
    return "Original String: --->" + sampleString + ", Modified String: ---> " + modifiedString;
  };
  return modifier;
}

const modifier = modifyString("sample string");

/*

function modifyString has two variables sampleString and modifier(function).
Now when modifyString is invoked, it returns modifier.
Usually, when a function is invoked, the memory allocated to the variables present inside gets freed
by the garbage collector. However, in javascript when a function returns another function
the returned function still has access to those variables. The reference to outer scope/environment
explains closures

*/

console.log(modifier());
// [out] Original String: --->sample string, Modified String: ---> sample string is modified