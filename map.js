const assertArraysEqual = (arr1, arr2) => {
  // Call eqArrays and print the appropriate message based on the result
  let check = eqArrays(arr1, arr2);
  if (check === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


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
}

/*This callback function takes an array of words, and for every word, it returns the first letter of given word*/
const results1 = map(words, word => word[0]); 
console.log(results1);