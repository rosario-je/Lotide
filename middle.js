const middle = (array) => {
  if (array.length === 1 || array.length === 2){
    return []
  }else if (array.length % 2 == 1){
    const middle = Math.floor(array.length / 2)
    const value = array[middle];
    return [value];
  } else if (array.length % 2 == 0){
    const firstNum = (Math.floor(array.length / 2) -1)
    const secondNum = (array.length / 2) 
    return [array[firstNum], array[secondNum]]
  }
}

module.exports = middle;
