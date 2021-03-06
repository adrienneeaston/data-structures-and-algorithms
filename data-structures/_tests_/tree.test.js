'use strict';

const BinaryTree = require('../tree/tree.js');

describe('binary trees', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();
    expect(tree.root).toBeNull();
    expect(tree instanceof BinaryTree).toBeTruthy();
  });
  
  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree(10);
    expect(tree.root.value).toEqual(10);
  });
  
  it('Can successfully add a left child and right child to a single root node', () => {
    let tree = new BinaryTree(10);
    tree.add(7);
    tree.add(12);
    expect(tree.root.left.value).toEqual(7);
    expect(tree.root.right.value).toEqual(12);
  });
  
  it('Can successfully return a collection from a preorder traversal', () => {
    let tree = new BinaryTree(10);
    tree.add(7);
    tree.add(4);
    tree.add(9);
    tree.add(12);
    tree.add(11);
    tree.add(15);
    let treeArray = tree.preOrder();
    expect(treeArray).toEqual([10, 7, 4, 9, 12, 11, 15]);
  });
  
  it('Can successfully return a collection from an inorder traversal', () => {
    let tree = new BinaryTree(10);
    tree.add(7);
    tree.add(4);
    tree.add(9);
    tree.add(12);
    tree.add(11);
    tree.add(15);
    let treeArray = tree.inOrder();
    expect(treeArray).toEqual([4, 7, 9, 10, 11, 12, 15]);
  });
  
  it('Can successfully return a collection from a postorder traversal', () => {
    let tree = new BinaryTree(10);
    tree.add(7);
    tree.add(4);
    tree.add(9);
    tree.add(12);
    tree.add(11);
    tree.add(15);
    let treeArray = tree.postOrder();
    expect(treeArray).toEqual([4, 9, 7, 11, 15, 12, 10]);
  });

  // it('Can successfully return true or false for is a tree contains a given value', () => {
  //   let tree = new BinaryTree(10);
  //   tree.add(7);
  //   tree.add(4);
  //   tree.add(9);
  //   tree.add(12);
  //   tree.add(11);
  //   tree.add(15);
  //   expect(tree.contains(12)).toBeTruthy();
  // });

  it('can successfully return a collection from a breadth-first traversal', () => {
    let tree = new BinaryTree(10);
    tree.add(7);
    tree.add(4);
    tree.add(9);
    tree.add(12);
    tree.add(11);
    tree.add(15);
    let treeArray = tree.breadthFirst();
    expect(treeArray).toEqual([10, 7, 12, 4, 9, 11, 15]);
  });

  it('can successfully return the highest value', () => {
    let tree = new BinaryTree(10);
    tree.add(7);
    tree.add(4);
    tree.add(9);
    tree.add(12);
    tree.add(11);
    tree.add(15);
    expect(tree.findMaximumValue()).toEqual(15);
  });
});

