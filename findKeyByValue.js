const assertEqual = require('./assertEqual')

//iterate through all the keys in the object
//if the given key has the same value as the given value, return the key


const findKeyByValue = (object, value) => {
  for (const genre in object){
    const movie = object[genre];
    if (movie === value){
      return genre;
    }
  }
}

module.exports = findKeyByValue;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);