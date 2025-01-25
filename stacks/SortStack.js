/* 
Write a program to sort a stack such that the smallest items are on the top. 
You can use an additional temporary stack, but you may not copy the elements into any other data structure
(such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
*/

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class SortStack {
    constructor() {
        this.top = null;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.top) {
            this.top = newNode;
            return;
        }

        if (value > this.top.value) {
            const node = this.findNodePosition(value);
            newNode.next = node.next;
            node.next = newNode;
            return;
        }

        newNode.next = this.top;
        this.top = newNode
    }
    
    pop() {
        if (!this.top) throw new Error("SortStack is empty");

        const poppedValue = this.top.value;
        this.top = this.top.next;
        return poppedValue;
    }

    findNodePosition(value) {
        let currentNode = this.top;
        while (currentNode.next) {
            if (currentNode.next.value >= value) return currentNode;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    peek() {
        if (!this.top) throw new Error("SortStack is empty");
        return this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }

    print() {
        const stack = [];
        let currentNode = this.top;
        while (currentNode) {
            stack.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(...stack.reverse());
    }
}

const sortStack = new SortStack();
sortStack.push(10);
sortStack.push(8);
sortStack.push(7);

sortStack.print();

sortStack.push(9);

sortStack.print();

sortStack.push(11);

sortStack.print();

sortStack.pop();
sortStack.pop();
sortStack.pop();
sortStack.pop();
sortStack.pop();

sortStack.print();