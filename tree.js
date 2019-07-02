const defaultCompare = (a, b) => {
  return a === b;
};

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(data) {
    if (this.root) {
      this.insertNode(this.root, data);
    } else {
      this.root = new Node(data);
    }
  }

  insertNode(node, data) {
    if (this.compareFn(data, node.data) === -1) {
    }
  }
}
