'use strict';

const HashTable = require('../hashtable/hashtable.js');

describe('hashtable', () => {
  it('can add a key/value to the hashtable results in the value being in the data structure', () => {
    let map = new HashTable(10);
    map.add('Hank', 'Beast');
    let hashKey = map.hash("Hank");
    expect(map.map[hashKey].length).toBeGreaterThan(0);
    expect(map.map[hashKey]).toEqual([{'Hank': 'Beast'}]);
  });

  it('can retrieve based on a key returns the value stored', () => {
    let map = new HashTable(10);
    map.add('Logan', 'Wolverine');
    map.add('Marie', 'Rogue');
    map.add('Hank', 'Beast');
    map.add('Ororo', 'Storm');
    map.add('Bobby', 'Iceman');
    let action = map.get('Logan');
    expect(action).toBe('Wolverine');
  });

  it('can successfully return null for a key that does not exist in the hashtable', () => {
    let map = new HashTable(10);
    map.add('Logan', 'Wolverine');
    map.add('Marie', 'Rogue');
    map.add('Hank', 'Beast');
    map.add('Ororo', 'Storm');
    map.add('Bobby', 'Iceman');
    let action = map.contains('Max');
    expect(action).toBeNull();
  });

  it('can successfully handle a collision within the hashtable', () => {
    let map = new HashTable(10);
    map.add('Logan', 'Wolverine');
    map.add('Marie', 'Rogue');
    map.add('Hank', 'Beast');
    map.add('Ororo', 'Storm');
    map.add('Bobby', 'Iceman');
    let position = map.hash('Marie');
    expect(position).toBe(map.hash('Bobby'));
    expect(map.map[position].length).toBeGreaterThan(1);
  });

  it('can successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let map = new HashTable(10);
    map.add('Logan', 'Wolverine');
    map.add('Marie', 'Rogue');
    map.add('Hank', 'Beast');
    map.add('Ororo', 'Storm');
    map.add('Bobby', 'Iceman');
    let actionM = map.get('Marie');
    let actionB = map.get('Bobby');
    expect(actionM).toBe('Rogue');    
    expect(actionB).toBe('Iceman');
  });

  it('can successfully hash a key to an in-range value', () => {
    let map = new HashTable(10);
    let key = 'Xavier';
    let hashedKey = map.hash(key);
    expect(hashedKey).toBeGreaterThanOrEqual(0);
    expect(hashedKey).toBeLessThanOrEqual(10);
  });
}); 