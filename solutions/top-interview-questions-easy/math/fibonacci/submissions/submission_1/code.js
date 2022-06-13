/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n < 2) { return n;}
    
    return fiboN(n, 1, 0, 1);
};

function fiboN(n, curN, prevPrev, prev){
    if (curN == n) return prev;
    
    return fiboN(n, ++curN, prev, prevPrev + prev);
}

module.exports = fib;