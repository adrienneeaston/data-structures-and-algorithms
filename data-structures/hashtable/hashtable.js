'use strict';

class node {
  constructor(value) {
    this.value = value;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  add(key, value) {
    let hashValue = this.hash(key);
  }

  get(key) {

  }

  contains(key) {
    let hashKey = this.hash(key);
    for(let i = 0; i < this.map[hashKey].length; i++) {
      if(this.map[hashKey][i][key]) {return true;}
    }
    return null;
  }

  hash(key) {
    return key.split('').reduce((acc, val) => {
      return acc + val.charCodeAt(0)
    }, 0) * 599 % this.size;
  }
}

module.exports = HashTable;