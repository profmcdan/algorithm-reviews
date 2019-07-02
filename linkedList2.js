class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertNodeAtTail(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      let p1 = this.head;
      while (p1.next) {
        p1 = p1.next;
      }
      p1.next = node;
    }
  }

  deleteNode(val) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (this.head.data === val) {
      this.head = this.head.next;
    } else {
      let p1 = this.head;
      let p2 = p1.next;
      while (p2) {
        if (p2.data === val) {
          p1.next = p2.next;
          break;
        } else {
          p1 = p2;
        }
        p2 = p2.next;
      }
    }
  }

  reverseList() {
    if (!this.head || !this.head.next) {
      console.log("No duplicates were found, maybe an empty listy");
      return;
    }
    let previous = null,
      current = this.head,
      next;
    while (current) {
      previous = current.next;
      current.next = next;
      next = current;
      current = previous;
    }
    this.head = next;
  }
}

// Examples
const L1 = new LinkedList();
const testData = [5, 6, 7, 8, 9, 10];
testData.forEach(el => L1.insertNodeAtTail(el));
console.log(L1);

// L1.deleteNode(6);
// console.log(L1);

L1.reverseList();
console.log(L1);
