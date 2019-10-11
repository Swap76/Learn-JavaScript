const animals = ["cats", "dogs", "bunnies", "birds"];

const start_with_b = animals.filter(name => name.indexOf("b") === 0);

console.log(start_with_b); // ['bunnies', 'birds']