/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    if(nums[0] + nums[1] === target){
        return [0,1]
    }
    
    const numsSet = new Set(nums);
        
    for (var i=0;i<nums.length;i++) {        
        let dif = target - nums[i];
        
        if (!numsSet.has(dif)){
            continue;
        }
        
        for(var j=i+1;j<nums.length;j++){
            if(nums[j] === dif) return [i,j]
        }
    }
};

module.exports = twoSum;