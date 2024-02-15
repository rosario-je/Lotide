
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

module.exports = map;

const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')



/*This callback function takes an array of words, and for every word, it returns the first letter of given word*/
const results1 = map(words, word => word[0]);

assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
