'use strict';

const insertionSort = require('../insertion_sort/insertion-sort.js');

describe('insertion sort', () => {
  it('Can successfully sort an array', () => {
    let array = [5, 8, 3, 13, 11, 5];
    expect(insertionSort(array)).toEqual([3, 5, 5, 8, 11, 13])
  });
});