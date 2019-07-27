'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.front) { 
      this.front = node;
      this.back = node;
    } else {
      node.next = this.back;
      this.back = node;
    }
    return this;
  }

  dequeue() {
    if(!this.front) {return null;}
    let dequeued = this.front.value;
    this.front = this.front.next;
    if(!this.front) {this.back = null;}
    return dequeued;
  }
  
  peek() {
    if(!this.front) {return null;}
    return this.front.value;
  }
};

module.exports = Queue;