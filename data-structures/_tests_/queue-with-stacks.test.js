"use strict";

let Pseudoqueue = require('../queue-with-stacks.js');

describe('queue with stacks', () => {
  it('can successfully instantiate an empty stack', () => {
    let stack = new Psedudoqueue();
    expect(stack.top).toBeNull();
    expect(stack instanceof Pseudoqueue).toBeTruthy();
  });
});