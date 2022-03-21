/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let res = [];

    const im = {
        "I": { val: 1, next: ["V", "X"] },
        "V": { val: 5 },
        "X": { val: 10, next: ["L", "C"] },
        "L": { val: 50 },
        "C": { val: 100, next: ["D", "M"] },
        "D": { val: 500 },
        "M": { val: 1000 }
    }

    let checkPrev = 0;

    for (let i = 0; i < s.length; i++) {
        if (im[s[i]].next && im[s[i]].next.includes(s[i + 1])) {
            checkPrev++;
            continue;
        } else {
            if (!checkPrev) {
                res.push(im[s[i]].val);
                continue;
            } else {
                let tempVal = im[s[i]].val;
                while (checkPrev != 0) {
                    tempVal -= im[s[i - checkPrev]].val;
                    checkPrev--;
                }
                res.push(tempVal);
                continue;
            }
        }
    }
    return res.reduce((a, b) => a + b, 0);
};

module.exports = romanToInt;