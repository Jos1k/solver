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
  * @return {number}
  */
 var countUnivalSubtrees = function(root) {
     result = 0;
     countUnival(root);
     return result;
 };
 
 function countUnival(node){
     if(!node) return null;
     if(!node.left && !node.right){
         result++;
         return { val:node.val, isUni:true};
     }
     const left = countUnival(node.left);    
     let leftEq = false;
     if(left==null || (left.val == node.val && left.isUni)) leftEq = true;
     
     let rightEq = false;
     const right = countUnival(node.right);
     if(right==null || (right.val == node.val && right.isUni)) rightEq = true;
     
     if(leftEq && rightEq) { 
         result++; 
         return { val:node.val, isUni:true};
     }
     return { val:node.val, isUni:false};
 }

 module.exports = countUnivalSubtrees;