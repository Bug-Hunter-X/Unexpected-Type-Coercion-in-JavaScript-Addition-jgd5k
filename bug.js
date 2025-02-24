function add(a, b) {
  return a + b; // Forgot to handle non-number inputs
}

console.log(add(10, "20")); // Unexpected result because of type coercion