/*
Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. 
Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and 
should create a new stack once the previous one exceeds capacity.
SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
(that is, pop() should return the same values as it would if there were just a single stack).

FOLLOW UP
Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.
*/

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class Stack {
    constructor(capacity = 10) {
        this.top = null;
        this.capacity = capacity;
        this.size = 0;
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

    pop() {
        const popppedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return popppedValue;
    } 
}

class StackOfPlates {
    constructor(capacity) {
        this.capacity = capacity;
        this.stacks = [];
    }

    push(value) {
        if (this.stacks.length === 0) {
            const newStack = new Stack(this.capacity);
            this.stacks.push(newStack);
        }
        
        let currentStack = this.stacks[this.stacks.length - 1];
        if (currentStack.size === currentStack.capacity) {
            const newStack = new Stack(this.capacity);
            this.stacks.push(newStack);
            currentStack = newStack;
        }
        currentStack.push(value);
    }

    pop() {
        if (this.stacks.length === 0) throw new Error("No stacks");

        const currentStackIndex = this.stacks.length - 1;
        this.stacks[currentStackIndex].pop();
        if (!this.stacks[currentStackIndex].top) this.stacks.pop();
    }

    popAt(index) {
        if (this.stacks.length === 0) throw new Error("No stacks");
        else if (index > this.stacks.length - 1) throw new Error(`Stack with index ${index} does not exist`);

        const poppedValue = this.stacks[index].pop();
        if (!this.stacks[index].top) this.stacks.splice(index, 1);
        return poppedValue;
    }

    printStacks() {
        this.stacks.map((stack) => {
            const currentStack = [];
            let currentNode = stack.top;
            while (currentNode) {
                currentStack.push(currentNode.value);
                currentNode = currentNode.next;
            }
            console.log(...currentStack.reverse());
        });
    }
}

const stackOfPlates = new StackOfPlates();
stackOfPlates.push(1);
stackOfPlates.push(2);
stackOfPlates.push(3);
stackOfPlates.push(4);
stackOfPlates.push(5);
stackOfPlates.push(6);
stackOfPlates.push(7);
stackOfPlates.push(8);
stackOfPlates.push(9);
stackOfPlates.push(10);

stackOfPlates.push(11);
stackOfPlates.push(12);
stackOfPlates.push(13);
stackOfPlates.push(14);
stackOfPlates.push(15);
stackOfPlates.push(16);
stackOfPlates.push(17);
stackOfPlates.push(18);
stackOfPlates.push(19);
stackOfPlates.push(20);

stackOfPlates.push(21);
stackOfPlates.push(22);
stackOfPlates.push(23);
stackOfPlates.push(24);
stackOfPlates.push(25);
stackOfPlates.push(26);
stackOfPlates.push(27);
stackOfPlates.push(28);
stackOfPlates.push(29);
stackOfPlates.push(30);

stackOfPlates.printStacks();

stackOfPlates.popAt(1);
stackOfPlates.popAt(1);
stackOfPlates.popAt(1);
stackOfPlates.popAt(1);
stackOfPlates.popAt(1);
stackOfPlates.popAt(1);
stackOfPlates.popAt(1);
stackOfPlates.popAt(1);
stackOfPlates.popAt(1);
stackOfPlates.popAt(1);

stackOfPlates.printStacks();

stackOfPlates.popAt(1);
stackOfPlates.popAt(1);
stackOfPlates.popAt(1);

stackOfPlates.printStacks();

stackOfPlates.push(11);
stackOfPlates.push(12);
stackOfPlates.push(13);
stackOfPlates.push(14);
stackOfPlates.push(15);
stackOfPlates.push(16);
stackOfPlates.push(17);
stackOfPlates.push(18);
stackOfPlates.push(19);
stackOfPlates.push(20);

stackOfPlates.printStacks();
