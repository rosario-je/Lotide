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

const assertArraysEqual = (arr1, arr2) => {
  // Call eqArrays and print the appropriate message based on the result
  let check = eqArrays(arr1, arr2);
  if (check === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = (array)  => {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!array.isArray(array[i])) {
      flatArray.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        if (!array.isArray(array[j])) {
          flatArray.push(array[j]);
        }
      }
    }
  }
  return flatArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), true); // => [1, 2, 3, 4, 5, 6]
