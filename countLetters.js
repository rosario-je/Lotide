const assertEqual = require('./assertEqual')

const countLetters = (sentence) => {
  const letterCount = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
    
  console.log(letterCount);
  return letterCount;

};

module.exports = countLetters;

const expectedOutput = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const result = countLetters("lighthouse in the house");
assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
// and so on for the rest of the letters