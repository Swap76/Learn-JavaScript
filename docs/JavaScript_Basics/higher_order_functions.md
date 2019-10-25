# Higher Order Functions

Higher-order functions are functions that take other functions as arguments or return functions as their results.

Taking an other function as an argument is often referred as a callback function, because it is called back by the higher-order function. This is a concept that Javascript uses a lot.

For example, the map function on arrays is a higher order function. The map function takes a function as an argument.

```javascript
const list = [1, 2, 3, 4, 5 ];
const double = n => n * 2

[1, 2, 3, 4].map(double) // [ 2, 4, 6, 8, 10 ]
```


Or, with an anonymous function:
```javascript
const newList = list.map(function (item, index, list) {
  return item * 2;
});
// [ 2, 4, 6, 8, 10 ]
```
The map function is one of the many higher-order functions built into the language. sort, reduce, filter, forEach are other examples of higher-order functions built into the language.

Higher-order functions allows you to write simpler and more elegant code. 
