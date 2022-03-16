/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 let result;
 /**
  * @param {TreeNode} root
  * @param {number} targetSum
  * @return {boolean}
  */
 var hasPathSum = function(root, targetSum) {
     result=false;
     isPathSum(root, 0, targetSum)
     return result;
 };
 
 function isPathSum(root, sum, targetSum){
     if(!root || result) return;
     
     const tempSum = sum + root.val;
     
     if(!root.left && !root.right && targetSum === tempSum){
         result = true;
         return;
     }
     
     isPathSum(root.left, tempSum, targetSum);
     isPathSum(root.right, tempSum, targetSum);
 }

 module.exports = hasPathSum;