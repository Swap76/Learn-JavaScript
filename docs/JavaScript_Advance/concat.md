

*The **concat()** method is used to join two or more arrays. Concat does not alter the original arrays, it returns a copy of the same elements combined from the original arrays.*


Example 1:
```js
    console.log('It'.concat(' is',' a',' great',' day.'));
```
Output : It is a great day.
 
Example 2:
```js
    var  str1  =  new  String( "This is string one" );
    
    var  str2  =  new  String( "This is string two" );
    
    var  str3  =  str1.concat( str2 );

    document.write("Concatenated String :"  +  str3);
```
Output : Concatenated String :This is string oneThis is string two.
