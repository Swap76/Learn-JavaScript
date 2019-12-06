# Math Functions

* Math is a global, static Javascript object
* They are used on the `Number` type
* I will discuss the following Javascript Math operators, `Math.round()`, `Math.power()`, `Math.sqrt()`, `Math.abs()`.

## Math.round()
* This function rounds a number to the nearest round number
* or as described by the documentation:
> _Returns the nearest single precision float representation of a number._

## Math.pow()
* This calculates the power of a number for you, you remeber that from math class right? The small number floating above the number to be powered.
* or as described by the documentation:
> _Returns base to the exponent power,that is:_
> base<sup>exponent</sup>

## Math.sqrt()
* This function calculates the square root of a number
* or as described by the documentation:
> _Returns the positive square root of a number._

## Math.abs()
* Returns the absolute value of a number.

## Math.ceil()

The JavaScript math.ceil(n) method returns the largest integer for the given number. For example 4 for 3.7, 6 for 5.9 etc.

```javascript
Math.ceil(4.4);     // returns 5
```

## Math.floor()

The JavaScript math.floor(n) method returns the lowest integer for the given number. For example 3 for 3.7, 5 for 5.9 etc.

```javascript
Math.floor(4.7);    // returns 4
```
## Math.sin()

Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

If you want to use degrees instead of radians, you have to convert degrees to radians:

Angle in radians = Angle in degrees x PI / 180.

```javascript
Math.sin(30 * Math.PI / 180);     // returns 0.5 (the sine of 30 degrees)
```

## Math.cos()

Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

If you want to use degrees instead of radians, you have to convert degrees to radians:

Angle in radians = Angle in degrees x PI / 180.

```javascript
Math.cos(60 * Math.PI / 180);     // returns 0.5 (the cos of 60 degrees)
```
## Math.min()

Math.min() can be used to find the lowest value in a list of arguments:

```javascript
Math.min(100, 550, 80, 200, -8, -900);  // returns -900
```

## Math.max()

Math.max() can be used to find the highest value in a list of arguments:

```javascript
Math.max(100, 550, 80, 200, -8, -900);  // returns 550
```

## Math.random()

Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

```javascript
Math.random();     // returns a random number
```
