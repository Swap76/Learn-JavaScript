# Array Flat Method

The `flat()` method creates a new array with nested sub-array elements concatenated into it recursively up to the specified depth. The default depth is one level but the `Infinity` parameter may be used to recursively flatten an array completely until no nested arrays remain.

```js
var array1 = [1, 2, [3, 4]];
array1.flat();
// [1, 2, 3, 4]
```
```js
var array2 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
array3.flat(2);
// [1, 2, 3, 4, 5, 6, [7, 8]]
```
```js
var array3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
array3.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
