'use strict';

const HashTable = require('../hashtable/hashtable.js');

describe('hashtable', () => {
  it('can add a key/value to the hashtable results in the value being in the data structure', () => {
    let map = new HashTable(10);
    map.add('Logan', 'Wolverine');
    map.add('Marie', 'Rogue');
    map.add('Hank', 'Beast');
    map.add('Kurt', 'Nightcrawler');
    map.add('Ororo', 'Storm');

  });

  it('can retrieve based on a key returns the value stored', () => {
    let map = new HashTable(10);
    map.add('Logan', 'Wolverine');
    map.add('Marie', 'Rogue');
    map.add('Hank', 'Beast');
    map.add('Kurt', 'Nightcrawler');
    map.add('Ororo', 'Storm');
    let search = get('Marie');
    expect(search).toBe('Rogue');
  });

  it('can successfully return null for a key that does not exist in the hashtable', () => {
    let map = new HashTable(10);
    map.add('Logan', 'Wolverine');
    map.add('Marie', 'Rogue');
    map.add('Hank', 'Beast');
    map.add('Kurt', 'Nightcrawler');
    map.add('Ororo', 'Storm');
    let search = get('Max');
    expect(search).toBeNull();
  });

  it('can successfully handle a collision within the hashtable', () => {
    let map = new HashTable(10);
    map.add('Logan', 'Wolverine');
    map.add('Marie', 'Rogue');
    map.add('Hank', 'Beast');
    map.add('Kurt', 'Nightcrawler');
    map.add('Ororo', 'Storm');

  });

  it('can successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let map = new HashTable(10);
    map.add('Logan', 'Wolverine');
    map.add('Marie', 'Rogue');
    map.add('Hank', 'Beast');
    map.add('Kurt', 'Nightcrawler');
    map.add('Ororo', 'Storm');

  });

  it('can successfully hash a key to an in-range value', () => {
    let map = new HashTable(10);
    let key = 'Xavier';
    let hashedKey = map.hash(key);
    expect(hashedKey).toBeGreaterThanOrEqual(0);
    expect(hashedKey).toBeLessThanOrEqual(10);
  });
}); 