# Strict mode

Javascript's strict mode was introduced in ECMAScript 5. Opting-in to strict mode explicitly checks out of "sloppy mode", and results in the following changes:

 - Some silent errors that are not thrown in "sloppy mode" will be thrown in strict mode
 - prohibits some syntax that will be likely part of future versions of ECMAScript
 - Enables further optimizations on the code

 ## How to use strict mode

 You can opt-in to strict mode for *entire scripts* or to *individual functions*. However you can not apply strict mode to black statements ({}). 

 To enable strict mode, just use `'use strict'` or `"use strict"` at the beginning of the script or function. For example:

 ```javascript
 'use strict'
 console.log('I am in strict mode');
 ```

 or 

 ```javascript
function strictlog() {
    'use strict';
    console.log('I am strict');
}

console.log('I am sloppy');
 ```

 ## JavaScript modules

 JavaScript modules, introduced in ECMAScript 2015, are automatically in strict mode, you don't need to explicitly use `'use strict'`.

 ```javascript
 function strict() {
     console.log('I am strict');
 }
 export default strict;
 ```