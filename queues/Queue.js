/*
Methods:
    enqueue(item):  Add an item to the end of the list.
    dequeue():      Remove the first item in the list.
    peek() :        Return the top of the queue.
    isEmpty():      Return true if and only if the queue is empty. 
*/

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
            return null;
        }
        this.last.next = newNode;
        this.last = newNode;
    }

    dequeue() {
        if (!this.first) return null;
        const dequeuedValue = this.first.value;
        if (this.first === this.last) [this.first, this.last] = [null, null];
        else this.first = this.first.next;
        return dequeuedValue;
    }

    peek() {
        return this.first.value ?? null;
    }

    isEmpty() {
        return this.first === null;
    }

    print() {
        const queue = [];
        let currentNode = this.first;
        while(currentNode) {
            queue.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(...queue);
    }
}
