/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let dupAr = [];
    for(let i=0; i<nums.length; i++) {
        if (dupAr[nums[i]] === true) {
            return true;
        }
        dupAr[nums[i]] = true;
    }
    
    return false;
};

module.exports = containsDuplicate;