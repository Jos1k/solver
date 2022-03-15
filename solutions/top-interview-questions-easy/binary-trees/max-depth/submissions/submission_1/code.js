/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 let maxDepthVal;
 /**
  * @param {TreeNode} root
  * @return {number}
  */
 var maxDepth = function(root) {
     maxDepthVal=0;
     // if(!root) return maxDepthVal;    
     traverse(root, maxDepthVal+1);
     return maxDepthVal;
 };
 
 function traverse(node, depth){
     if(!node) return;
     
     if(!node.left && !node.right && maxDepthVal < depth){
         maxDepthVal=depth;
     }
     traverse(node.left, depth+1);
     traverse(node.right, depth+1);    
 }

 module.exports = maxDepth;