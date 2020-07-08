// 反转一个单链表。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 使用递归
const reverseList = (head) => {
    let obj = null;
    const setValue = (node) => {
        obj = {
            val: node.val,
            next: obj
        };
        if (node.next) setValue(node.next);
    }
    if (head) setValue(head);
    return obj;
};

// 使用迭代
const reverseList = (head) => {
    let obj = null;
    let source = head;
    while (source && (source.val || source.val == 0 || source.next)) {
        obj = {
            val: source.val,
            next: obj
        };
        source = source.next;
    } 
    return obj;
};