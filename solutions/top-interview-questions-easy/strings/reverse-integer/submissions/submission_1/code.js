/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const reversedX = x.toString().split("").reverse().join("");
    let res = parseInt(reversedX);
    
    if (reversedX.endsWith("-")){
        res=res*-1;
    }
    
    if (res<Math.pow(-2, 31) || res > Math.pow(2,31)-1) {
        return 0;
    }
    return res;
};

module.exports = reverse;