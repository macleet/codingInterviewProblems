/*
Write code to remove duplicates from an unsorted linked list.
Follow up: How would you solve this problem if a temporary buffer is not allowed?
Assumption: List nodes cannot be rearranged and must preserve order.
*/

const { SinglyLinkedList, DoublyLinkedList } = require("./LinkedList.js");

// Using hash set (SLL)
// function removeDups(node) {
//     const set = new Set();
//     let previousNode = null;
//     while (node) {
//         if (set.has(node.value)) {
//             previousNode.next = node.next;
//         } else {
//             set.add(node.value);
//             previousNode = node;
//         }
//         node = node.next;
//     }
// }

// Using hash map (DLL)
// function removeDups(node) {
//     const set = new Set();
//     while (node) {
//         if (set.has(node.value)) {
//             if (node.prev) node.prev.next = node.next;
//             if (node.next) node.next.prev = node.prev;
//         } else set.add(node.value);
//         node = node.next;
//     }
// }

// No buffer (SLL)
// function removeDups(node) {
//     while (node) {
//         let runner = node;
//         while (runner.next) {
//             if (runner.next.value === node.value) runner.next = runner.next.next;
//             else runner = runner.next;
//         }
//         node = node.next;
//     }
// }

// No buffer (DLL)
function removeDups(node) {
    while (node) {
        let runner = node;
        while (runner.next) {
            if (runner.next.value === node.value) {
                if (runner.next.next) runner.next.next.prev = runner;
                runner.next = runner.next.next;
            }
            else runner = runner.next;
        }
        node = node.next;
    }
}
