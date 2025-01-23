/*
Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node,
so as to make a loop in the linked list.

EXAMPLE
Input: A -> B -> C -> D -> E -> F -> C [the same C as earlier]
Output: C
*/

const { SinglyLinkedList } = require("./LinkedList");

function detectCycle(node) {
    let head = node;
    let runner = node;
    while (node && runner) {
        runner = runner.next?.next;
        if (runner === node) break;
        node = node.next;
    }
    
    let cycleNode = runner;
    while (cycleNode) {
        if (runner === head) break;
        runner = runner.next;
        if (runner === cycleNode) head = head.next;
    }
    return runner;
}

const cycleList = new SinglyLinkedList();
cycleList.insertEnd("A");
cycleList.insertEnd("B");
cycleList.insertEnd("C");
cycleList.insertEnd("D");
cycleList.insertEnd("E");
cycleList.tail.next = cycleList.head.next.next;

const cycleStartNode = detectCycle(cycleList.head);
console.log(cycleStartNode);
