## Slice exercises

```
const arr = [1, 2, 3, 4, 5];

console.log( arr.slice(0, 2) )          // [1, 2]

console.log( arr.slice(1, 4) )          // [2, 3, 4]

console.log( arr.slice(0) )             // [1, 2, 3, 4, 5]

console.log( arr.slice(4) )             // [5]

console.log( arr.slice() )              // [1, 2, 3, 4, 5]

console.log( arr.slice(-3) )            // [3, 4, 5]

console.log( arr.slice(-3, -1) )        // [3, 4]

console.log( arr.slice(3, -1) )         // [4]

```


## Splice exercises

### Exercise 1
```
var arr = [1, 2, 3, 4, 5];

var splicedArr = arr.splice( 1, 0, 9 )

console.log( splicedArr );      // []
console.log( arr );             // [1, 9, 3, 4, 5]
```

### Exercise 2
```
var arr1 = [1, 2, 3, 4, 5];

var splicedArr1 = arr1.splice( 1, 2, 8 )

console.log( splicedArr1 );      // [2, 3]
console.log( arr1 );             // [1, 8, 4, 5]
```

### Exercise 3
```
var arr2 = [1, 2, 3, 4, 5];

var splicedArr2 = arr2.splice( 1, 3 )

console.log( splicedArr2 );      // [2, 3, 4]
console.log( arr2 );             // [1, 5]
```

### Exercise 4
```
var arr3 = [1, 2, 3, 4, 5];

var splicedArr3 = arr3.splice( 3 )

console.log( splicedArr3 );      // [4, 5]
console.log( arr3 );             // [1, 2, 3]
```
