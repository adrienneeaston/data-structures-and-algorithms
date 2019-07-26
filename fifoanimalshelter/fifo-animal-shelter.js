'use strict'; 

let FifoQueue = require('../stacksandqueues/stacks.js')

class FifoAnimalShelter {
  constructor() {
    this.dogs = new FifoQueue;
    this.cats = new FifoQueue;
  }

}

module.exports = FifoAnimalShelter;