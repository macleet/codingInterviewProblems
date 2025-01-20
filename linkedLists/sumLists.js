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

function sumListsForward(h1, h2, carry) {

}

const num1 = new SinglyLinkedList();
num1.insertEnd(6);
num1.insertEnd(6);
num1.insertEnd(6);
num1.insertEnd(6);
num1.print();

const num2 = new SinglyLinkedList();
num2.insertEnd(9);
num2.insertEnd(9);
num2.insertEnd(9);
num2.insertEnd(9);
num2.insertEnd(9);
num2.print();

const newHead = sumLists(num1.head, num2.head, 0);
SinglyLinkedList.print(newHead);
