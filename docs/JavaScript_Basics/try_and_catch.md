# Try and Catch

In JavaScript, **try**/**catch**/**finally** statement handle errors that may occur in the block.

**try** statement eables you to test your code in the block.
**catch** statement enables you to execute a block of code when it catches an error.
**finally** statement enables you to execute always after try and catch, regardless of an exception was thrown or caught.

## Syntax
```js
try { 
    throw 'exception'; // generate an exception
} catch (error) {
    // statements to handle any exceptions
} finally {
    // always runs regardless of the resulf ot try/catch
}
```

## Errors

### Reference Error
```js
try {
    hello(); // hello is not defined so it will cause a reference errorr
} catch (error) {
    console.log(error);
} finally {
    console.log('Finally runs reguardess of the reuslt');
}
```

### Type Error
```js
try {
    null.hello(); // hello is not defined so it will cause a reference errorr
} catch (error) {
    console.log("You cannot call from null"); 
} finally {
    console.log('Finally runs reguardess of the reuslt');
}
```

### Syntax Error
```js
try {
    eval('2+2'); // thsi works fine
    eval('Hello, World!'); // this will generate error
} catch (error) {
    console.log("Syntax error"); 
} finally {
    console.log('Finally runs reguardess of the reuslt');
}
```

### User Defined Error
```js
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
```