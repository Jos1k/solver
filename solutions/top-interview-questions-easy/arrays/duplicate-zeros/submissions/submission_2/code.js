//TODO: need to adjust to [0,4,1,0,0,8,0,0,3]

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    let prev = undefined;
    let prevZero = false;
    for(let i=0;i<arr.length;i++){
        if (prev != undefined){
            const temp = arr[i];
            arr[i] = prev;
            prev = temp;
        }
        
        if(arr[i] == 0 && prevZero == false){
            prevZero = true;
        } else if (prevZero==true){
            prev=arr[i];
            arr[i]=0;

            prevZero=false;
        }
    }
};

module.exports = duplicateZeros;