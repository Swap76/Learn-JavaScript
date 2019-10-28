# map.map()

- Array.map() is an array method to modify an array by looping through  each array element and apply modification to this element and return the result in **New Array**
- Accepts a callback function contains the modification to perform
- you must store the result in variable


```javascript

const arr = [1,2,3,4,5,6,7,8,9]

// Example 1
const squares = [1,2,3,4,5,6,7,8,9].map(n => {
  // test
  return n * n
})
// result : [1,4,9,16,25,36,49,64,81]

// Example 2
const duplicates = arr.map(n => {
  // test
  return n * 2
})
// result : [2,4,6,8,10,12,14,16,18]

// Example 3
const str = ['nthis','nis','ea','wstring','dfixed','qwith','smap','umethod'].map(s => {
  // test
  return s.substring(1)
})

// result : ["this", "is", "a", "string", "fixed", "with", "map", "method"]

```

