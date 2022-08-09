/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    const resAr = [...Array(nums.length+1).keys()];
    
    for(let i=0;i<nums.length;i++){
        resAr[nums[i]] = undefined;
    }
    
    return resAr.filter(el => !!el);
};

module.exports = findDisappearedNumbers;