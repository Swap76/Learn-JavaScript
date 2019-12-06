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

//Try and Catch

/* In JavaScript,  try/catch/finally** statement handle errors that may occur in the block.

try statement eables you to test your code in the block.
catch statement enables you to execute a block of code when it catches an error.
finally statement enables you to execute always after try and catch, regardless of an exception was thrown or caught.
*/


// Syntax

try { 
  throw 'exception'; // generate an exception
} catch (error) {
  // statements to handle any exceptions
} finally {
  // always runs regardless of the resulf ot try/catch
}


// Errors

// Reference Error

try {
  hello(); // hello is not defined so it will cause a reference errorr
} catch (error) {
  console.log(error);
} finally {
  console.log('Finally runs reguardess of the reuslt');
}


// Type Error

try {
  null.hello(); // hello is not defined so it will cause a reference errorr
} catch (error) {
  console.log("You cannot call from null"); 
} finally {
  console.log('Finally runs reguardess of the reuslt');
}


// Syntax Error

try {
  eval('2+2'); // thsi works fine
  eval('Hello, World!'); // this will generate error
} catch (error) {
  console.log("Syntax error"); 
} finally {
  console.log('Finally runs reguardess of the reuslt');
}


// User Defined Error

const person = {name:John, age: 23};

try {
  if(!person.gender){
      // throw 'person has no gender'
      throw new SyntaxError('Person has no gender');
  }
} catch (error) {
  console.log("You cannot call from null"); 
} finally {
  console.log('Finally runs reguardess of the reuslt');
}
