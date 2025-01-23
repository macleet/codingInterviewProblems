/*
Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. 
Note that the intersection is defined based on reference, not value. 
That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting. 
*/

const { SinglyLinkedList, Node } = require("./LinkedList");

function padWithZeros(head, padCount) {
    while (padCount-- > 0) head = insertBefore(head, 0);
    return head;
}

function insertBefore(head, value) {
    const newNode = new Node(value);
    if (head) newNode.next = head;
    return newNode;
}

function intersection(h1, h2) {
    const len1 = SinglyLinkedList.length(h1);
    const len2 = SinglyLinkedList.length(h2);

    h1 = padWithZeros(h1, len2 - len1);
    h2 = padWithZeros(h2, len1 - len2);

    while (h1 && h2) {
        if (h1 === h2) return h1; 
        h1 = h1.next;
        h2 = h2.next;
    }
}

const list1 = new SinglyLinkedList();
list1.insertEnd(1);
list1.insertEnd(2);
list1.insertEnd(3);

const list2 = new SinglyLinkedList();
list2.insertEnd(6);
list2.insertEnd(7);

const intersect = new SinglyLinkedList();
intersect.insertEnd(4);
intersect.insertEnd(5);

// Create intersect
list1.tail.next = intersect.head;
list2.tail.next = intersect.head;

const intersectNode = intersection(list1.head, list2.head);
SinglyLinkedList.print(intersectNode);
