var array=[1,0.16,"Random", function(){
    console.log("this is function in an array");


},{"Key":"Answer"},false];

console.log("Array can cantain anything");
console.log(array);
//add last
array.push("add last");
console.log(array);
//remove last
array.pop();
console.log(array);
//add first
array.shift("add first");
console.log(array);

//remove first
array.unshift();
console.log(array);
//this element is function
array[2]();
//object inside array
console.log(array[3]["Key"]);




