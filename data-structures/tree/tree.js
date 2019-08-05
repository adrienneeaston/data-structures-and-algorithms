'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    root ? this.root = new Node(root) : this.root = root;
  }

  preOrder() {
    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
    };

    _walk(this.root);

    return results;
  }

  inOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      results.push(node.value);
      if(node.right) { _walk(node.right); }
    };

    _walk(this.root);

    return results;
  }

  postOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
      results.push(node.value);
    };

    _walk(this.root);

    return results;
  }

  levelOrder() {
    let results = [];
    let nodeQueue = [];

    nodeQueue.push(this.root);

    while(nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if(current.left) {nodeQueue.push(current.left);}
      if(current.right) {nodeQueue.push(current.right);}
    }

    return results;

  };

};


class BinarySearchTree extends BinaryTree {
  constructor(root = null) {
     this.root = root;
  }
  
  // accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  add() {
    
  }
  
  // accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
  contains() {
    
  }
}

module.exports = BinaryTree;


  


