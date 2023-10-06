# Code Functions and Tests

This repository contains a set of JavaScript functions along with their corresponding tests. Each function is designed to perform a specific task, and the tests ensure that they work as expected.

## Functions

### CAPITALIZE

- Purpose: The `capitalize` function takes a string as input and returns the same string with the first letter capitalized.
- Tests:
  - `capitalize`: Tests if the first letter of a string is capitalized.
  - `not string`: Checks if the function throws an error when the input is not a string.
  - `empty`: Checks if the function throws an error when the input is an empty string.
  - `single character`: Tests the function with a single character input.

### REVERSE STRING

- Purpose: The `reverseString` function takes a string as input and returns the string reversed.
- Tests:
  - `reverse`: Tests if the string is correctly reversed.
  - `reverse number`: Tests if the function works with a string that contains numbers.
  - `single letter`: Tests the function with a single-letter input.
  - `not string`: Checks if the function throws an error when the input is not a string.

### **CALCULATOR**

- Purpose: The `calculator` module provides basic arithmetic operations.
- Tests:
  - `sum`: Tests if the `sum` function correctly adds two numbers.
  - `multiply`: Tests if the `multiply` function correctly multiplies two numbers.
  - `subtract`: Tests if the `subtract` function correctly subtracts two numbers.
  - `divide`: Tests if the `divide` function correctly divides two numbers.
  - `random`: Tests random calculations.
  - `not a number`: Checks if the functions throw errors when provided with non-numeric inputs.
  - `no divide 0`: Checks if the `divide` function throws an error when attempting to divide by zero.

### **CAESAR CIPHER**

- Purpose: The `caesarCipher` function takes a string and a shift value as input and returns a Caesar ciphered version of the string.
- Tests:
  - `caesar cipher`: Tests if the function correctly enciphers a string with a specified shift.
  - `default shift`: Tests the function with the default shift of 1.
  - `no shift`: Tests the function with a shift value of 0.
  - `non-numeric shift`: Checks if the function throws an error when the shift value is not a number.
  - `shift longer than alphabet`: Checks if the function throws an error when the shift value is larger than 25 (length of the English alphabet).
  - `z to a`: Tests if the function wraps around when shifting from 'z' to 'a'.
  - `punctuation`: Tests if the function handles punctuation correctly.
  - `uppercase`: Tests if the function works with uppercase letters.
  - `omega test`: A comprehensive test that includes multiple aspects.

### **ANALYZE ARRAY**

- Purpose: The `analyzeArray` function takes an array of numbers as input and returns an object with information about the array.
- Tests:
  - `non array`: Checks if the function throws an error when the input is not an array.
  - `empty array`: Checks if the function throws an error when the input array is empty.
  - `non-numeric items in array`: Checks if the function throws an error when non-numeric items are found in the array.
  - `average`: Tests if the function correctly calculates the average of the array.
  - `min`: Tests if the function correctly finds the minimum value in the array.
  - `max`: Tests if the function correctly finds the maximum value in the array.
  - `length`: Tests if the function correctly calculates the length of the array.
