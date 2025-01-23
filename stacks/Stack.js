/*
Methods:
    pop() :     Remove the top item from the stack.
    push(item): Add an item to the top of the stack.
    peek():     Return the top of the stack.
    isEmpty():  Return true if and only if the stack is empty.
*/

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    pop() {
        if (!this.top) return;
        const poppedValue = this.top.value;
        this.top = this.top.next;
        return poppedValue;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
            return;
        }
        newNode.next = this.top;
        this.top = newNode;
    }

    peek() {
        return this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }

    print() {
        const stack = [];
        let currentNode = this.top;
        while(currentNode) {
            stack.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(...stack.reverse());
    }
}
