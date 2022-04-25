# Linked List

Linked List is a data structure consisting of a group of vertices (nodes) which together represent a sequence. Under the simplest form, each vertex is composed of a data and a reference (link) to the next vertex in the sequence.

```javascript

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
addAtStart(value) {
/*

1. create new Node
2. change the head to the new Node
3. check if there is no tail, if not, set taill to new Node 

*/
const newNode = new Node(value, this.head)
    if (!this.head) {
    }
  }
}

```
