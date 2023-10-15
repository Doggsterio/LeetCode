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
var middleNode = function(head) {
    let middlePointer = head;
    let endPointer = head;

    while (endPointer && endPointer.next) {
        endPointer = endPointer.next.next;
        middlePointer = middlePointer.next;
    }

    return middlePointer;
};