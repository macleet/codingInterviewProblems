class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class SinglyLinkedList {
  constructor(node = null) {
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
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  
  insertEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  
  deleteAt(index) {
    if (index === 0) this.deleteStart();
    
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
  constructor(node = null) {
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
        newNode.next.prev = newNode;
        newNode.prev = currentNode;
        currentNode.next = newNode;
      }
      index--;
      currentNode = currentNode.next;
    }
  }
  
  insertStart(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  
  insertEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    } 
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  
  deleteAt(index) {
    if (this.head === this.tail && index !== 0) return; 
    else if (index === 0) this.deleteStart();
    
    let currentNode = this.head;
    while (currentNode) {
      if (index === 1) {
        currentNode.next.next.prev = currentNode;
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
      index--;
    }
  }
  
  deleteStart() {
    this.head.next.prev = null;
    this.head = this.head.next; 
  }
  
  deleteEnd() {
    this.tail = this.tail.prev;
    this.tail.next = null;    
  }
  
  print(reverse = false) {
    let currentNode = reverse ? this.tail : this.head;
    const list = [];
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = reverse ? currentNode.prev : currentNode.next;
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

const head = new Node(0);

// Singly Linked List
const singlyLL = new SinglyLinkedList(head);
singlyLL.insertEnd(1);
singlyLL.insertEnd(3);
singlyLL.insertEnd(4);
singlyLL.insertAt(2, 2);

singlyLL.deleteEnd();
singlyLL.deleteStart();
singlyLL.deleteAt(1);

singlyLL.print();
singlyLL.search(3);

// Doubly Linked List
const doublyLL = new DoublyLinkedList(head);
doublyLL.insertEnd(1);
doublyLL.insertEnd(3);
doublyLL.insertEnd(4);
doublyLL.insertAt(2, 2);

doublyLL.deleteEnd();
doublyLL.deleteStart();
doublyLL.deleteAt(1);

doublyLL.print();
doublyLL.print(true);
doublyLL.search(3);
