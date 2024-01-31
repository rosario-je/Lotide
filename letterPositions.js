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

//iterate through sentence
//error handle so if the word is not equal to space, continue the loop, if it is, just do nothing
//if the letter does not appear in the obj, create a property for that letter and add the index position to an array
//if the letter appears in the obj, add the index value to the already existing array

const letterPositions = function(sentence) {
  const results = {};
  let index = 0;

  for (const letter of sentence) {
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [index];
      } else {
        results[letter].push(index);
      }
    }
    index++
  }
  return results;
};

const array = "hello";

const result = letterPositions(array);

assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);

