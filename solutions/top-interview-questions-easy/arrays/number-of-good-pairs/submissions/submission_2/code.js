/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let res = 0;
    let countAr = {};
    for(let i=0;i<nums.length;i++){
        if(!countAr[nums[i]]) { 
            countAr[nums[i]] = 1; 
        } else {
            countAr[nums[i]]++;
        }
    }
    for(let number in countAr){
        const n = countAr[number];
        res += ( n * ( n - 1 ) ) / 2;
    }
    return res;
};

module.exports = numIdenticalPairs;