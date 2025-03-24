let mySet = new Set();

// Add values to the set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate, will be ignored

console.log(mySet); // Output: Set { 1, 2, 3 }

// Check if a value exists
console.log(mySet.has(2)); // true

// Delete a value
mySet.delete(2);
console.log(mySet); // Output: Set { 1, 3 }

// Get the size of the set
console.log(mySet.size); // 2
