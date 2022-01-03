/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let result = nums.length;
    let i = 0;
    while( i < result - 1 ) {
        if( nums[i] === nums[i+1] ) {
            for( let j = i + 1; j < result - 1; j++ ) {
                nums[j] = nums[j+1];
            }
            result--;
        } else {
            i++;
        }
    }
    return result;
};
