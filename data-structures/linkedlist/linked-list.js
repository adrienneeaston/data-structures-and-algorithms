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
    if(!this.head && !this.tail) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length++;
      return;
    }
    let current = new Node(value);
    current.next = this.head;
    this.head = current;
    this.length++;
  }

  toString() {
    let dataArray = [];
    let current = this.head;
    while(current) {
      dataArray.push(current.value);
      current = current.next;
    }
    return dataArray;
  };
 
  includes(value){
    let current = this.head;
    while(current) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }  
    return false;
  };

  append(value) {
    if(!this.head && !this.tail) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length++;
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
    let i = this.length - k - 1;
    while(i > 0) {
      current = current.next;
      i -= 1;
    }
    return current.value;
  };
};

module.exports = LinkedList;