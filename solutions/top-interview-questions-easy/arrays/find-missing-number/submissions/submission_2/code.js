/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
     var sumVal = 0, sumInd = 0;
    
    for(let i=0; i<nums.length; i++){
        sumVal+=nums[i];
        sumInd+=i;
    }
    sumInd += nums.length;

    return sumInd-sumVal;
};

module.exports = missingNumber;
