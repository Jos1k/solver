const searchInsert = require('./submissions/submission_1/code.js');
const input = [2, 3, 5, 6];
const target = 1;
const expected = 0;
const res = searchInsert(input, target);
console.log("RES: " + res + " EXPECTED: " + expected);