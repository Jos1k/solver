/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    let result = [];
    let exStack = [];
    if (root) {
        exStack.push(root)
    }

    while(exStack.length){
        const currentNode = exStack.pop();
        
        result.push(currentNode.val);
        
        if(currentNode.right) {
            exStack.push(currentNode.right);
        }
        if(currentNode.left){
            exStack.push(currentNode.left);
        }
    }
    
    return result;
};