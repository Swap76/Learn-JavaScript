console.log(this); // This gives empty object
// Output {}

var  aa = 1;
console.log(global.aa); // Global scope is accessible to every where
// Output undefined

// Nodejs has Global object which is accessible in all file it has some predefined functions

// Blocked Objects
{
  var a = 1
  let b = 2  
  console.log(b);
}
console.log(a);// Output 1 as variable a is decleared using var
console.log(a); 

// console.log(b) // Output ReferenceError: b is not defined as b is defined using let it is going to be decleared only in that block

const help = () => {
  var a = 4;
  let b =2; // variables defined by let and const are accisible to there scope only
  console.log(a); // This will not get printed unless and untill function is called 
}

console.log(a);// Output 1

// console.log(b); // Output ReferenceError: b is not defined as b is in function scope only

help(); // Output 4