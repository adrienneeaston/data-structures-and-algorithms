'use strict';
 
const Stack = require('../stacks.js');

let multiBracketValidation = (input) => {
  if(typeof input !== 'string') {return false;}

  let stack = new Stack();

  for(let i = 0; i < input.length; i++) {
    if(i === '(' || i === '[' || i === '{') {
      stack.push(i);
      if(i === ')') {
        if(stack.push() === '(') {
          stack.pop();
        } else {return false;}
      }
      if(i === ']') {
        if(stack.push() === '[') {
          stack.pop();
        } else {return false;}
      }
      if(i === '}') {
        if(stack.push() === '{') {
          stack.pop();
        } else {return false;}
      }
    }
  }

  if(stack.top) {return false;} 
  else {return true;}  
};

module.exports = multiBracketValidation;