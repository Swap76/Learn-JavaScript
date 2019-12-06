# Date
The Date object in JavaScript is used to work with dates and times.

## Current time
The date object initialization
```javascript
const date = new Date();
```

Current time and date in your local time zone
```javascript
console.log(date);
```

## Create a date object
Date from year, month, date, hour, minute, second, millisecond as arguments
```javascript
const dateWithYear = new Date(2019, 10, 10, 22, 10, 0); //
console.log(dateWithYear); //Output : Sun Nov 10 2019 22:10:00 GMT+0530
```

Date from a date-string
```javascript
const dateString = new Date("October 10, 2019 11:13:00");
console.log(dateString); // Output : creates a new date object from date string
```

Date from a milliseconds-timestamp
Here 100000000000 ms from 1st January 1970
```javascript
const dateMilli = new Date(100000000000); //
console.log(dateMilli); // approximately October 31 1966
```
Date from a date-string
Here ISO 8601 syntax (YYYY-MM-DD)
```javascript
const isoDate = new Date("2019-10-10");
console.log(isoDate); // 2019-10-10
```

Date from a "MM/DD/YYYY" date format
```javascript
const shortDate = new Date("03/25/2015");
console.log(shortDate); // Thu Jan 01 1970 05:30:00 GMT+0530
```

Date from a "MM DD YYYY" date format
```javascript
const longDate = new Date("Oct 10 2019");
console.log(longDate); // Sun Oct 10 2010 00:00:00 GMT+0530
```

## Get methods
The year of a date as a four digit number
```javascript
date.getFullYear(); // 2019
```

Month of a date as a number (0-11)
```javascript
date.getMonth(); // 9
```
The number of milliseconds since midnight Jan 1 1970, and a specified date
```javascript
date.getTime(); // 1570726799950
```

## Maniupulate a date

Set the date to November 3, 2020
```javascript
date.setFullYear(2020, 10, 3);
```

Set the month to 4 (May)
```javascript
date.setMonth(4);
```

Set the date with a timestamp
```javascript
date.setTime(1332403882588); // Thu Mar 22 2012 13:41:22 GMT+0530
```
