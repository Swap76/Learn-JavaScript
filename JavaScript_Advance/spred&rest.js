let marks = [1,2,3,4,5,6,7,8,9]; // Array Declearation

// If we want 1 to 3 as diffrent variables and 4 to 9 as full array then in such cases we use "rest" operator

let [first, second, third, ...remaining] = marks;

console.log(first, second, third); // Output 1 2 3

console.log(remaining); // Output [ 4, 5, 6, 7, 8, 9 ]