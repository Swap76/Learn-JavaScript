// The Date object in JavaScript is used to work with dates and times.

const date = new Date(); // The date object initialization
console.log(date); // current time and date in your local time zone

const dateWithYear = new Date(2019, 10, 10, 22, 10, 0); // takes year, month, date, hour, minute, second, millisecond as arguments
console.log(dateWithYear); // OUtput : Sun Nov 10 2019 22:10:00 GMT+0530

const dateString = new Date("October 10, 2019 11:13:00");
console.log(dateString); // Output : creates a new date object from date string

const dateMilli = new Date(100000000000); // adds 100000000000 ms to 01 January 1970
console.log(dateMilli); // approximately October 31 1966

const isoDate = new Date("2019-10-10"); // The ISO 8601 syntax (YYYY-MM-DD)
console.log(isoDate); // 2019-10-10

const shortDate = new Date("03/25/2015"); // "MM/DD/YYYY" date format
console.log(shortDate); // Thu Jan 01 1970 05:30:00 GMT+0530

const longDate = new Date("Oct 10 2019"); // "MM DD YYYY" date format
console.log(longDate); // Sun Oct 10 2010 00:00:00 GMT+0530

// Date GET Methods
date.getFullYear(); // 2019 (the year of a date as a four digit number)

date.getMonth(); // 9 (month of a date as a number (0-11))

date.getTime(); // 1570726799950 (the number of milliseconds since midnight Jan 1 1970, and a specified date)

date.setFullYear(2020, 10, 3); // Set the date to November 3, 2020

date.setMonth(4); // Set the month to 4 (May)

date.setTime(1332403882588); // Thu Mar 22 2012 13:41:22 GMT+0530