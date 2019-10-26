# Destructuring

## What is destructuring?

Destructuring is a quick and clean way to assign a property on an object to a variable made available as part of ES2015 (ES6). Lets say that we have the following object:

```js
const a = { // Suppose this is the object coming from server then
  name: "Swapnil",
  age: 19,
  college: "SIES"
};
```

If we want to assign the name property of this object to a variable called `name`, we could do this:

```js
const name = a.name;
```

This works just fine until we want to assign each property of its object to it's own variable:

```js
const name = a.name;
const age = a.age;
const college = a.college;
```

This is a bit repetative and now with ES6 destructuring assignment, completely unnecessary. We can now do this:

```js
const { name, age, college } = a;
```

This may look a bit weird, but let's walk through it together. You can see that the open bracket directly follows the `const`, followed by the three different properties that we are assigning to variables by the same name. In essence what we are doing is extracting the value of `name`, `age`, and `college` from the `a` object and assigning those values to `const` variables by the exact same name.