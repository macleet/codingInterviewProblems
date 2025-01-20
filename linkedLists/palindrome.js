/* Implement a function to check if a linked list is a palindrome.  */

const { Node, SinglyLinkedList } = require("./LinkedList");

function reverseList(head) {
  let newHead = null;
  while (head) {
    const newNode = new Node(head.value);
    newNode.next = newHead;
    newHead = newNode;
    head = head.next;
  }
  return newHead;
}

function isEqual(h1, h2) {
  while (h1 && h2) {
    if (h1.value !== h2.value) return false;

    h1 = h1.next;
    h2 = h2.next;

  }
  return true;
}

function palindrome(head) {
  const reversedHead = reverseList(head);
  // SinglyLinkedList.print(reversedHead)
  return isEqual(head, reversedHead);
}

const list = new SinglyLinkedList();
list.insertEnd("t");
list.insertEnd("a");
list.insertEnd("c");
list.insertEnd("o");
list.insertEnd("c");
list.insertEnd("a");
list.insertEnd("t");
list.print();
console.log(palindrome(list.head));