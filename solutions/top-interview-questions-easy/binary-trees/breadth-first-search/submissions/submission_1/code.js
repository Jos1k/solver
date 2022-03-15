/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 let levels = [];
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    levels=[];
     if(!root) return levels;
     helper(root, 0);
     return levels;
 };
 
 function helper(node, level){
     if (levels.length == level) levels.push([])
     
     levels[level].push(node.val);
     
     if (node.left) helper(node.left, level+1);
     if (node.right) helper(node.right, level+1);    
 }