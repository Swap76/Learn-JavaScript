// Regex are patterns used to match character combinations in strings.

const re = /abc/i;

// variable re is regex.
// abc is pattern or character combination
// modifier (i : case-insensitive, g: global, m: multilie)

//Using String search() with a string
const strOne = "abc edf ghi"; //string
const resOne = strOne.search("abc"); //regex to match string
console.log(resOne); // Output: 0


// String Search with Regex
const resTwo = str.search(/abc/i);  // regex with case-insensitive modifier
console.log(resTwo); // Output: 0


// Test test wether string contains in the stirng or not?
const string = "Learn JavaScript"; // our string
const reg = /Learn/; // our regex 
const out = reg.test(string);
console.log(out) // Output : true

//Regex Patterns
/* 
 [abc] finds any of the characters between the brackets
 [0-9] finds any of the digits between the brackets
 (x|y) finds any of the alternatives separated with |
*/

// To Match the range in  pattern
const string = "Learn JavaScript";
const reg = /[a-z]/;
const out = string.match(reg);
console.log(out) // e, r, n




// closest character class match 

/*
\w match all alphabets
\W match all non-alphabets
\d match all digits
\d match non-digits
*/
// Repeated match
let repeatRegex = /Repeat/g;
const output = testStr.match(repeatRegex);
console.log(output);
// Output:  ["Repeat", "Repeat", "Repeat"]

// .(period) wild card match
let exampleStr = "Let's have fun with regular expressions!"; // string
let unRegex = /.un/; // matches any alphabet in .(period) position
let result = unRegex.test(exampleStr); // Output: true


let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // matches all non digits and non owels in the given string
let result = quoteSample.match(myRegex); // Output : b, l, n, d m, c, .

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // matches all the ss groups in the string
let result = difficultSpelling.match(myRegex); // Output : true

// zero or more occurances
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // matches all the repeated a's in the stirng
let result = chewieQuote.match(chewieRegex); // Output : true

// lazy matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1?>/; // matches all the headings(h1-h6) tags in given string.
let result = text.match(myRegex); // Output : true

// beginning matching
let rickyAndCal = "Cal and Ricky both like racing."; //our stirng
let calRegex = /^Cal/; // matches string starting with Cal only
let result = calRegex.test(rickyAndCal); // Output : true

// ending matching
let caboose = "The last car on a train is the caboose"; //our string
let lastRegex = /caboose$/; // regex to match string ending with the given pattern
let result = lastRegex.test(caboose); // Output : true

// exact number of matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // matches only if m occurs 4 times in a stirng
let result = timRegex.test(timStr); // Output : true

//  All or None
let favWord = "favorite";
let favRegex = /favou?rite/; // matches zero or one preceding element after ?
let result = favRegex.test(favWord); // Output : true

//  capture groups
let repeatNum = "42 42 42"; // our string 
let reRegex = /^(\d+)\s\1\s\1$/; //  this regex capture all the 42 groups 
let result = reRegex.test(repeatNum); // Output : true

// Using String replace() with a regex
const resThree = str.replace(/abc/i, //regex to match
     "zyx" // replace string
     );
// Output "zyxdefghi"

