const brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const bracketsStack = [];
    
    for (let i=0;i<s.length;i++) {
        if (brackets[s[i]]) {
           bracketsStack.push(brackets[s[i]]);
        } else if(bracketsStack.pop() != s[i]){
            return false;
        }
    }
    
    return !bracketsStack.length;
};

module.exports = isValid;