# Arrays
The push() method adds new items to the end of an array, and returns the new length.

The pop() method removes the last element from an array.

shift() is equivalent to popping, working on the first element instead of the last.

length property provides an easy way to append a new element to an array.

delete will delete the object property, but will not reindex the array or update its length. This makes it appears as if it is undefined.
Using delete may leave undefined holes in the array. Use pop() or shift() instead.