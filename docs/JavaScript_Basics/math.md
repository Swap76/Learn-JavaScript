## Math

The math object provides you properties and methods for mathematical constants and functions. Unlike other global objects, Math is not a constructor. All the properties and methods of Math are static and can be called by using Math as an object without creating it.

## Syntax

The syntax to call the properties and methods of Math are as follows

```javascript
var pi_val = Math.PI;
var cos_val = Math.cos(0);
```
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
