/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head || head.length < 2){
        return head;
    }
    
    return reverseLinkedList(head.next, new ListNode(head.val));
};

function reverseLinkedList(node, revNode){
    if(node) {  
        return reverseLinkedList(node.next, new ListNode(node.val, revNode));
    }
    return revNode;
}

module.exports = reverseList;