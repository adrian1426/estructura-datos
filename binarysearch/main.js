class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySerachTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) break;

      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          break;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          break;
        }

        current = current.right;
      }
    }
  }

  search(value) {
    if (this.root === null) return false;

    let current = this.root;

    while (current) {
      if (value === current.value) return current;

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }

      return false;
    }
  }
}

const tree = new BinarySerachTree();
tree.insert(5);
tree.insert(9);
tree.insert(1);
tree.insert(10);
tree.insert(11);
tree.insert(8);
tree.insert(4);
tree.insert(3);

console.log("tree: ", tree)