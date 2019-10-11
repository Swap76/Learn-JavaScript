//###########
//  SPLICE  #
//###########


//Splice is used to add and delete new elements at specific index in an array.

//Example:1 Adding an element at specific index using splice

let languages = ["C++", "Java", "Javascript", "R"];
languages.splice(2, 0, "Python", "Pearl"); //This will add Python and Perl starting at index 2
//Output: ["C++", "Java", "Python", "Pearl", "Javascript", "R"]

//Note: First argument denotes the Index of Array while second denotes the number of elements we want to delete from the array.


//Example:2 Deleting and Adding an element at specific index using splice 

let languages = ["C++", "Java", "Javascript", "R"];
languages.splice(2, 1, "Python", "Pearl"); //This will add Python and Perl starting at index 2 and delete one element which was at index 2 originally.
//Output: ["C++", "Java", "Python", "Pearl", "R"]

//Example:3 Deleting an element at specific index using splice 

let languages = ["C++", "Java", "Javascript", "R"];
languages.splice(1, 1); //This will delete one element at index 1
//Output: ["C++", "Javascript", "R"]

//###########
//  SLICE   #
//###########

//Slice is used to return a selected number of elements from an array depending on their index.

let languages = ["C++", "Java", "Javascript", "R"];
let coding = languages.slice(1, 2);
//Output: ["Java", "Javascript"]

//Note: First arguments denotes the start index and the second denotes the end index of the array to be fetched.
let languages = ["C++", "Java", "Javascript", "R"];
let coding = languages.slice(-3, -1);
//Output: ["Java", "Javascript"]

//Explaination:
// index->    0       1          2         3
//          ["C++", "Java", "Javascript", "R"]
//           -4       -3         -2        -1
//
// Slice excludes the last index when its negative. Hence, it will return elements at -3 and -2, ignoring element at -1.