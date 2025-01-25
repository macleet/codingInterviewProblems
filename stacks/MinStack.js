/*
How would you design a stack which, in addition to push and pop, 
has a function min which returns the minimum element? 
Push, pop and min should all operate in 0(1) time.
*/

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.minNext = null;
    }
}

class MinStack {
    constructor() {
      this.top = null;
      this.minTop = null;
    }

    push(value) {
      const newNode = new Node(value);
      
      // Update min stack
      if (!this.minTop || value <= this.minTop.value) {
        newNode.minNext = this.minTop;
        this.minTop = newNode;
      } 

      // Update main stack
      newNode.next = this.top;
      this.top = newNode;
    }

    pop() {
      if (!this.top) throw new Error("Stack is empty");

      const poppedValue = this.top.value;
      
      // Update min stack
      if (this.top === this.minTop) {
        this.minTop = this.minTop.minNext;
      } 

      // Update main stack
      this.top = this.top.next;
      return poppedValue;
    }

    min() {
      if (!this.minTop) throw new Error("Stack is empty");
      return this.minTop.value;
    }

    printStack() {
      const stack = [];
      let currentNode = this.top;
      while (currentNode) {
        stack.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(...stack.reverse());
    }

    printMinStack() {
      const stack = [];
      let currentNode = this.minTop;
      while (currentNode) {
        stack.push(currentNode.value);
        currentNode = currentNode.minNext;
      }
      console.log(...stack.reverse());
    }
}

const minStack = new MinStack();
minStack.push(10);
minStack.push(1);
minStack.push(9);
minStack.push(2);
minStack.push(8);
minStack.push(-8);
minStack.push(7);

minStack.printStack();
console.log(minStack.min());
minStack.pop();
minStack.pop();
console.log(minStack.min());
minStack.pop();
minStack.pop();
minStack.pop();
minStack.pop();
console.log(minStack.min());
