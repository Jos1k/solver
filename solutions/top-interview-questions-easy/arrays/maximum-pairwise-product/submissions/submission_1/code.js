/**
 * @param {number[]} arr
 * @returns {number}
 */
var max = function(arr) {
    let result = 0;

    for (let i=0;i<arr.length; i++) {
        for(j=i+1;j<arr.length;j++){
           const tempRes = arr[j]*arr[i];
           if(tempRes>result){
               result = tempRes;
           } 
        }
    }

    return result;
}

module.exports = max;