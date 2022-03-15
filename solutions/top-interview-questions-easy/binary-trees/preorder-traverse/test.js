const TreeNode = require("./submissions/submission_1/code").TreeNode;
const preorderTraversal = require("./submissions/submission_1/code").preorderTraversal;

let root = new TreeNode(1, null, new TreeNode(2,3))

let result = preorderTraversal(root)
console.log(result);
