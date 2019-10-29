// Recursion is when a function calls itself.
// Recursion gives us an interesting way to write algorithms that can solve complicated problems.

// Take for example factorials which is just an integer times each of the integers below it: so 5 factorial (also written 5!) is just 5 * 4 * 3 * 2 * 1.
// If we want to write an algorithm that can calculate the factorial of any given number without using recursion, we could do something like this:

function calcuateFactorialWithoutRecursion (num) {
  let total = num;
  let nextNumber = num - 1;
  while (nextNumber >= 1) {
    total = total * nextNumber;
    nextNumber--; // decrease the next number by 1
  }
  return total;
}

// calcuateFactorialWithoutRecursion(5) // 120
// 5 * 4 * 3 * 2 * 1 = 120

// We can write the same function this way using recursion:
function calculateFactorialWithRecursion (num) {
  if (num === 1) { // This step is critical. The num parameter will keep decreasing until it gets to 1.
    // Once the function gets called with 1 as a parameter, the function will return without calling itself.
    return num;
  }
  return num * calculateFactorialWithRecursion(num - 1);
}

calculateFactorialWithRecursion(7); // 5040
// 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040

// See how clean recursion made this algorithm!