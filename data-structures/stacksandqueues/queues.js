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
    node.next = this.back;
    this.back = node;
    return this;

    // this.queue.push(value);
    // this.back = value;

    // let node = new Node(value);
    // node.next = this.top;
    // this.top = node;
    // return this;
  }

  dequeue() {
    // if(!this.top) {return null;}
    let popped = this.front.value;
    this.front = this.front.next;
    return popped;

    // return this.queue.shift();

    // if(!this.top) {return null;}
    // let popped = this.top.value;
    // this.top = this.top.next;
    // return popped;
  }
  
  peek() {
    return this.front.value;
  

    // return this.queue[0];

    // if(!this.top) {return null;}
    // return this.top.value;
  }
};

module.exports = Queue;