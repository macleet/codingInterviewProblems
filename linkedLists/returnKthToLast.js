/* Implement an algorithm to find the kth to last element of a singly linked list. */

const { SinglyLinkedList } = require("./LinkedList");

// Iterative
function returnKthToLast(node, k) {
    let p1 = node, p2 = node;
    for (let i = 0; i < k; i++) {
        if (!p1) return null;
        p1 = p1.next;
    }
    while (p1) {
        p1 = p1.next;
        p2 = p2.next;
    }
}

// Recursive
// function returnKthToLast(node, k) {
//     if (!node) return 0;
//     const index = returnKthToLast(node.next, k) + 1;
//     if (index === k) console.log(node.value);
//     return index;
// }

const list = new SinglyLinkedList();
list.insertEnd(1);
list.insertEnd(2);
list.insertEnd(3);
list.insertEnd(4);
list.insertEnd(5);
list.insertEnd(6);
list.print();
returnKthToLast(list.head, 5);