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
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    } 

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
  
  print(head = null) {
    let currentNode = head ? head : this.head;
    const list = [];
    while (currentNode) {
      list.push(currentNode.value)
      currentNode = currentNode.next;
    }
    console.log(...list);
  }
  
  static print(node) {
    const list = [];
    while (node) {
      list.push(node.value);
      node = node.next;
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
      if (index === 0) {
        if (currentNode.prev) currentNode.prev.next = currentNode.next;
        if (currentNode.next) currentNode.next.prev = currentNode.prev;
        return;
      }
      currentNode = currentNode.next;
      index--;
    }
  }
  
  deleteStart() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    } 
    this.head.next.prev = null;
    this.head = this.head.next; 
  }
  
  deleteEnd() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;    
  }
  
  print(node = null, reverse = false) {
    currNode = node ? node : (reverse ? this.tail : this.head);
    const list = [];
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = reverse ? currentNode.prev : currentNode.next;
    }
    console.log(...list);
  }

  static print(node) {
    const list = [];
    while (node) {
      list.push(node.value);
      node = node.next;
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

module.exports = { Node, SinglyLinkedList, DoublyLinkedList };