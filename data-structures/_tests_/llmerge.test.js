'use strict'

const LinkedList = require('../llmerge/ll-merge.js');

describe('shows merge', () => {

  it('will have the head property properly point to the first node in the linked list', () => {
    let listA = new LinkedList();
    let listB = new LinkedList();
    listA.insert(3);
    listA.insert(2);
    listA.insert(1);
    listB.insert('c');
    listB.insert('b');
    listB.insert('a');
    expect(list.head.value).toEqual(1);
  });

  it('can properly merge nodes in zipper fashion', () => {
    let listA = new LinkedList();
    let listB = new LinkedList();
    listA.insert(3);
    listA.insert(2);
    listA.insert(1);
    listB.insert('c');
    listB.insert('b');
    listB.insert('a');
    
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(1);
  });

});