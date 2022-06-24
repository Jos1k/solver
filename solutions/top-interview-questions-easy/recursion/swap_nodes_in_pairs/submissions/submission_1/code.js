/**
 * Definition for singly-linked list.*/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head;

    const curNode = head;
    const nextNode = head.next;
    curNode.next = nextNode.next;

    head = nextNode;
    head.next = curNode;

    swapPairsRec(false, head);

    return head;
};


function swapPairsRec(isSwap, node){
    if(!node || !node.next || !node.next.next) return;
    
    if(!isSwap){
        return swapPairsRec(true, node.next);
    }
    
    const nextNode = node.next;
    const nextNextNode = node.next.next;
    const nextNextNextNode = node.next.next.next;
    
    nextNode.next = nextNextNextNode;
    nextNextNode.next = nextNode;
    node.next = nextNextNode;
    
    return swapPairsRec(false, node.next);
}

module.exports = { swapPairs, ListNode }