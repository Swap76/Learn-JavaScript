/* The bind() method creates a new function that, when called, has its this keyword set
to the provided value, with a given sequence of  arguments preceding any provided
when the new function is called.
*/
const module = {
  x: 42,
  getX: function () {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42