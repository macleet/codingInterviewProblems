/* 
Write code to partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
to be after the elements less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right partitions.

EXAMPLE
Input:  3 -> 5 -> 8 -> 5  -> 10 -> 2 -> 1 [partition = 5]
Output: 3 -> 1 -> 2 -> 10 -> 5  -> 5 -> 8
*/

const { SinglyLinkedList } = require("./LinkedList");

function partition(node, k) {
    let head = node, tail = node;
    while (node) {
        const next = node.next;
        if (node.value < k) {
            node.next = head;
            head = node;
        } else {
            tail.next = node;
            tail = node;
        }
        node = next;
    }
    tail.next = null;
    return head; // Important: Must return new head!
}

const list = new SinglyLinkedList();
list.insertEnd(3);
list.insertEnd(5);
list.insertEnd(8);
list.insertEnd(5);
list.insertEnd(10);
list.insertEnd(2);
list.insertEnd(1);
list.print();
const newHead = partition(list.head, 5);
list.print(newHead);
