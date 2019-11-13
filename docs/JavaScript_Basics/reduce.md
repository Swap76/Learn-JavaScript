# Reduce Method

The array reduce() method in JavaScript is used to reduce
the array to a single value and executes a provided function
for each value of the array (from left-to-right) and the return
value of the function is stored in an accumulator.

```js
    var  pokemon = ["Squirtle", "Charmander", "Bulbasaur"];

    var  pokeLength  = pokemon.reduce(function(accumulator, current) {
        return  accumulator  +  current.length;
    }, 0);
```
**Output**

27

# Example

Sum all the numbers in an array
```js
const array = [1, 2, 3, 4, 5, 6]
const sum = array.reduce( (acc, curr) => acc + curr, 0 )
```