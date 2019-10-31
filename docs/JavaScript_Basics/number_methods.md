# Number Methods

## Number methods allow you to easily work with numbers

**isFinite()**
Checks whether a value is a finite number.
Finite is a number that isn't infinite and can be measured or given a value.

It only takes a single parameter which is the value you'd like to check.
It's return value will be a boolean (true or false)

Numbers that pass as finite:
- 0
- whole numbers
- negative numbers
- decimals
- equations

**.isInteger()**
Checks whether the value passed is an integer.
It's return value will be a boolean (true / false)

**.isNaN()**
Checks whether the value passed is NaN (Not a number) or if the value is a number

true = NaN

**.isSafeInteger()**
Checks whether the method passed is a safe integer. The returned value will provide a boolean.

A safe integer is represented as an IEEE-754 double precision number. This is simply any number between -9007199254740991 and 9007199254740991.

Note that the value isn't changed to a number if a string is passed in.

**.toExponential()**
Converts a number to its exponential form. The returned value is a string that represents the Number object in exponential notation

**.toFixed()**
Formats a number using the fixed-point notation. It allows you to format a number with a specific number of digits to the right of the decimal. Numbers will be rounded if necessary.

Its return value is a string with the given number using fixed-point notation. If the number given is negative, the return value will be a number and won't be converted into a string.

**.toLocaleString()**
Converts a number into a language-sensitive representation of said number.
It can take in two optional parameters:
- locales: A string with a language tag (bali, latn)
- options: A set of options for the given locale (currency, style)

The return value is a string.

**.toPrecision()**
Converts a number to the specified precision.

The returned value is in the form of a string. The value will be rounded and padded with 0's if there are not enough digits.

**.toString()**
Converts a given number to a string with the specified base number (an integer between 2 and 36)

The return value is given in the form of a string if no radix is given.

**.valueOf()**
Returns the number value in primitive form of a Number object.
This is rarely something done on your own, as JavaScript invokes this automatically.
