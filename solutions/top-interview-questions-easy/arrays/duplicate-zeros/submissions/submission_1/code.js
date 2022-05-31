/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    let prev = undefined;
    for(let i=1;i<arr.length;i++){
        if(arr[i-1] == 0){
            prev = arr[i];
            arr[i]=0;
            i++;
        } else if (prev !== undefined){
            const temp = arr[i];
            arr[i] = prev;
            prev = temp;
        }
    }
};

module.exports = duplicateZeros;