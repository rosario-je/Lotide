const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (eqArrays, expected) => {
  // Call eqArrays and print the appropriate message based on the result
  if (eqArrays === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${eqArrays} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${eqArrays} !== ${expected}`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //Pass
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); //Fail
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) //Pass
// eqArrays(["1", "2", "3"], ["1", "2", 3]) //Fail