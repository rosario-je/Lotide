const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const findKey = (object, callback) => {
  //for every key in the object
  for (const key in object){
    const value = object[key];
    //if the callback function returns true;
    if (callback(value)){
      return key;
    }
  }
};


const result1 = findKey(obj1, (item) => {
  return item.stars === 2
}) // => "noma"

console.log(result1);

// Assert Equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
