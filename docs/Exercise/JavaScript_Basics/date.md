
1.**Write** a JavaScript program to get the `current date`.

**Expected Output**:

**mm-dd-yyyy**, **mm/dd/yyyy** or **dd-mm-yyyy**, **dd/mm/yyyy**

2. Write a JavaScript function to check whether an `input` is a date object or not. 

Test Data :
```js
console.log(is_date("October 13, 2014 11:13:00")); 
console.log(is_date(new Date(86400000))); 
console.log(is_date(new Date(99,5,24,11,33,30,0))); 
console.log(is_date([1, 2, 4, 0]));
```
Output :
```js
false
true 
true 
false
```
3. Write a JavaScript function to get the current date. 

Note : Pass a separator as an argument.
Test Data :
```js
console.log(curday('/')); 
console.log(curday('-'));
```
Output :
```js
"11/13/2014" 
"11-13-2014"
```
4. Write a JavaScript function to get the number of days in a month. 

Test Data :
```js
console.log(getDaysInMonth(1, 2012)); 
console.log(getDaysInMonth(2, 2012)); 
console.log(getDaysInMonth(9, 2012)); 
console.log(getDaysInMonth(12, 2012)); 
```
Output :
```js
31 
29 
30 
31
```
5. Write a JavaScript function to get the month name from a particular date.

Test Data :
```js
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));
```
Output :
```js
"October" 
"November"
```
6. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).

Test Data :
```js
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
```
Output :
```js
"Date1 = Date2" 
"Date1 > Date2" 
```
7. Write a JavaScript function to add specified minutes to a Date object.

Test Data :
```js
console.log(add_minutes(new Date(2014,10,2), 30).toString());
```
Output :
```js
"Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"
```
8. Write a JavaScript function to test whether a date is a weekend.

Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
```js
console.log(is_weekend('Nov 15, 2014')); 
console.log(is_weekend('Nov 16, 2014')); 
console.log(is_weekend('Nov 17, 2014'));
```
Output :
```js
"weekend" 
"weekend" 
undefined
```
9. Write a JavaScript function to get difference between two dates in days.

Test Data :
```js
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
```
Output :
```js
216 
-28
```
10.  Write a JavaScript function to get the last day of a month. 

Test Data :
```js
console.log(lastday(2014,0)); 
console.log(lastday(2014,1)); 
console.log(lastday(2014,11));
```
Output :
```js
31 
28 
31
```
