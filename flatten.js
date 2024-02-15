const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

const flatten = (array)  => {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flatArray.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
          flatArray.push(array[i][j]);
        }
      }
    }
    return flatArray;
  }

module.exports = flatten;

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

