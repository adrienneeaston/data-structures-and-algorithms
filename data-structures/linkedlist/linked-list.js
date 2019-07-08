'use strict';

// import { tsExternalModuleReference, exportAllDeclaration } from "@babel/types";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    if(!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = Node(value);
    this.tail = current.next;
  }

  insert(value) {
    let current = new Node(value);
    current.next = this.head;
    this.head = current;
  }

  includes(value){
    if(!this.head) {return false;}
    let current = this.head;
    while(current.next) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }
    if(current.value === value) {return true;}
    return false;
  };
  // refactor to do...while

  toString() {
    let dataArray = [];
    let current = this.head;
    while(current.next) {
      dataArray.push(current.value);
      current = current.next;
    }
    dataArray.push(current.next);
    return dataArray.toString();
  };
  // refactor to do...while
}




// describe('linkedlist', () => {
//   test('blah should do blah', () => {
//     let list = new LinkedList();
//     // add some values to the list
//     expect(list.head.value).toEqual(1);
//     expect(list.head.next.value).toEqual(2);
//     expect(list.head.next.next.value).toEqual(3);
//     expect(list.head.next.next.next.value).toEqual(4);
//   });

//   test('list.isEmpty(), should be true for an empty list', () => {
//     let list = new LinkedList();
//     expect(list.isEmpty()).toEqual(true);
//   });

//   test('list.isEmpty() should be false for an unempty list', () => {
//     let list = new LinkedList();
//     list.append(1);
//     expect(list.isEmpty()).toEqual(false);
//   });

//   test('list.size() should be 0 for an empty list', () => {
//     let list = new LinkedList();
//     expect(list.size()).toEqual(0);
//   });
// });