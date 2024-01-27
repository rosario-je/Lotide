const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
    } 
  }
  return console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`);
};

eqArrays([1, 2, 3], [1, 2, 3]) //Pass
eqArrays([1, 2, 3], [3, 2, 1]) //Fail
eqArrays(["1", "2", "3"], ["1", "2", "3"]) //Pass
eqArrays(["1", "2", "3"], ["1", "2", 3]) //Fail