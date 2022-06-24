const { ListNode, swapPairs } = require("./code.js");

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

let res = swapPairs(head);

let strRes = "";

while(res && res.val){
    strRes+= res.val + ",";
    res = res.next;
}

console.log("RESULT: " + strRes);