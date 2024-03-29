const assert = require('chai').assert
//const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

describe('#middle', () =>{
    it ('Should return [] for [1]', () => {
        assert.deepEqual(middle([1]), [])
    })
    it ('Should return [] for [1, 2]', () => {
        assert.deepEqual(middle([1, 2]), [])
    })
    it ('Should return [2] for [1, 2, 3]', () => {
        assert.deepEqual(middle([1, 2, 3]), [2])
    })
    it ('Should return [3] for [1, 2, 3, 4, 5]', () => {
        assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
    })
    it ('Should return [2, 3] for [1, 2, 3, 4]', () => {
        assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
    })
    it ('Should return [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
        assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
    })
})

// assertArraysEqual(middle([1]), []) // => []
// assertArraysEqual(middle([1, 2]), []) // => []);

// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

// assertArraysEqual(middle([1, 2, 3, 4]) ,[2, 3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]