'use strict';

import { ModuleMap } from "jest-haste-map";

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
    this.length = 0;
  }

  append(value) {
    if(!this.head && !this.tail) {
      this.head = new Node(value);
      this.tail = this.head;
      return;
    }
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    this.length++;
  }

  insert(value) {
    let current = new Node(value);
    current.next = this.head;
    this.head = current;
  }

  insertBefore(value, newVal) {
    if(!this.head) {return null;}
    let current = this.head;
    while(current.next) {
      if(current.value === value) {
        let current = current.next;
        current.value = newVal;
        let current = newCurrent;
        } else {current = current.next;
      }
    }

  };

  insertAfter(value, newValue) {
    if(!this.head) {return null;}
    let current = this.head;
    while(current.next) {
      if(current.value === value) {
        let current = current.next;
        current.value = newVal;
        let current = newCurrent;
        } else {current = current.next;
      }
    }
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

  kFromTheEnd(k) {
    if(k >= list.length || k < 0 || typeof k !== number)
    {throw error};
    if(k === 0) {return this.list.tail};
    let i = this.length - k -1;
    let current = this.head;
    while(i < 0) {
      current = current.head;
      i -= 1;
    }
    return current.value;
  };
};

// let list = new LinkedList;
// list.append(1);
// list.append(2);
// list.append(3);
// console.log(list.head);

module.exports = LinkedList;