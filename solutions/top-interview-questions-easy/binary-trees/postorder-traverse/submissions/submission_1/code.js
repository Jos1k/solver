
//  Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    let result = [];
    traverse(result, root);
    return result;
};

function traverse(result, root){
    if(!root) return;
    
    traverse(result, root.left);
    traverse(result, root.right);
    result.push (root.val);
}

module.exports.postorderTraversal = inorderTraversal;
module.exports.TreeNode = TreeNode;