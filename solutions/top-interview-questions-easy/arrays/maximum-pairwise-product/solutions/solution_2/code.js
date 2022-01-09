
/**
 * @param {number[]} arr
 * @returns {number}
 */
 var max = function(arr) {
    if (arr.length == 2) return arr[0] * arr[1];

    let maxIndex1 = -1;
    let maxIndex2 = -1;

    for (let i=0;i<arr.length; i++) {
        if(maxIndex1 === -1 || arr[i]>arr[maxIndex1]){
            maxIndex1=i;
        }
    }

    for (let i=0; i<arr.length; i++) {
        if((maxIndex2 === -1 || arr[i] > arr[maxIndex2]) && i !== maxIndex1){
            maxIndex2=i;
        }
    }

    return arr[maxIndex1] * arr[maxIndex2];
}

module.exports = max;