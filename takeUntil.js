
//Array 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//Array 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  const result = []
  //For every item in the array
  for (const number of array){
    //the callback function returns true for this number, return the results array
    if (callback(number)){
      return result;
    }
    //If the callback returns false, push said number **LOOK AT CALLBACK FUNCTION 
    result.push(number)
  }
  return result;
}

/*CALLBACK FUNCTION*/
//Call initial function to run through every item in data1, return true if the number is less than 0
const results1 = takeUntil(data1, (item) => {
  return item < 0
});

const results2 = takeUntil(data2, x => x === ',');

console.log(results1);
console.log('---');
console.log(results2);