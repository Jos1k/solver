/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    if (nums.length<3) { return nums[0]; } //what if length ==2???
    
    const sortedNums = nums.sort();
    
    if(sortedNums[0]!=sortedNums[1]) { return sortedNums[0]; }
    
    for (let i=1;i < sortedNums.length-1; i++){
        if(sortedNums[i]!=sortedNums[i-1] && sortedNums[i]!=sortedNums[i+1]){
            return sortedNums[i]
        }
    }
    
    return sortedNums[sortedNums.length-1];
};

module.exports = singleNumber;