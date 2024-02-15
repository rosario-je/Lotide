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
module.exports = findKey;
/*CALLBACK FUNCTION*/
const result1 = findKey(obj1, item => item.stars === 2) // => "noma"

/*---------------------------RESULT TEST CASES-----------------------------------*/
const result2 = findKey(obj1, item => item.stars === 3) // => "Akaleri"

const result3 = findKey(obj1, item => item.stars === 1) // => "Blue Hill"
/*--------------------------------------------------------------*/
// console.log(result1);


// Assert Equal
const assertEqual = require('./assertEqual')

/*---------------------------ASSERT EQUAL TEST CASES-----------------------------------*/
assertEqual(result1, "noma");
assertEqual(result2, "Akaleri");
assertEqual(result3, "Blue Hill");
