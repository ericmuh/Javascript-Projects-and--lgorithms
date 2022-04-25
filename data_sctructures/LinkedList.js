/**
 Linked List is a data structure consisting of a group of vertices (nodes) which together represent a sequence. Under the simplest form, each vertex is composed of a data and a reference (link) to the next vertex in the sequence.
**/

class Node {

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }
}

const ourlist = new LinkedList();
console.log(ourlist.NodeD);
