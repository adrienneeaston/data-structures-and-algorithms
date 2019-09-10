'use strict';

const quickSort = require('../quicksort/quick-sort.js');

describe('quick sort', () => {
  it('Can successfully sort an array', () => {
    let array = [5, 8, 3, 13, 11, 5];
    expect(quickSort(array)).toEqual([3, 5, 5, 8, 11, 13])
  });
});