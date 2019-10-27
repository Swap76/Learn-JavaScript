/* eslint no-var: "off" */

// There is only 3 types of variables in javascript

var day26 = 26;// This is Deprecated as this creates many problems in future.
//Variables created with var can be rewrite but the most important problem is about the scope.

let userNickname = "Swapnil"; // New type introduced in ES6. Value of let can change any time.
userNickname = "Swap76";
console.log(userNickname) // Output {"Swap76"}

const PI = 3.14;// New type introduced in ES6. Value of pi now cannot be changed as this is defined as const.
PI = 2; // Output {Error: PI is read only}
console.log(PI) // Output {3.14}


//Tips: *use significatives variables names, example: 
//	let a = "User's name" for let userNickName = "User's name"
//*CammelCase for a better understaning, JS has case sensitive.
//*Variables names must begin with a letter.
//*write constants with Upper case.