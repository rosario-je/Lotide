const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')


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

module.exports = letterPositions;

const array = "hello";

const result = letterPositions(array);

assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);

