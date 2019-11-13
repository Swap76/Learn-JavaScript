# Reduce exercises

The reduce method allows you to "reduce" the contents of an Array into one value.

## 1. Sum of prices
Write a function that sums up the prices in a shopping cart.

```js
const items = [
  { name: 'Flour', price: 1 },
  { name: 'Tomatos', price: 4 },
  { name: 'Cucumbers', price: 2 },
  { name: 'Cheese', price: 7 },
  { name: 'Wine', price: 14 },
];

const expectedResult = 28;
```

## 2. Grades by course
Given a list of grades with their course, return an object where the key is the name of the course and the value is a list of the corresponding grades.

```js
const grades = [
  { course: 'Algebra', test: 1, grade: 'A'},
  { course: 'Algebra', test: 2, grade: 'C'},
  { course: 'Algebra', test: 3, grade: 'B'},
  { course: 'Algorithms & Datastructures', test: 1, grade: 'D'},
  { course: 'Algorithms & Datastructures', test: 2, grade: 'C'},
  { course: 'Algorithms & Datastructures', test: 3, grade: 'C+'},
  { course: 'English', test: 1, grade: 'B'},
  { course: 'English', test: 2, grade: 'C'},
  { course: 'English', test: 3, grade: 'B'},
];

const expectedResult = {
  'Algebra': [
    { course: 'Algebra', test: 1, grade: 'A'},
    { course: 'Algebra', test: 2, grade: 'C'},
    { course: 'Algebra', test: 3, grade: 'B'},
  ],
  'Algorithms & Datastructures': [
    { course: 'Algorithms & Datastructures', test: 1, grade: 'D'},
    { course: 'Algorithms & Datastructures', test: 2, grade: 'C'},
    { course: 'Algorithms & Datastructures', test: 3, grade: 'C+'},
  ],
  'English': [
    { course: 'English', test: 1, grade: 'B'},
    { course: 'English', test: 2, grade: 'C'},
    { course: 'English', test: 3, grade: 'B'},
  ]
};
```
