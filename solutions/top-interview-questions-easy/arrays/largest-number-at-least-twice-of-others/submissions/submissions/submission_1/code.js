/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function(nums) {
    let maxI = 0;
    let max = nums[maxI];
    
    for (let i=1; i < nums.length; i++)
        if(nums[i]  > max){               
            maxI = i;
            max = nums[i];
        }
    
    
    for(let i=0;i<nums.length;i++)
        if(i!=maxI && nums[i]*2 > max)
            return -1;
    
    
    return maxI;
};

module.exports = dominantIndex;