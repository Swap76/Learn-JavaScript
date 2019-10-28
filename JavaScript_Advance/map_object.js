/*
Map : Object
Maps allow associating keys and values similar to normal Objects except Maps allow any Object to be used as a
key instead of just Strings and Symbols. Maps use get() and set() methods to access the values stored in the Map.
A Map are often called a HashTable or a Dictionary in other languages.
*/

const map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert(map.get(1)); // 'num1'
alert(map.get("1")); // 'str1'

alert(map.size); // 3

// Map can also use objects as keys.

const john = {
  name: "John"
};

// for every user, let's store their visits count
const visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

alert(visitsCountMap.get(john)); // 123
/*
Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries()
*/

const recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50]
]);

// iterate over keys (vegetables)
for (const vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (const amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (const entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}