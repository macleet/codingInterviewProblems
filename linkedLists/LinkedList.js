class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class SinglyLinkedList {
  constructor(node) {
    this.head = node;
    this.tail = node;
  }
  
  insertAt(value, index) {
    if (index === 0) this.insertStart(value);
    
    let currentNode = this.head;
    while (currentNode) {
      if (index === 1) {
        const newNode = new Node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
      index--;
      currentNode = currentNode.next;
    }
  }
  
  insertStart(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  
  insertEnd(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
  }
  
  deleteAt(index) {
    if (index === 0) deleteStart();
    
    let currentNode = this.head;
    while (currentNode) {
      if (index === 1) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
      index--;
    }
  }
  
  deleteStart() {
    this.head = this.head.next; 
  }
  
  deleteEnd() {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next === this.tail) {
        this.tail = currentNode;
        this.tail.next = null;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  
  print() {
    let currentNode = this.head;
    const list = [];
    while (currentNode) {
      list.push(currentNode.value)
      currentNode = currentNode.next;
    }
    console.log(...list);
  }
  
  search(value) {
    let currentNode = this.head, index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        console.log(index);
        return index;
      } 
      currentNode = currentNode.next;
      index++;
    }
  }
}

class DoublyLinkedList {
  constructor(node) {
    this.head = node;
    this.tail = node;
  }
}

const head = new Node(0);
const linkedList = new SinglyLinkedList(head);
linkedList.insertEnd(1);
linkedList.insertEnd(3);
linkedList.insertEnd(4);
linkedList.insertAt(2, 2);

linkedList.deleteEnd();
linkedList.deleteStart();
linkedList.deleteAt(1);

linkedList.print();
linkedList.search(3);