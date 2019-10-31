# Set Object
The ***Set*** object stores a collection of values of any type, where each value can only occur once. Sets let you mix in different types of primitives and objects in the same
set, making a strickly equality test comparision when it's created and deleting duplicated elements. Set can also be iterated using **for..of** loops or **forEach()** method,
which iterate the values in insertion order.

## Creating Sets


The Set object can be created using the keyword ***new***:
```javascript
new Set([iterable]);
```

### Parameters
`iterable`
An iterable object. All the elements will be copied to the new created Set. If this parameter is not specify or it's value is null, the new Set is empty.

### Return value
A new Set object.


## Instance Methods


`set.add(value)`
*Adds* a new element to the Set with the given *value*. If the element is already contained in the Set, the element will be not added.

`set.delete(value)`
Delete the value in the Set. If the value exist return *true*, otherwise *false*.

`set.has(value)`
Return *true* if the value exists in the Set, else return *false*.

`set.clear()`
Delete all the elements in the Set. Return an *empty* set.

### Iteration Methods

`set.forEach(callback(value, key, set))`
Call ***callback*** for each element in the Set. ***Value*** and ***key*** parameters represents the current element being processes. The duplication of values is to mantain
compatibility with Map objects. The ***set*** argument represent the Set object which forEach() was called upon.

`set.entries()`
Return and interator with and array of **[value, value]** for each element, similar to Map object but with the same value for *value* and *key*.

`set.values()`
Return an interator that contains the values for each element in the Set object in insertion order.

`set.keys()`
The same as ***set.values()***.


## Examples
Examples can be consulted in the corresponding "***set-objects.js***" file.
