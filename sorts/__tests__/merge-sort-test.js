'use strict';

const mergeSort = require('../mergesort/merge-sort.js');

describe('merge sort', () => {
  it('Can successfully sort an array', () => {
    let array = [5, 8, 3, 13, 11, 5];
    expect(mergeSort(array)).toEqual([3, 5, 5, 8, 11, 13])
  });
});