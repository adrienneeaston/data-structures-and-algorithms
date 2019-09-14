'use strict';

const quickSort = require('../quicksort/quick-sort.js');

describe('quick sort', () => {
  it('Can successfully sort an array', () => {
    let array = [5, 8, 3, 13, 11, 5];
    let left = 0;
    let right = array.length - 1;
    expect(quickSort(array, left, right)).toEqual([3, 5, 5, 8, 11, 13])
  });
});