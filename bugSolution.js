function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

console.log(add(10, 20)); // Correct result

// Example of error handling
try {
  console.log(add(10, "20"));
} catch (error) {
  console.error(error.message);
} 