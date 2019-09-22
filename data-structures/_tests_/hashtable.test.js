'use strict';

const HashTable = require('../hashtable/hashtable.js');

describe('hashtable', () => {
  it('can add a key/value to the hashtable results in the value being in the data structure', () => {

  });

  it('can retrieve based on a key returns the value stored', () => {

  });

  it('can successfully return null for a key that does not exist in the hashtable', () => {

  });

  it('can successfully handle a collision within the hashtable', () => {

  });

  it('can successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

  });

  it('can successfully hash a key to an in-range value', () => {
    let map = new HashTable(20);
    let key = "javascript";
    let hashedKey = map.hash(key);
    expect(hashedKey).toBeGreaterThanOrEqual(0);
    expect(hashedKey).toBeLessThanOrEqual(20);
  });
}); 