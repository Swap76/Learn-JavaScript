# Comparison Operators
Javascript has 2 comparison operators, equality `==` and identity/strict equality `===`.
## Equality
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
## Identity
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

### The importance of type conversion
As we just discussed `2 === '2'` will return false but `2 == '2'` will return true. Why does this matter? If you're doing math and get `2+2` will evaluate to 4 `'2'+'2'` will evaluate to '22' because it's putting the 2 numbers together. But what happens if you have `2+'2'`? In this case you get '22' as well because Javascript is doing type conversion on the number 2, converting it from a number to a string. Why doesn't it convert the string to a number? This happens because the value of the string isn't being evaluated just the type. So `2+'a'` evaluates to '2a' because it's changing the number 2 to the string '2'.
