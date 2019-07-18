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

  it('will have the head property properly point to teh first node in the linked list', () => {
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
})

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




// describe('linkedlist', () => {
//   test('blah should do blah', () => {
//     let list = new LinkedList();
//     // add some values to the list
//     expect(list.head.value).toEqual(1);
//     expect(list.head.next.value).toEqual(2);
//     expect(list.head.next.next.value).toEqual(3);
//     expect(list.head.next.next.next.value).toEqual(4);
//   });

//   test('list.isEmpty(), should be true for an empty list', () => {
//     let list = new LinkedList();
//     expect(list.isEmpty()).toEqual(true);
//   });

//   test('list.isEmpty() should be false for an unempty list', () => {
//     let list = new LinkedList();
//     list.append(1);
//     expect(list.isEmpty()).toEqual(false);
//   });

//   test('list.size() should be 0 for an empty list', () => {
//     let list = new LinkedList();
//     expect(list.size()).toEqual(0);
//   });
// });