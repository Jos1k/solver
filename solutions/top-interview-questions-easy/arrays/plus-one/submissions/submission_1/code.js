/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    const lastIndex = digits.length-1;
    
    if(digits[lastIndex] == 9){
        
        digits[lastIndex]=0;
        let i=lastIndex-1;
        
        while(digits[i]==9 && i>=0){
            digits[i]=0;
            i--;
        }
        
        if(i<0){
            digits.unshift(1);
        } else {
            digits[i]++;
        }
    } else {
        digits[lastIndex]++;
    }
    
    return digits;
};

module.exports = plusOne;