'use strict';

class Node {
  constructor() {
    this.value = value;
    this.next = null;
  };
};

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
    this.rear = value;
  }

  denqueue() {
    return this.queue.shift();
  }
  
  peek() {
    return this.queue[0];
  }
};

module.exports = Queue;