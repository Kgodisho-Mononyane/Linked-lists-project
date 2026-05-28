class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  size() {
    return this.size;
  }

  listHead() {
    if (this.isEmpty()) {
      return;
    } else {
      return this.head.value;
    }
  }

  listTail() {
    if (this.isEmpty()) {
      return;
    } else {
      return this.tail.value;
    }
  }

  at(index) {
    if (index < 0 || index > this.size) {
      return;
    } else {
      let curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
      return curr.value;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }

  contains(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  findIndex(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  toString() {
    if (this.isEmpty()) {
      console.log("");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `( ${curr.value} ) -> `;
        curr = curr.next;
      }
      console.log(`${listValues}null`);
    }
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size || this.isEmpty()) {
      throw new RangeError("Out of range");
    }

    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}
