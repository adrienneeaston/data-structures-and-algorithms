'use strict';

const Stack = require('../stacksandqueues/stacks.js');
const Queue = require('../stacksandqueues/queues.js');

describe('Stacks', () => {
  it('can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.top).toBeNull();
    expect(stack instanceof Stack).toBeTruthy();
  });

  it('can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });

  it('can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
  });

  it('can successfully pop off the stack', () => {
    let stack = new Stack();
    
  });

  it('can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    
  });

  it('can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    
  });
});

describe('Queues', () => {
  it('can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.front).toBeNull();
    expect(queue instanceof Queue).toBeTruthy();
  });

  it('can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
  });

  it('can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();

  });

  it('can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();

  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();

  });

  it('can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();

  });
});
