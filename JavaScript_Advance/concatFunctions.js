//This method adds 2 or more strings and returns a new single string type.
var str1 = new String("This is string one");
var str2 = new String("This is string two");
var str3 = str1.concat(str2);
console.log("Concatenated String :" + str3);


//This method returns a new array comprised of this array joined
//with 2 or more arrays.
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
console.log("alphaNumeric : " + alphaNumeric); 