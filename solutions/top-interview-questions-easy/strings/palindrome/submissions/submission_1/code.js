/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const sL = Array.from(s.toLowerCase()).filter( m=> (m.charCodeAt(0) >= 97 && m.charCodeAt(0) <= 122) || (m.charCodeAt(0) >= 48 && m.charCodeAt(0) <= 57));
    let i = 0;
    let j = sL.length-1;
    
    while (i<=j){
        if(sL[i] !== sL[j]) return false;
        
        i++;
        j--;
    }
    
    return true;
};

module.exports = isPalindrome;