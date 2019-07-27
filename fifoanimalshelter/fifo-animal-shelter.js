'use strict'; 

let FifoQueue = require('../stacksandqueues/stacks.js')

class FifoAnimalShelter {
  constructor() {
    this.dogs = new FifoQueue;
    this.cats = new FifoQueue;
  }

  enqueue(animal) {
    if(animal.species === 'cat') {
      this.cats.enqueue(animal);
    }
    if(animal.species === 'dog') {
      this.dogs.enqueue(animal);
    }
  };

  dequeue(animal) {
    if(preference === 'cat') {
      return this.cats.dequeue();
    }
    if(preference === 'dog') {
      return this.dogs.dequeue();
    }
    return null;
  };
}

module.exports = FifoAnimalShelter;