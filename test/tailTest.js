const assert = require('chai').assert;
const tail = require('../tail')
//const assertEqual = require('../assertEqual')

describe("#Tail", () => {
    it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
    });
    it("returns [] for ['Lighthouse']", () => {
        assert.deepEqual(tail(['Lighthouse']), []);
    });
    it("returns ['Lighthouse', 'Labs', 'student'] for ['Hello', 'Lighthouse', 'Labs', 'student']", () => {
        assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs', 'student']), ['Lighthouse', 'Labs', 'student']);
    });
  });





// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");