/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let sumIndex = 0, sumValues = 0;
    nums.sort(); 
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]!=i) return i;
    }
    return nums.length;
};

module.exports = missingNumber;