# Regex

Regex stands for "regular expression", and is a pattern used to search for character combinations in strings. Regular expressions may look confusing at first, but they are a powerful tool for working with strings.

## Constructing a Regex

Regex can be constructed in the following ways:

```var re = /pattern/flags;``` (which will be used throughout the examples)  

and

```var re = new RegExp('pattern', 'flags');```

In each of these cases, the variable `re` is a regex, and 'pattern' and 'flags' are placeholders that we will learn about next.

## Anatomy of a Regex

### Simple Character Patterns
A Regex can be constructed from simple characters, like 'a', 'b', and 'c', or special characters such as '()', '*', and '$'. A Regex using simple characters simply searches for an exact match of that combination of characters within the searched string. The most basic example of a regex would be:

```var re = /abc/;```

This Regex searches a string for occurences of 'abc'. When executed using one of the possible regex methods, String.search(), the following would occur:

```
var re = /abc/;
var exampleString = 'abcdefg';
var result = exampleString.search(re);
console.log(result);
// expected output: 0 since 'abc' is found at index 0 of exampleString
```

### Special Character Patterns
Once you are ready to perform more complex searches on strings, you will want to start using special characters. There are a lot of special characters that can be used, so only a select few will be covered below, and a reference with explanations for the exhausive list of characters can be found at the bottom of the document.

- `/[abc]/` specifies a character set which matches any one of the characters within the brackets. Unlike `/abc/`, `/[abc]/` matches on indices 0, 1, and 2 of the example string used in the Simple Character Patterns example. An alternative syntax for `/[abc]/` is `/[a-c]/`.
- `/[^abc]/` on the other hand, specifies the opposite character set of the characters within the brackets. Referencing the Simple Character Patterns example again, this regex would match on indices 3, 4, 5, and 6 since those do not contain the characters 'a', 'b', or 'c'.
- `/.cd/` uses the '.' special character which matches any character that is not a newline character. In the Simple Character Patterns example, this regex would match on the index 1 since 'bcd' satisfies the given regex ('b' is a character that is not a newline) and starts at index 1. However, if the exampleString was instead 'cdefg', the regex would not match on any indices and return -1.
- `/s+/` uses the '+' special character which acts as a placeholder for one or more of the preceding character. In this case, the preceding character is 's'. This means that this regular expression will match on the first instance where there is one or more 's' characters in the test string. Instead of using the `String.search()` method like before, a better example would use `String.match()` like below:
```
var re = /s+/;
var exampleString = "tallahassee";
var result = exampleString.match(re);
console.log(result);
// expected output: ["ss", index: 7, input: "tallahassee", groups: undefined]
// where "ss" is the segment of the example string that the regex matched on

var exampleString2 = "tortoise";
var result2 = exampleString2.match(re);
console.log(result2);
// expected output: ["s", index: 6, input: "tortoise", groups: undefined]
```
- `/wo*/` uses the '\*' special character which matches the preceding expression zero or more times. This essentially means that the regex will match the first instance of a 'w', or a 'wo' in the searched string. The '\*' special character makes the preceding character optional when finding matches in a string.
- `/^abc/` uses the '^' special character outside of the context of square brackets. In this case, the '^' special character refers to the beginning of the search string. A search using this regex would succeed for the test string 'abcdefg' since the simple character pattern 'abc' does occur at the beginning of the test string.
- `/efg$/` uses the '$' special character, which refers to the end of the search string. A search using this regex would also succeed for the test string 'abcdefg' since this test string ends in the simple character pattern 'efg'.

### Flags
Flags are placed at the end of Regex, and allow for an even more robust set of search possibilities. They can be used together or independently regardless of order. Two of the most commonly used flags are:

- `g`: Global search. This allows the regex to be applied to the entire test string, regardless of whether a match has already been found.
- `i`: Case insensitive. This allows the regex to be applied just as it sounds, matching on characters regardless of case.

## Methods For Using Regex
Once you have constructed your regex to theoretically accomplish whatever pattern matching and string searching you set out to accomplish, you will still want to actually exectute your regex on strings. The methods for using regex allow you to do exactly that. There are multiple methods for performing regex searches built into both the RegExp class that you saw above, as well as the String class. Jumping right into the basic regex methods:

- `String.search(regExp)`: accepts a regex as a parameter and tests for a match in the string. The return value is the index of the match if successful, and -1 if no matches were found.
- `String.match(regExp)`: also accepts a regex as a parameter. The return value for match is an array containing all of the matches found in the string for the given regex and any capturing groups. If no matches are found, the return value is null.
- `RegExp.test(testString)`: accepts a test string and returns true if the regex finds any matches in the test string. Otherwise the method returns false.
- `RegExp.exec(testString)`: also accepts a test string as a parameter. This method returns an array containing useful information about the match such as the matched string and the indices that it stars and ends at within the test string.



***An Exhaustive reference of patterns, flags, and methods can be found at the [MDN page on Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)***
