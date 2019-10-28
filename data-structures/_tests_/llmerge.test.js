'use strict'

const mergeLists = require('../llmerge/ll-merge.js');
const LinkedList = require('../linkedlist/linked-list.js')

describe('shows merge', () => {

  it('will return a reference that points to the first node in the zipped linked list', () => {
    let listA = new LinkedList();
    let listB = new LinkedList();
    listA.append(1);
    listA.append(2);
    listA.append(3);
    listB.append('a');
    listB.append('b');
    listB.append('c');
    let result = mergeLists(listA, listB);
    expect(listA.head.value).toEqual(1);
    expect(result.value).toEqual(1);
  });

  it('can properly merge nodes in zipper fashion', () => {
    let listA = new LinkedList();
    let listB = new LinkedList();
    listA.append(1);
    listA.append(2);
    listA.append(3);
    listB.append('a');
    listB.append('b');
    listB.append('c');
    let result = mergeLists(listA, listB);
    expect(result.value).toEqual(1);
    expect(result.next.value).toEqual('a');
    expect(result.next.next.value).toEqual(2);
    expect(result.next.next.next.value).toEqual('b');
    expect(result.next.next.next.next.value).toEqual(3);
    expect(result.next.next.next.next.next.value).toEqual('c');
  });

});