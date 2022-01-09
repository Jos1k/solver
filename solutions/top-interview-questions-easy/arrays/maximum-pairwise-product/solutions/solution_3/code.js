/**
 * @param {number[]} arr
 * @returns {number}
 */
 var max = function(arr) {
    if (arr.length == 2) return arr[0] * arr[1];

    let maxIndex1 = 0;
    let maxIndex2 = 1;

    for (let i=2;i<arr.length; i++) {
        if (arr[i]>arr[maxIndex1]) {
            if(arr[maxIndex1]>arr[maxIndex2]){
                maxIndex2=maxIndex1;
            }
            maxIndex1=i;
        } else if(arr[i]>arr[maxIndex2]){
            maxIndex2=i;
        }
    }

    return arr[maxIndex1] * arr[maxIndex2];
}

module.exports = max;