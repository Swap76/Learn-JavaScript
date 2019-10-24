/* In javascript there are always several ways to the goal.
Also the syntax of variable assignment can be abbreviated.
This is particularly suitable for mathematic operators
*/

/* Default assignment
Very basic to this point.
*/

y = "Yes"; // y: "Yes"

/* Adding
Adds two values.
*/

// Basic adding
y = 1 + 1; // y: 2

// Shortcut
y += 1; // y: 3 (increases y by 1)

// appending strings by adding
y = "A"; // y: "A"
y += "B"; // y: "AB"

// Adding string and number
y = 1; // y: 1
y += "1"; // y: "11" (treated as text not as numbers)

/* Subtracting
subtracts two values
*/

// Basic adding
y = 5 - 2; // y: 3

// Shortcut
y -= 1; // y: 2

// substracting strings
y = "A"; // y: "A"
y -= "B"; // y: NaN (Not-a-Number aka we-don't-know-what-it-is-but-definitively-not-decimal)

y = "AA"; // y: "AA"
y -= "A"; // y: NaN (also not working)

// substracting strings and numbers
y = 3; // y: 3
y -= "1"; // y: 2

y = "3"; // y: "3"
y -= 1; // y: 2

/* Multiplication
Multiply two values
*/

// Basic
y = 3 * 2; // y: 6

// Shortcut
y *= 2; // y: 12 (doubles y)
y *= 3; // y: 36 (triples y)

// Multiplying strings
y = "A" * 3; // y: NaN (doesn't work)

/* Sadly you can't repeat strings by multiplying them. Alternatives:
  https://www.freecodecamp.org/news/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d/
  */

/* Dividing
Multiply two values
*/

// Basic
y = 5 / 2; // y: 2.5

// Shortcut
y = 64;
y /= 2; // y: 32 (divides y by two)
y /= 4; // y: 8 (divides y by four)

/* Modulo
Short modulo example:
  5 % 3 = 2 (3 fits inside 5 one time, 2 remaining)
  5 % 2 = 1 (2 fits inside 5 two times, 1 remaining)
  5 % 5 = 0 (5 fits inside 5 one time, 0 remaining)
By modulo 2 you get 1 if the number is odd and 0 if it's even.
*/

// Basic
y = 5 % 4; // y: 1

// Shortcut
y = 5;
y %= 4; // y:1

// Is y odd or even?
y = 127;
y %= 2; // y: 1 (1 => odd)

y = 128;
y %= 2; // y: 0 (0 => even)

/* Power
*/

// Basic
y = 5 ** 2; // y: 25

// Shortcut
y = 5;
y **= 2; // y: 25