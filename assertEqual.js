// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟢🟢🟢 Assertion Passed");
  } else {
    console.log("🔴🔴🔴 Assertion Failed");
  }
};

console.log(assertEqual("JOSE", "JOE"));
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

