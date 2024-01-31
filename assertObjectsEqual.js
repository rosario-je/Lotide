const eqObjects = (object1, object2) => {
  //Creates a variable with an array containing all the keys in given object
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //Checks if the length of the array is not the same to return false
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    //Checks for every key in both objects and compares them, if they are not the same, return false
    for (const key of keys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  
    return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  console.log(`Example label: ${inspect(actual)}`);
};

