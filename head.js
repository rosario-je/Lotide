// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return text [0];
}

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

assertEqual(true, false);
assertEqual(true, true);
assertEqual(false, false);
