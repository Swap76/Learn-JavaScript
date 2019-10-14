# Comparison Operators
Javascript has 2 comparison operators, equality `==` and identity/strict equality `===`.
### Equality
Equality operator (`==` and `!=`) converts operands if they are not the same type.

Example:
```javascript
2 != 1 //return true
2 == 2 //return true
2 == '2' //return true
'foo' == new String('foo') //return true
1 == true //return true
0 == false //return true
'' == 0 //return true
null == undefined //return true
```
### Identity
Identity operator (`===` and `!==`) behave like equality operator except no type conversion done.

Example:
```javascript
2 !== 1 //return true
2 === 2 //return true
2 === '2' //return false
'foo' === new String('foo') //return false
1 === true //return false
0 === false //return false
'' === 0 //return false
```
