/*
The try statement lets you test a block of code for errors.

The catch statement lets you handle the error.

The throw statement lets you create custom errors.

The finally statement lets you execute code, after try and catch, regardless of the result.
*/

/*
    try {
    Block of code to try
    }
    catch(err) {
    Block of code to handle errors
    }

*/
console.log("pkp");
try {
  addalert("Piyush priyadarshi");
} catch (err) {
  console.log(err);
  /*
  ReferenceError: addalert is not defined
    at Object.<anonymous> (F:\piyush\HacktoberFest_2019\Learn-JavaScript\JavaScript_Advance\tryCatch.js:22:3)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)
  */
}

message = document.getElementsByTagName("input");
message.innerHTML = "";
input = document.getElementsByTagName("input").value;
try {
  if (input == "") {
    // if the input is empty then throw empty error
    throw "empty";
  }
  if (isNaN(input)) {
    // if the input is Not a Number then throw not a number error
    throw "not a number";
  }
  x = Number(input);
  if (x < 5) {
    // if the input is less than 5 then throw too low error
    throw "Too low";
  }
  if (x > 10) {
    // if the input is greater than 10 then throw too high error
    throw "Too high";
  }
} catch (err) {
  message.innerHTML = "Input is " + err;
} finally {
  // Empty the input irrespective of the functionality
  document.getElementsByTagName("input").value = "";
}
/*
    Different types of the Error in JavaScript

    EvalError	An error has occurred in the eval() function
    RangeError	A number "out of range" has occurred
    ReferenceError	An illegal reference has occurred
    SyntaxError	A syntax error has occurred
    TypeError	A type error has occurred
    URIError	An error in encodeURI() has occurred
*/