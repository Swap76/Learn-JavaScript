// HIGHER ORDER FUNCTIONS FOR ARRAYS

// the arrays in javascript have 3 main HOF
// SUCH MAP, FILTER AND REDUCE

const list = [1,2,3,4,5]

// map

// the map function iterate over an a list and return a new array
// the map receive a function that receives 3 arguments
// 1st arg is one by one the items in the list like "1" or "2" in the list example
// 2nc arg is the index of the item in the list (for "1" is 0, etc...)
// 3rd arg is the entire list [1,2,3,4,5]

const newList = list.map(function (item, index, list) {
  return item * 2
})

// this return a new array with new values like [2, 4, 6, 8, 10]

// filter

// the filter function iterate over an a list and return a new array based on a condition
// the filter receive a function that receives 3 arguments
// 1st arg is one by one the items in the list like "1" or "2" in the list example
// 2nc arg is the index of the item in the list (for "1" is 0, etc...)
// 3rd arg is the entire list [1,2,3,4,5]

const newListFiltered = list.map(function (item, index, list) {
  // condition to return a value for the new array
  return item % 2 === 0
})

// this return a new array with some filtered values based on a condition [2, 4]
// because 2 and 4 the recidus is 0

// sort

// the sort function iterate over an a list and return a new array sorted based on a comparefunction
// if you don't add a function sort numbers in incremental way and text in alphabetic way
// the sort receive a function that receives 3 arguments

[1, 10, 2, 21].sort()

// this return [1, 10, 2, 21]
