class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    this.length++;
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  show() {
    let current = this.head;

    console.log("--------------------------------------")
    console.log(`Cabeza: ${this.head?.value}`);
    console.log(`Cola: ${this.tail?.value}`);
    console.log("--------------------------------------")

    while (current !== null) {
      console.log("Value: ", current.value);
      console.log("next: ", current.next);
      console.log("prev: ", current.prev);

      current = current.next;
    }
  }

  reverse() {
    let current = this.tail;

    console.log("--------------------------------------")
    console.log(`Cabeza: ${this.head?.value}`);
    console.log(`Cola: ${this.tail?.value}`);
    console.log("--------------------------------------")

    while (current !== null) {
      console.log("Value: ", current.value);
      console.log("next: ", current.next);
      console.log("prev: ", current.prev);

      current = current.prev;
    }
  }

  delete(value) {
    if (this.length === 0) return;

    if (this.head.value === value) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      this.length--;
    } else if (this.tail.value === value) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this, this.length--;
    } else {
      let current = this.head;

      while (current.next !== null) {
        if (current.next.value === value) {
          current.next = current.next.next;
          current.next.prev = current;

          this.length--;
          break;
        }

        current = current.next;
      }
    }
  }
}

const listaDoble = new DoublyLinkedList();
listaDoble.add(1);
listaDoble.add(2);
listaDoble.add(3);

listaDoble.reverse();