/*
    Generators are functions with the possibility of exit and subsequent entry.
    Their execution context (variable values) is preserved on subsequent inputs.
*/

// Let's consider a simple example:
function* myGenerator() {
    yield 5
    yield 6
}

// In the example above, we wrote a simple generator function with asteriks(*) notation.
// Next to the yield we put values that are going to be extracted from the function
// In order to extract them one by one, we should at first call myGenerator function

const gen = myGenerator()

// The returning value of myGenerator function is a object-iterator. It has next() method
// Which we may call to get the current generator function value:

gen.next().value // 5

// We get the value field of 'next' method's returning value, wich is an object as well
// Let's call this again in order to get the next value:

gen.next().value // 6

// After we iterate through all the values, the next value is going to be undefined.

gen.next().value // undefined.
