const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = (object1, object2) => {
  //Creates a variable with an array containing all the keys in given object
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //Checks if the length of the array is not the same to return false
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    //Checks for every key in both objects and compares them, if they are not the same, return false
    for (const key of keys1) {
      if (keys1[key] !== keys2[key]) {
        return false;
      } else {
        if (Array.isArray(keys1[key]) && Array.isArray(keys2[key])){
          eqArrays(keys1[key], keys2[key])
        }
      }
    }
    return true;
  }
};

// // /*Test Case 1 PRIMITIVE*/
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// assertEquals(eqObjects(shirtObject , anotherShirtObject), true);

// // /*Test Case 2 PRIMITIVE*/
// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);

/*Test Case 3 DATA STRUCTURE*/
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
// assertEquals(eqObjects(shirtObject , anotherShirtObject), true);

/*Test Case 4 DATA STRUCTURE*/
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEquals(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
