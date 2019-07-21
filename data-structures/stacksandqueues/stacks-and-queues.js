'use strict';

class Node {
  constructor() {
    this.value = value;
    this.next = null;
  };
};

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
    this.top = value;
  }

  pop() {
    let value = this.stack.pop();
    this.top = this.stack.length - 1;
    return value;
  }

  peek() {
    return this.top;
  }
}

class Queue {
  constructor() {
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
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.stack);
console.log(myStack.peek());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

let myQueue = new Queue();
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);