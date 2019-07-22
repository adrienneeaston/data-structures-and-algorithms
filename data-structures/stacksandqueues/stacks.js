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
};

module.exports = Stack;
