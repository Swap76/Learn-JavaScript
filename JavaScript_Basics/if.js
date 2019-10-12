// IF keyword condition
// this is used to create condition blockof code

// the if needs a condition that the result is true and execute the
// code inside of the if block

const condition = 2 % 2 === 0

if (condition) {
  // run this code
  console.log('YEAH THIS RUN BECAUSE THE CONDITON IS A HARDCODE true')
}

// have a default value if the condition is false
// this runs in the else code block

if (condition) {
  // this block of code is never executed
} else {
  // run this code
  console.log('YEAH THIS RUN BECAUSE THE CONDITON IS A HARDCODE false')
}

// and you can make more conditions with an ELSE IF keyword

if (!condition) {
  // this block of code is never executed
} else if (condition) {
  // this code is executed because 1 is true like binary
} else {
  // this block of code is never executed
}
