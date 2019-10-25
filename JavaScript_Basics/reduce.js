// JavaScript | Array reduce() Method
/*
The array reduce() method in JavaScript is used to reduce
the array to a single value and executes a provided function
for each value of the array (from left-to-right) and the return
value of the function is stored in an accumulator.
*/
const pokemon = ["squirtle", "charmander", "bulbasaur"];

const pokeLength = pokemon.reduce(function (previous, current) {
  return previous + current.length;
}, 0);

// Outputs 27