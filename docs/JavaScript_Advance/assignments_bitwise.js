/* In javascript there are always several ways to the goal.
Also the syntax of variable assignment can be abbreviated.
This is also suitable for bitwise operations
*/

/* left shift
*/

// Basic
y = 3; // y: 111 (binary)
x = 2;
y = y << x; // y: 11100 (binary)

// Shortcut
y = 3; // y: 111 (binary)
x = 2;
y <<= x; // y: 11100 (binary)

/* right shift (sign preserving)
*/

// Basic
y = -5; // y: 11111111111111111111111111111011 (binary)
x = 1;
y = y >> x; // y: 11111111111111111111111111111101 (binary) -3 (decimal)

// Shortcut
y = -5; // y: 11111111111111111111111111111011 (binary)
x = 1;
y >>= x; // y: 11111111111111111111111111111101 (binary) -3 (decimal)

/* right shift (zero fill)
*/

// Basic
y = 5; // y: 00000000000000000000000000000101 (binary)
x = 1;
y = y >>> x; // y: 00000000000000000000000000000010 (binary) 2 (decimal)

// Shortcut
y = 5; // y: 00000000000000000000000000000101 (binary)
x = 1;
y >>>= x; // y: 00000000000000000000000000000010 (binary) 2 (decimal)

/* AND
*/

// Basic
y = 12; // y: 1100 (binary)
x = 9; // y: 1001 (binary)
y = y & x; // y: 1000 (binary)

// Shortcut
y = 12; // y: 1100 (binary)
x = 9; // y: 1001 (binary)
y &= x; // y: 1000 (binary)

/* OR
*/

// Basic
y = 12; // y: 1100 (binary)
x = 9; // y: 1001 (binary)
y = y | x; // y: 1101 (binary)

// Shortcut
y = 12; // y: 1100 (binary)
x = 9; // y: 1001 (binary)
y |= x; // y: 1101 (binary)

/* XOR
*/

// Basic
y = 12; // y: 1100 (binary)
x = 9; // y: 1001 (binary)
y = y ^ x; // y: 0101 (binary)

// Shortcut
y = 12; // y: 1100 (binary)
x = 9; // y: 1001 (binary)
y ^= x; // y: 0101 (binary)

/* NOT
*/

// Basic
y = 5; // y: 00000000000000000000000000000101 (binary)
y = ~y; // y: 11111111111111111111111111111010 (binary) -6 (decimal)