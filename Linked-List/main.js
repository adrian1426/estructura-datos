class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }
  }

  show() {
    let current = this.head;

    while (current !== null) {
      console.log("current.value: ", current.value);
      current = current.next;
    }
  }

  clear() {
    this.head = null;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  delete(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let current = this.head;

      while (current.next !== null) {
        if (current.next.value === value) {
          current.next = current.next.next;
          break;
        }

        current = current.next;
      }
    }
  }
}

const linkedList = new LinkedList();
linkedList.add('A');
linkedList.add('B');
linkedList.add('C');

console.log("linkedList: ", linkedList)