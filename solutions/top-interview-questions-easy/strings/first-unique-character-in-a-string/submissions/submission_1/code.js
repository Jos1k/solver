/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {    
    const checkedChars = new Set();
    for (let i=0;i<s.length;i++) {
        if (checkedChars.has(s[i])) continue;
        if (s.indexOf(s[i], i+1) === -1) return i;
        checkedChars.add(s[i]);
    }
    return -1;
};

module.exports = firstUniqChar