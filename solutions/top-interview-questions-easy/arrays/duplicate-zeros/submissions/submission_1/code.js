/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    const res = [];
    let i=0; 
    while (res.length < arr.length) {
        if(arr[i]!=0){
            res.push(arr[i]);
            i++;
        } else {
            res.push(0);
            
            if (res.length < arr.length){
                res.push(0);
            }
            
            i++;
        }
    }
    for(let i=0;i<res.length;i++){
        arr[i]=res[i];
    }
};

module.exports = duplicateZeros;