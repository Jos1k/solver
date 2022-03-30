let originalNums;
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    originalNums = nums;

};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return originalNums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let resAr = originalNums.map((x) => x);
  let currentIndex = resAr.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [resAr[currentIndex], resAr[randomIndex]] = [
      resAr[randomIndex], resAr[currentIndex]];
  }

  return resAr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

module.exports = Solution;