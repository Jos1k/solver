/**
 * @param {number[]} digits
 * @return {number[]}
 */

var repeatedElement = function(digits){
    const digitsDictionary = new Set();
    for(let i=0;i < digits.length;i++){
        if(digitsDictionary.has(digits[i])) return digits[i];
        digitsDictionary.add(digits[i])
    }
}

module.exports = repeatedElement;