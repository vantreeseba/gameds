var assert = require('chai').assert;
var BSP = require('../BSP');

let bsp;

const test = {
  BSP: {
    beforeEach: () => {
      bsp = new BSP({depth: 1});
    },
    constructor: {
      'should construct a bsp tree': () => {
        assert.isOk(bsp);
      },
      'given a depth of 1, it should generate one level of children': () => {
        assert.isOk(bsp.rootNode);
        assert.isOk(bsp.rootNode.l);
        assert.equal(bsp.rootNode.l.l, undefined);
      },
      'given a depth of 2, it should generate one level of children': () => {
        bsp = new BSP({depth: 2, ratio: 0.01});

        assert.isOk(bsp.rootNode);
        assert.isOk(bsp.rootNode.l);
        assert.isOk(bsp.rootNode.r);
        // assert.isOk(bsp.rootNode.l.l);
        // assert.isOk(bsp.rootNode.l.r);
        // assert.isOk(bsp.rootNode.r.l);
        // assert.isOk(bsp.rootNode.r.r);
      }

    },
    traverseInOrder: {
      'should traverse in order': () => {
        const nodes = [];
        const cb = (node) => {
          nodes.push(node);
        };

        bsp.traverseInOrder(cb);
        assert.deepEqual(nodes, [bsp.rootNode.l, bsp.rootNode, bsp.rootNode.r]);
      },
    },
    traversePreOrder: {
      'should traverse pre order': () => {
        const nodes = [];
        const cb = (node) => {
          nodes.push(node);
        };

        bsp.traversePreOrder(cb);
        assert.deepEqual(nodes, [bsp.rootNode, bsp.rootNode.l, bsp.rootNode.r]);
      },
    },
    traversePostOrder: {
      'should traverse post order': () => {
        const nodes = [];
        const cb = (node) => {
          nodes.push(node);
        };

        bsp.traversePostOrder(cb);
        assert.deepEqual(nodes, [bsp.rootNode.l, bsp.rootNode.r, bsp.rootNode]);
      },
    }
  }
};

module.exports = test;
