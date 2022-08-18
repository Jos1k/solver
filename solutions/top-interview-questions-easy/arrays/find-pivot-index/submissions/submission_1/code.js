/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {    
    let leftSum = 0;
    let rightSum = 0;
    
    for(let i=0;i<nums.length;i++){
        rightSum+=nums[i];
    }
    
    for(let i=0;i<nums.length;i++){        
        if(leftSum === rightSum-nums[i]) return i;
        
        leftSum+=nums[i];
        rightSum-=nums[i];
    }
    return -1;
};

module.exports = pivotIndex;