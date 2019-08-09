'use strict';
 
const Stacks = require('../stacks.js');

multiBracketValidation() {
  let mbv = function(input) {
    if(typeofinput !== string) {return false;}
  let validation = newStack();
    for(let i = 0; i < string.length; i++) {
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
        if(stack.top) {return true;} 
        else {return false;}  
      }   
    }
  }
};