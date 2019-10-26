
/* STRUCTURE:
 while (condition) {
    statement
 }

 In a while loop, an expression (or condition) is evaluated. While this condition is true, the statement within the loop gets executed.

 EXAMPLE:

 */

let n = 1;

while (n < 6) {
  console.log("n is less than 6. n = " + n);
  n++;
}

var sum = 1;
do {
  console.log(`sum now is ${sum++}`);
} while (sum <= 100);