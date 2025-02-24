# Unexpected Type Coercion in JavaScript Addition

This example demonstrates a common issue in JavaScript where type coercion leads to unexpected results when performing arithmetic operations.  The `add` function doesn't explicitly check for number types, resulting in string concatenation instead of numerical addition when a string is passed as an argument.

## Bug
The `bug.js` file contains the flawed `add` function.  It incorrectly handles the addition of a number and a string. The solution demonstrates how to prevent this issue using strict equality and type checking. 

## Solution
The `bugSolution.js` file offers a corrected version of the `add` function that explicitly checks the types of inputs before performing the addition operation and throws an error if the inputs are not numbers.