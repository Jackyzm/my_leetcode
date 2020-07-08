// 两数相加

// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    const getArr = (object) => {
        const arr = [];
        const foo = (obj) => {
            arr.unshift(obj.val);
            if (obj.next) foo(obj.next);
        }
        foo(object);
        return arr;
    }

    const l1Arr = getArr(l1);
    const l2Arr = getArr(l2);
    
    const num = BigInt(l1Arr.join('')) + BigInt(l2Arr.join(''));

    const resultArr = [...(num.toString().split('n')[0])];

    let result = null;

    resultArr.map((item, index)=>{
        result = {
            val: item,
            next: result
        }
    })

    return result;
};