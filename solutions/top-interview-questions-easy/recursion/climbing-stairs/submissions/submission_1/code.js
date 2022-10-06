/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function (n) {
    let cache = new Array(46).fill(0);
    return solve(n, cache);
};

function solve(n, cache) {
    if (n < 0) return 0;
    if (n == 0) return 1;

    let val = cache[n];

    if (val != 0) return val;

    val = solve(n - 1, cache) + solve(n - 2, cache);
    cache[n] = val;

    return val;
}

module.exports = climbStairs;