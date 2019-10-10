# FilteringArray

Array prototype has a standard method called filter.

It returns the elements matching the condition given.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Example:
```
let animals = ['cats', 'dogs', 'bunnies', 'birds'];
let start_with_b = animals.filter( name => name.indexOf('b') === 0);
console.log(start_with_b); // ['bunnies', 'birds']
```
