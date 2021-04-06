// ## Objects
// 1. not stored in order
// 2. fast access/insertion and removal
// Insertion O(1)
// Removal O(1)
// Searching O(n)
// Access O(1)

// methods
// Object.keys O(n)
// Object.values O(n)
// Object.entries O(n)

// hasOwnProperty O(1) <= constant time cool!

let animals = {
  name: "dog",
  breed: "dog",
};

// ## Arrays
// Ordered lists

// Insertion - depends on where
// a. Inserting at the beginning === rearranging all items in the array === O(n)
// b. Inserting at the end === O(1)

// Removal - depends on where
// Remove 1st item === O(n) (re-indexing)
// Pop last item === O(n)

// Searching - O(n)
// Access - O(1) Array[n]

// Methods
// O(1): push, pop
// O(n): shift, unshift, concat, slice, splice, forEach, map, filter, reduce ...
// O(N * log N): sort

let names = ["nick", "jane", "bob"];
