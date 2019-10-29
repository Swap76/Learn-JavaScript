# For..In 
The for...in statement iterates over all non-Symbol, enumerable properties of an object.

Examples:
```javascript
var result = "";
var object1 = {a: 'ja', b: 'va', c: 'scri', d: 'pt'};

for (var propIndex in allObject) {
  result += allObject[propIndex];
}

console.log(result);
// expected output: "javascript"
```

```javascript
var result = 0;
var list = [1, 2, 3, 4];

for (var numberIndex in list) {
  result += list[numberIndex];
}

console.log(result);
// expected output: 10

