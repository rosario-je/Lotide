const eqArrays = require('./eqArrays')

const assertArraysEqual = (arr1, arr2) => {
  // Call eqArrays and print the appropriate message based on the result
  let check = eqArrays(arr1, arr2);
  if (check) {
    console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual
