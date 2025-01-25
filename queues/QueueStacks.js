/* Implement a MyQueue class which implements a queue using two stacks. */

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    pop() {
        if (!this.top) return;
        const poppedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return poppedValue;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
            this.size++;
            return;
        }
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    peek() {
        return this.top.value;
    }

    isEmpty() {
        return this.size === 0;
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

class Queue {
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
    }

    enqueue(value) {
        this.pushStack.push(value);
    }

    dequeue() {
        if (this.popStack.isEmpty() && this.pushStack.isEmpty()) throw Error("Queue is empty");

        if (this.popStack.size === 0) {
            this.transferPushStack();
        }
        return this.popStack.pop();
    }

    transferPushStack() {
        while (this.pushStack.size > 0) {
            const value = this.pushStack.pop();
            this.popStack.push(value);
        }
    }

    print() {
        const queue = [];
        let currentNode = this.popStack.top;
        while (currentNode) {
            queue.push(currentNode.value);
            currentNode = currentNode.next;
        }

        const pushStack = [];
        currentNode = this.pushStack.top;
        while (currentNode) {
            pushStack.push(currentNode.value);
            currentNode = currentNode.next;
        }
        queue.push(...pushStack.reverse());

        console.log(...queue);
    }
} 
