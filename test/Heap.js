var assert = require('chai').assert;
var Heap = require('../Heap');

let heap;

const test = {
  Heap: {
    beforeEach: () => {
      heap = new Heap();
    },
    constructor: {
      'should construct a heap': () => {
        assert.isOk(heap);
      },
      'should assign a compare function': () => {
        assert.isOk(heap.compare);
      },
      'should assign an elements array': () => {
        assert.isOk(heap.elements);
      },
    },
    push: {
      'should push the element into the root when heap is empty': () => {
        heap.push(1);
        assert.equal(heap.elements[0], 1);
      },
      'should push the element into a child when heap is not empty': () => {
        heap.push(1);
        heap.push(2);

        let left = heap._getLeft(0);
        let right = heap._getRight(0);

        let child = heap.elements[left] || heap.elements[right];

        assert.equal(child, 2);
      },
      'should sort elements correctly': () => {
        heap.push(4);
        heap.push(3);
        heap.push(1);
        heap.push(2);

        assert.deepEqual(heap.elements, [1, 2, 3, 4]);
      },
      'should sort elements correctly given custom sort': () => {
        heap = new Heap((a, b) => a > b);
        heap.push(4);
        heap.push(1);
        heap.push(2);
        heap.push(3);

        assert.deepEqual(heap.elements, [4, 3, 2, 1]);
      },
    },
    pop: {
      'should empty the heap when only one element exists': () => {
        heap.push(1);
        const el = heap.pop();

        assert.equal(el, 1);
        assert.notEqual(heap.elements[0], 1);

      },
      'should pop the element from the root': () => {
        heap.push(3);
        heap.push(1);
        const el = heap.pop();

        assert.equal(el, 1);
        assert.notEqual(heap.elements[0], 1);
      },
      'should reorder the heap correctly': () => {
        heap.push(3);
        heap.push(2);
        heap.push(4);
        heap.push(1);
        const el = heap.pop();

        assert.equal(el, 1);
        assert.deepEqual(heap.elements, [2, 3, 4]);
      },
      'should reorder the heap correctly given a custom sort': () => {
        heap = new Heap((a, b) => a > b);

        heap.push(3);
        heap.push(2);
        heap.push(4);
        heap.push(1);
        const el = heap.pop();

        assert.equal(el, 4);
        assert.deepEqual(heap.elements, [3, 2, 1]);
      },

    }
  }
};

module.exports = test;
