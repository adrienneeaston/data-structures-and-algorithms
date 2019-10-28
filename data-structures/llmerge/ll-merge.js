'use strict';

let LinkedList = require('../linkedlist/linked-list.js')

const mergeLists = (listA, listB) => {

  if(!listA.head) {return listB.head;}
  if(!listB.head) {return listA.head;}

  let currentA = listA.head;
  let currentB = listB.head;

  while(currentA.next && currentB.next) {
    let nodeTempA = currentA.next;
    let nodeTempB = currentB.next;
    currentA.next = currentB;
    currentB.next = nodeTempA;
    currentA = nodeTempA;
    currentB = nodeTempB; 
  };
  
  if(!currentB.next) {
    let nodeTempA = currentA.next;
    currentA.next = currentB;
    currentB.next = nodeTempA;
  }

  if(!currentA.next) {
    currentA.next = currentB;
  }

  return listA.head;
};

module.exports = mergeLists;

// add edge cases for lists different sizes, lists empty, one list is empty