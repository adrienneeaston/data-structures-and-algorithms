"use strict";

let Stack = require('../stacksandqueues/stacks.js')

class Pseudoqueue {
  constructor() {
    this.storage = new Stack;
    this.shuffle = new Stack;
  }

  enqueue(value) {
    this.storage.push(value);
  }

  dequeue() {
    
    this.shuffle.pop();
  }
}

module.exports = Pseudoqueue;