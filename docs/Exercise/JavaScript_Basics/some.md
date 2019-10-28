# Array.some()

- Array.some() is an array method to check if **ANY** element of an array passes a test and return a BOOLEAN
- Accepts a callback function contains the test to check
- If any element of the tested array passes the test, it will return **true**
- If no element of the tested array passes the test or the array is an empty array, it will return **false**

```javascript

const arr = [10,5,2,3,49,14,6]

// Example 1
console.log(arr.some(n => {
  // test
  return n % 7 === 0
}))
// result : true

// Example 2
console.log(arr.some(n => {
  // test
  return n % 50 === 0
}))
// result : false

// Example 3
console.log([].some(n => {
  // test
  return n >= 0
}))

// result : false

```

