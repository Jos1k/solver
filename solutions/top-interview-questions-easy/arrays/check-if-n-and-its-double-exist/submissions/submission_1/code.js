/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    let hashT = [];
    for(let i=0;i<arr.length;i++){
        const curr = arr[i];
        if (hashT[curr*2] != undefined || hashT[curr/2] != undefined){
            return true;
        }
        hashT[curr] = curr;

    }
    return false;
};