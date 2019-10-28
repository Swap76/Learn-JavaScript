# Splice and Slice

## Splice

 Splice is used to add and delete new elements at a specific index in an array.

#### Example 1: Adding an element at specific index

```javascript
let languages = ["C++", "Java", "Javascript", "R"];
languages.splice(2, 0, "Python", "Pearl");
 ```
This will add Python and Perl starting at index 2.
As of result we get an output of `["C++", "Java", "Python", "Pearl", "Javascript", "R"]`

**NOTE**<br/>
First argument denotes the Index of Array while second denotes
the number of elements we want to delete from the array.

#### Example 2: Deleting and Adding an element at specific index
 
```javascript
let languages = ["C++", "Java", "Javascript", "R"];
languages.splice(2, 1, "Python", "Pearl");
 ```
 This will add Python and Perl starting at index 2 and delete one element which was at index 2 originally.
 As of result we get an output of `["C++", "Java", "Python", "Pearl", "R"]`

 #### Example 3: Deleting an element at a specific index

```javascript
let languages = ["C++", "Java", "Javascript", "R"];
languages.splice(1, 1);
 ```
This will delete one element at index 1.
As of result we get an output of `["C++", "Javascript", "R"]`

## Slice

Slice is used to return a selected number of elements from an array depending on their index

#### Example 1: Specifying index 1 and 2 as the arguments

```javascript
let languages = ["C++", "Java", "Javascript", "R"];
let coding = languages.slice(1, 2);
 ```
 This will return elements from an array starting at index 1 and ending at index 2. As of result we get an output of `["Java", "Javascript"]`

 #### Example 2: Specifying index -3 and -1 as the arguments
```javascript
let languages = ["C++", "Java", "Javascript", "R"];
let coding = languages.slice(-3, -1);
 ```
 Since negative numbers are being used. We indicate an offset from the end of the sequence. The elements returned from the array starts at index -3 and ends at index -1. As of result we get an output of `["Java", "Javascript"]`

**Explanation**<br/>
```
 index->    0       1          2         3
          ["C++", "Java", "Javascript", "R"]
           -4       -3         -2        -1
```