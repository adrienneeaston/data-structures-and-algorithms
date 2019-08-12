'use strict';
 
const Stack = require('../stacks.js');

let multiBracketValidation = (input) => {
  if(typeof input !== 'string') {return false;}
  let stack = new Stack();

  for(let i = 0; i < input.length; i++) {
    if(input[i] === '(' || input[i] === '[' || input[i] === '{') {
      stack.push(input[i]);
    }
    if(input[i] === ')') {
      if(stack.peek() === '(') {
        stack.pop();
      } else {return false;}
    }
    if(input[i] === ']') {
      if(stack.peek() === '[') {
        stack.pop();
      } else {return false;}
    }
    if(input[i] === '}') {
      if(stack.peek() === '{') {
        stack.pop();
      } else {return false;}
    }
  }

  if(stack.peek()) {return false;} 
  else {return true;}  
};

module.exports = multiBracketValidation;