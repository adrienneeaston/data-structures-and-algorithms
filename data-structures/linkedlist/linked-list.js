'use strict';

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

  insert(value) {
    let current = new Node(value);
    current.next = this.head;
    this.head = current;
  }

  toString() {
    let dataArray = [];
    let current = this.head;
    while(current.next) {
      dataArray.push(current.value);
      current = current.next;
    }
    dataArray.push(current.value);
    return dataArray;
  };
 
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

  insertBefore(value, newVal) {
    if(!this.head) {return null;}
    let current = this.head;
    if(this.head.value === value) {
      let newNode = new Node(newVal);
      this.head = newNode;
      newNode.next = current;
      return this;
    }
    while(current.next) {
      if(current.next.value === value) {
        let newNode = new Node(newVal);
        let nodeTemp = current.next;
        current.next = newNode;
        newNode.next = nodeTemp;
        return this;
      } else {current = current.next;}
    }
  };

  insertAfter(value, newValue) {
    if(!this.head) {return null;}
    let current = this.head;
    while(current) {
      if(current.value === value) {
        let newNode = new Node(newValue);
        let nodeTemp = current.next;
        current.next = newNode;
        newNode.next = nodeTemp;
        return this;
      } else {current = current.next;}
    }
  };

  kFromTheEnd(k) {
    if(k >= this.length || k < 0 || typeof k !== 'number')
    {return 'exception';}
    if(k === 0) {return this.tail.value;}
    let current = this.head;
    let i = this.length - k;
    while(i > 0) {
      current = current.next;
      i -= 1;
    }
    return current.value;
  };
};

module.exports = LinkedList;