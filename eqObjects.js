const assertEquals = require('./assertEqual')
const eqArrays = require('./eqArrays')


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
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  
    return true;
  }
};

module.exports = eqObjects

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
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEquals(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
