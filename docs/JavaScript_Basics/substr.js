// define a dummy string
const str = "commonSourceOfTruth";

// get value using substr
console.log(str.substr(1, 10)); // 'ommonSourc'

// get value using substring
console.log(str.substring(1, 10)); // 'ommonSour'

// if we start from 0 both behave the same.
console.log(str.substr(0, 10)); // 'commonSour'
console.log(str.substring(0, 10)); // 'commonSour'

// Example: Remove first and last character from a given string

console.log(str.substr(1, str.length - 2)); // ommonSourceOfTrut

// Substring takes indices
console.log(str.substring(1, str.length - 1)); // ommonSourceOfTrut