
/*
The concat() method is used to join two or more arrays. Concat does not alter the original arrays, 
it returns a copy of the same elements combined from the original arrays.
*/
//Example 1:
console.log('It'.concat(' is',' a',' great',' day.')); 
//Output : It is a great day.

//Example 2:
var str1 = new String( "hello" );
var str2 = new String( "world" );
var str3 = str1.concat( str2 );      
document.write("concat output :" + str3); 
//Output : Concatenated String :This is string oneThis is string two.