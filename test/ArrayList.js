var assert = require('chai').assert;
var ArrayList = require('../src/ArrayList');

let list;

const test = {
  ArrayList: {
    beforeEach: () => {
      list = new ArrayList();
    },
    constructor: {
      'should construct an array list': () => {
        assert.isOk(list);
      },
    },
    add : {
      'should add items from array to list' : () => {
        const items = [1, 2, 3];
        list.add(items);

        assert.deepEqual(list, items);
      },
      'should add only existing items from array to list' : () => {
        const items = [1, undefined, 2, 3];
        list.add(items);

        assert.deepEqual(list, [1, 2, 3]);
      },

    },
    push: {
      'should add an item to the list and return it' : () => {
        var item = list.push(1);

        assert.equal(1, item);
        assert.equal(1, list.length);
      },
      'should add 2 items to list and set the length correctly.' : () => {
        var item = list.push(1);
        var item2 = list.push(2);
        assert.equal(1, item);
        assert.equal(2, item2);
        assert.equal(2, list.length);
      },
      'should add item to first empty value in array.' : () => {
        list[0] = undefined;
        list[1] = 2;
        var item = list.push(1);
        assert.equal(1, item);
        assert.equal(2, list.length);
      },
    },
    remove: {
      'should remove values matching function': () => {
        list.push(1);
        list.push(2);

        list.remove((x) => x === 2);
        assert.equal(list[1], undefined);
      },
      'should remove values matching predicate and value': () => {
        list.push({a:1});
        list.push({a:2});

        list.remove('a', 2);
        assert.equal(list[1], undefined);
      },
      'should remove values matching value': () => {
        list.push(1);
        list.push(2);

        list.remove(2);
        assert.equal(list[1], undefined);
      }
    },
    count: {
      'count should return only count of defined items' : () => {
        list.push(1);
        list.push(2);

        list.remove(1);
        assert.equal(list.length, 2);
        assert.equal(list.count, 1);
      }
    },
    clear: {
      'should remove all elements from the list' : () => {
        list.push(1);
        list.clear();

        assert.equal(list[0], undefined);
      }
    },
    pullExists: {
      'should remove and return the first existing element from the array': () => {
        list[0] = undefined;
        list[1] = 1;

        let item = list.pullExists();
        assert.equal(item, 1);
        assert.equal(list[1], undefined);
      },
      'should remove and return undefined if nothing exists': () => {
        list[0] = undefined;
        list[1] = undefined;

        let item = list.pullExists();
        assert.equal(item, undefined);
      }

    }
  }
};

module.exports = test;
