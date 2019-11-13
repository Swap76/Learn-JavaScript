# Bind Method
*The **bind()** method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.*
```js
    let  module  = {
        x:  42,
        getX:  function() {
            return  this.x;
        }
    }

    let  unboundGetX  =  module.getX;

    console.log(unboundGetX());
```
The above function gets invoked at the global scope

output: undefined
```js
    let  boundGetX  =  unboundGetX.bind(module);
    console.log(boundGetX());
```
output: 42
