1. Write code to determine if the following values are _Finite_. 
The output should be a **boolean value**
```js

    var number9 = 9;
    var infinity = Infinity;
    var notANumber = NaN;
    var zero = 0;
    var exponentNumber = 2e10;
    var stringZero = '0';
    var nothing = null;
    var divideByZero = 1/0;
    var oneFourth = 1/4;
```

2. Write code to determine if the following values are _Integers_.
The output should be a **boolean value**
```js
    var zero = 0;
    var one = 1;
    var oneTenthAsDecimal = 0.1;
    var pi = Math.PI;
    var stringTen = '10';
    var fiveAnd1Decimal = 5.0;
    var fiveAnd8Decimal = 5.00000001;
    var fiveAnd16Decimal = 5.0000000000000001;
```

3. Write code to determine if the following values are _Not a number_.
The output should be a **boolean value**
```js
    var nan = NaN;
    var zeroDividedByZero = 0/0;
    var stringNotANumber = 'NaN';
    var emptyObject = {};
    var stringThirty = '30';
    var thirty = 30;
    var someText = 'some text';
    var emptyString = '';
    var singleSpace = ' ';

```

4. Write code to determine if the following values are _safe integers_.
The output should be a **boolean value**
```js
    var nan = NaN;
    var infinity = Infinity;
    var stringThirty = '30';
    var thirty = 30;
    var fiveAnd1Decimal = 5.0;
    var oneTenthAsDecimal = 0.1;
```

5. Write code to convert the following values _to exponential form_.
The output should be **string representing the Number object in exponential notation.**
```js
    var numbers = 123456;
    // expect numbers to be 1.23456e+5
    
    var numberWith5Decimals = 5.01234;
    // expect numberWith5Decimals to be 5.01e+0  
    
    var oneTenthAsDecimal = 0.1;
    // expect oneTenthAsDecimal to be 1e-1
```

6. Write code to convert the following values _to fixed-point notation_.

```js
    var floatingNumber1 = 123.456;
    // expect floatingNumber1 to return 123.46

    var floatingNumber2 = 123.000009;
    // expect floatingNumber2 to return 123

    var exponentNumber3 = 1.23e+10;
    // expect exponentNumber3 to return 12300000000.00
    
    var floatingNumber4 = 1.55;
    // expect floatingNumber4 to return 1.6

```

7. Write code to return a string with a language-sensitive representation of the `Number`
```js
    var germanNumber = 123.34
    // expect value to be 123,12
    var arabicNumber = 123.11
    // expect value to be ١٢٣٫١٢

```

8. Write code to returns a string representing the `Number` object to the specified precision.
```js
    var floatingNumber1 = 123.456;
    // expect floatingNumber1 to be precise up to 2 digits.
    // The expected output should be  1.2e+2
    var exponentNumber3 = 1.23e+10;
    // expect exponenentNumber3 to be precise up to 4 digits.
    // The expected output should be 1.230e+10

    var numberWith5Decimals = 5.01234;
    // expect numberWith5Decimals to be precise up to 0 digits.
    // The expected output should be 5
```

9. Write code to return a string representing the specified `Number` object.
```js
    // NOTE:
    // when outputting the results to a browser's console.
    // The double quotes will not be displayed
    // You can verify the output by checking its 'type' and 
    // confirm that it is of type String

    var floatingNumber1 = 123.456;
    // expect floatingNumber1 to be in string format "123.456"

    var exponentNumber3 = 1.23e+10;
    // expect exponenentNumber3 to be in string format "12300000000"

    var pi = Math.PI;
    // expect pi to be in string format "3.141592653589793"
```

10. Write code to return the wrapped primitive value of a `Number` object.
```js

    var numberObject = new Number(42);
    // expect to return the value 42 from the object

    var piObject = new Number(Math.PI);
    // expect to return the value 3.141592653589793 from the object

```