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

  fizzBuzzTree(value) {

    // still working on this

    let _walk = (node) => {

      if(node.left) {_walk(node.left);}
      if(node.right) {_walk(node.right);}
      if(node.value % 3 === 0 && node.value % 5 === 0)
    };

    _walk(this.root);

    return results;
};

module.exports = FizzBuzzTree;