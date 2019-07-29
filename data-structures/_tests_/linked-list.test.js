'use strict'

const LinkedList = require('../linkedlist/linked-list.js');

describe('Linked List tests', () => {
  it('can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list instanceof LinkedList).toBeTruthy();
  });

  it('can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
  });

  it('will have the head property properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
  });

  it('can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.head.value).toEqual(4);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(1);
  });

  it('will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.includes(3)).toBe(true);
  });

  it('will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.includes(5)).toBe(false);
  });

  it('can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.toString()).toEqual([4, 3, 2, 1]);
  });
});

describe('insert before or after given value', () => {
  it('can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.head.next.next.next.value).toEqual(4);
  });

  it('can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    expect(list.head.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next.value).toEqual(5);
    expect(list.head.next.next.next.next.next.value).toEqual(6);
  });

  it('can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertBefore(3, 5);
    expect(list.head.next.next.value).toEqual(5);
    expect(list.head.next.next.next.value).toEqual(3);
  });

  it('can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertBefore(1, 5);
    expect(list.head.value).toEqual(5);
    expect(list.head.value).toEqual(1);
  });


  it('can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertAfter(3, 5);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(5);
  });

  it('can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertAfter(4, 5);
    expect(list.head.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next.value).toEqual(5);
  });
});

describe('kFromTheEnd', () => {
  it('returns exception if k is greater than list.length', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    let exception = list.kFromTheEnd(5);
    expect(exception).toEqual('exception');
  });

  it('returns exception if k is less than 0', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    let exception = list.kFromTheEnd(-1);
    expect(exception).toEqual('exception');
  });

  it('return value that is a k position from the end of the node', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    let happyCase = list.kFromTheEnd(1);
    expect(happyCase).toEqual(3);
  });

  it('returns exception if k and the lngth of the list are the same', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    let exception = list.kFromTheEnd(4);
    expect(exception).toEqual('exception');
  });

  it('returns exception if linked list is the size of one', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
  });
});