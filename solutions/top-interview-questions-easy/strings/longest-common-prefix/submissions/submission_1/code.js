/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let res = "";
    
    for (let i=0;i<strs[0].length;i++){
        const tempRes = res+strs[0][i];
        
        for (let j=1;j<strs.length;j++){
            if(strs[j].startsWith(tempRes)){
                continue;
            } else {
                return res;
            }
        }
        res = tempRes;
    }
    return res;
};

module.exports = longestCommonPrefix;