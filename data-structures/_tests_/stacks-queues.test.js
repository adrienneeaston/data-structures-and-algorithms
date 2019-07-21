'use strict'

const LinkedList = require('../linkedlist/linked-list.js');

describe('Stacks and Queues', () => {
  it('can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.top).toBeNull();
    expect(stack instanceof Stack).toBeTruthy();
  });

// Can successfully push onto a stack
// Can successfully push multiple values onto a stack
// Can successfully pop off the stack
// Can successfully empty a stack after multiple pops
// Can successfully peek the next item on the stack

  it('can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.top).toBeNull();
    expect(queue instanceof Queue).toBeTruthy();
  });

// Can successfully instantiate an empty stack
// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues

});
