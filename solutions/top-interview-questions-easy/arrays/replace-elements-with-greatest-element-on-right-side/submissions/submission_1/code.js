/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    var rightEls = [arr[arr.length-1]];
    arr[arr.length-1]=-1;
    
    for(let i=arr.length-2;i>=0;i--){
        const temp = arr[i];
        arr[i]=Math.max(...rightEls);
        rightEls.push(temp);
    }
    return arr;
};

module.exports = replaceElements;