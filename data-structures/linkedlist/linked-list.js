'use strict';

import { tsExternalModuleReference, exportAllDeclaration } from "@babel/types";

class Node {...}

class LinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    if(!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = Node(value);
    this.tail = current.next;
  }
}


test('blah should do blah', () => {
  let list = new LinkedList();
  expect(list.head.value).toEqual(1);
  expect(list.head.next.value).toEqual(2);
  expect(list.head.next.next.value).toEqual(3);
  expect(list.head.next.next.next.value).toEqual(4);
});

test('list.isEmpty(), should be true for an empty list', () => {
  let list = new LinkedList();
  expect(list.isEmpty()).toEqual(true);
});

test('list.isEmpty() shoudl be false for an unempty list', () => {
  let list = new LinkedList();
  list.append(1);
  expect(list.isEmpty()).toEqual(false);
});

test('list.size() should be 0 for an empty list', () => {
  let list = new LinkedList();
  expect(list.size()).toEqual(0);
});