const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const assertObjectsEqual = require('./assertObjectsEqual')
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const eqObjects = require('./eqObjects')
const findKeyByValue = require('./findKeyByValue')
const flatten = require('./flatten')
const letterPositions = require('./letterPositions')
const findKey = require('./findKey')
const without = require('./without')


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays, 
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqObjects: eqObjects,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  findKey: findKey,
  without: without
  
};