class Node {
  constructor (id) {
    this.id = id;
    this.next = null;
  }
}

class LinkedList {
  constructor (head = null) {
    this.head = head;
  }

  addNew (id) {
    let item = new Node(id);
    if (this.head == null) {
      this.head = item;
    } else {
        let current = this.head;
        while (current.next) {
        current = current.next;
        }
        current.next = item;
    }
  }

  getFirst () {
    return this.head;
  }

  getLast () {
    let last = this.head;
    if (last) {
      while (last.next) {
        last = last.next;
      }
    }
    return last;
  }

  draw () {
    let str = '';
    let current = this.head;
    if (current) {
      while (current) {
        str += current.id + ' -> ';
        current = current.next
      }
    }
    if (!current) {
      str += null;
    }
    return str;
  }

  reverse () {
    let prev = null;
    let next = null;
    let current = this.head;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this.draw();
  }

  removeKNode (n) {
    let count = 0;
    let current = this.head;
    let prev = null;
    if (n === 0) {
      this.head = current.next;
    }
    else {
      while (count < n) {
      prev = current;
      current = current.next;
      count++;
      }
      prev.next = current.next;
    }
    
      return this.draw();
  }

  checkCircular () {
    let x = this.head;
    let y = this.head;
    while (y.next.next) {
      x = x.next; //1
      y = y.next.next //2
      if (x == y) {
        return true;
      }
    }
    return false;
  }
}

let list = new LinkedList();
list.addNew('01');
list.addNew('02');
list.addNew('03');
list.addNew('04');
list.addNew('05');
// console.log(list.getFirst());
// console.log(list.getLast());
// console.log(list.draw());
// console.log(list.reverse());
console.log(list.draw());
console.log(list.removeKNode(3));
// console.log(list.checkCircular());
// console.log(list.head.next.next.next);
// let newItem = new Node('06');
// let newItem1 = new Node('07');
// list.head.next.next.next.next = newItem;
// list.head.next.next.next.next.next = newItem1;
// console.log(list.draw());
// list.head.next.next.next.next.next.next = newItem;
// console.log(list.checkCircular());