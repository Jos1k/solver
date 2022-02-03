/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    
    const s1 = Array.from(s).sort();
    const t1 = Array.from(t).sort();
    
    for(let i=0;i<s1.length;i++){
        if(t1[i]!=s1[i]) return false;
    }
    return true;
};

module.exports = isAnagram;