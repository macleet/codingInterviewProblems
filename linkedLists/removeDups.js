/*
Write code to remove duplicates from an unsorted linked list.
Follow up: How would you solve this problem if a temporary buffer is not allowed?
Assumption: List nodes cannot be rearranged and must preserve order.
*/

const { DoublyLinkedList } = require("./LinkedList.js");

// Using hash map
// function removeDups(list) {
//     const nums = new Map();
//     let currentNode = list.head;
//     while (currentNode) {
//         if (nums[currentNode.value]) {
//             if (currentNode.prev) currentNode.prev.next = currentNode.next;
//             if (currentNode.next) currentNode.next.prev = currentNode.prev;
//         } else nums[currentNode.value] = true;
//         currentNode = currentNode.next;
//     }
// }

// No buffer
function removeDups(list) {
  
}

const linkedList = new DoublyLinkedList();
linkedList.insertStart(4);
linkedList.insertStart(2);
linkedList.insertStart(2);
linkedList.insertStart(2);
linkedList.insertStart(4);
linkedList.print();
removeDups(linkedList);
linkedList.print();