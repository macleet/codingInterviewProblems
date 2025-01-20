/*
You have two numbers represented by a linked list, where each node contains a single digit.
The digits are stored in reverse order, such that the 1 's digit is at the head of the list. 
Write a function that adds the two numbers and returns the sum as a linked list.

EXAMPLE
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
Output: 2 -> 1 -> 9. That is, 912.

FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.

EXAMPLE
Input:(6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
Output: 9 -> 1 -> 2. That is, 912. 
*/

const { SinglyLinkedList, Node } = require("./LinkedList");

function sumLists(h1, h2, carry) {
    if (!h1 && !h2 && carry === 0) return;

    const [addend1, addend2] = [h1 ? h1.value : 0, h2 ? h2.value : 0];
    const newNode = new Node();

    if (!h1) newNode.value = addend2 + carry;
    else if (!h2) newNode.value = addend1 + carry;
    
    if (h1 || h2) {
        newNode.value = addend1 + addend2 + carry;
        newNode.next = sumLists(h1?.next, h2?.next, newNode.value >= 10);
    }

    if (newNode.value >= 10) newNode.value %= 10;
    
    return newNode;
}

class PartialSum {
    constructor() {
        this.sum = null;
        this.carry = 0;
    }
}

function insertBefore(head, value) {
    const newNode = new Node(value);
    if (head) newNode.next = head;
    return newNode;
}

function padWithZeros(head, padCount) {
    while (padCount-- > 0) head = insertBefore(head, 0);
    return head;
}

function sumListHelper(h1, h2) {
    if (!h1 && !h2) return new PartialSum();
    let sum = sumListHelper(h1.next, h2.next);
    const sumHead = insertBefore(sum.sum, (h1.value + h2.value + sum.carry) % 10);
    sum.sum = sumHead;
    sum.carry = Math.floor((h1.value + h2.value + sum.carry) / 10);
    return sum;
}

function sumListsForward(h1, h2) {
    const len1 = SinglyLinkedList.length(h1), len2 = SinglyLinkedList.length(h2);
    if (len1 < len2) h1 = padWithZeros(h1, len2 - len1);
    else h2 = padWithZeros(h2, len1 - len2);

    let { sum, carry } = sumListHelper(h1, h2);
    if (carry > 0) sum = insertBefore(sum, 1);
    return sum;
}
