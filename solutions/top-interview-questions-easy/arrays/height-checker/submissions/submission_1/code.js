/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    var expected = [...heights];
    expected.sort((a,b) => a-b);
    
    var res = 0;
    for(let i=0;i<heights.length;i++){
        if(expected[i]!=heights[i]){
            res++;
        }
    }
    return res;
};

module.exports = heightChecker;
