/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var rotate = function(nums, k) {
    let kk = k % nums.length;
    
    let tail = nums.slice(kk * -1);
    let head = nums.slice(0, nums.length-kk);
    
    for(let i=0;i<nums.length;i++){
        if(i<kk){
            nums[i]=tail[i];
        } else {
            nums[i]=head[i-kk]
        }
    }
};

module.exports = rotate;