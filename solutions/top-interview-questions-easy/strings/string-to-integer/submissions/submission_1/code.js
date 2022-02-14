/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let ss = s.trim();
    let res = "";
    let i = 0;
    let minValue = Math.pow(-2,31);
    let maxValue = Math.pow(2,31) - 1;
    
    if(["-","+"].includes(ss[0])){
        i = 1;
        res+=ss[0];
    }
    
    while(['0','1','2','3','4','5','6','7','8','9'].includes(ss[i])){
        res+=ss[i];
        i++;
    }
    
    let ress = parseInt(res);
    
    if(!res || Number.isNaN(ress)) return 0;
    if(ress<minValue) return minValue;
    if(ress>maxValue) return maxValue;
    
    return ress;
};

module.exports = myAtoi;