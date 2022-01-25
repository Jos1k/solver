/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    var result = new Map();
    
    for(let i=0;i<nums1.length;i++){
        let temp = result.get(nums1[i]);
        
        if(temp){
            result.set(nums1[i], {a: ++temp.a});
        } else {
            result.set(nums1[i], {a:1});
        }
    }
    
    for(let i=0;i<nums2.length;i++){
        let temp = result.get(nums2[i]);
        
        if(temp){
            let b = temp?.b ? ++temp.b : 1;
            result.set(nums2[i], {...temp, b});
        } 
    }
    
    return [...result].filter(([name, value]) => value.a && value.b).map(([name,value]) => Array(value.a <= value.b ? value.a : value.b).fill(name)).flat();
};

module.exports = intersect;