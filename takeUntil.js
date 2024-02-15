
//Array 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//Array 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  const result = [];
  //For every item in the array
  for (const value of array) {
    //the callback function returns true for this number, return the results array
    if (callback(value)) {
      return result;
    }
    //If the callback returns false, push said number **LOOK AT CALLBACK FUNCTION
    result.push(value);
  }
  return result;
};
module.exports = takeUntil
/*CALLBACK FUNCTION*/
//Call initial function to run through every item in data1, return true if the number is less than 0
const results1 = takeUntil(data1, (item) => {
  return item < 0;
});


const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')



const results2 = takeUntil(data2, x => x === ',');

console.log(results1);
console.log('---');
console.log(results2);


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);