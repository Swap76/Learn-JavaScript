# String Operation

#### JavaScript strings are used for storing and manipulating text, just like in any other language.

Strings are written inside quotes:
```javascript
const variableName = "Hello JavaScript";
// or with single quotes
const variableName = 'Hello JavaScript';
```

## Concatenation

String concatenation is joining 2 or more strings together in one string

There are several method to achieve this in javascript and here we will mention some:

1. Using .concat() method ( same as Array.concat() method )
    ```javascript

    let str = 'hello '.concat('world!')
    console.log(str) // hello world!

    let user = 'jack'
    console.log('welcome '.concat(user)) // welcome jack

    ```

2. Using plus operator
    ```javascript

    let str = 'hello ' + 'world!'
    console.log(str) // hello world!

    let user = 'jack'
    console.log('welcome '+ user) // welcome jack

    ```
2. Using Template literals (Template strings):
   -  using back-ticks
   -  new feature from ES6
   -  you can add multiple lines in one string without the need to add \<br\> tags or \n special character
    ```javascript

    let str = `hello world!`
    console.log(str) // hello world!

    let user = 'jack'
    console.log(`welcome ${jack}`) // welcome jack

    console.log(`this is
    a multiline string
    created by Template literals`)
    // output :
    //this is
    //a multiline string
    //created by Template literals

    // ES5 version
    console.log('this i\na multiline string\ncreated by Template literals')
    // output :
    //this is
    //a multiline string
    //created by Template literals
    ```