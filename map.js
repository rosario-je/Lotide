
//Array of Words
const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  //For every item of the array
  for (let item of array) {
    //Push the result of the callback function into the results array
    results.push(callback(item));
  }
  return results;
};


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

/*This callback function takes an array of words, and for every word, it returns the first letter of given word*/
const results1 = map(words, word => word[0]);
assertArraysEqual(results1[0],"g");
assertArraysEqual(results1[1],"c");
assertArraysEqual(results1[2],"t");
assertArraysEqual(results1[3],"m");
assertArraysEqual(results1[4],"t");