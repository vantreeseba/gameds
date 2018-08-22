var assert = require('chai').assert;
var Graph = require('../Graph');

let graph;

const test = {
  Graph: {
    beforeEach: () => {
      graph = new Graph();
    },
    constructor: {
      'should construct a graph': () => {
        assert.isOk(graph);
      },
    },
    addVertex: {
      'should add a vertex that does not exist': () => {
        const vertex = 'A';
        graph.addVertex(vertex);

        assert.equal(graph.adjList.size, 1);
      },
      'should not add a vertex in the graph already': () => {
        const vertex = 'A';
        graph.addVertex(vertex);
        graph.addVertex(vertex);

        assert.equal(graph.adjList.size, 1);
      }
    },
    addEdge: {
      'should add a connection between src and dest' : () => {
        graph.addVertex('A');
        graph.addVertex('B');

        graph.addEdge('A', 'B');

        assert.equal(graph.getNeighbors('A'), 'B');
      },
      'should add a connection between dest and src' : () => {
        graph.addVertex('A');
        graph.addVertex('B');

        graph.addEdge('A', 'B');

        assert.equal(graph.getNeighbors('B'), 'A');
      },
      'should add a weighted connection between src and dest' : () => {
        graph.addVertex('A');
        graph.addVertex('B');

        graph.addEdge('A', 'B', 5);
        assert.deepEqual(graph.getWeightedNeighbors('A'), [['B', 5]]);
      },
      'should add a weighted connection between dest and src' : () => {
        graph.addVertex('A');
        graph.addVertex('B');

        graph.addEdge('A', 'B', 5);
        assert.deepEqual(graph.getWeightedNeighbors('B'), [['A', 5]]);
      },
      'should add a diff weighted connection between dest and src' : () => {
        graph.addVertex('A');
        graph.addVertex('B');

        graph.addEdge('A', 'B', 5, 1);
        assert.deepEqual(graph.getWeightedNeighbors('B'), [['A', 5]]);
      },

      'should add a diff weighted connection between dest and src' : () => {
        graph.addVertex('A');
        graph.addVertex('B');

        graph.addEdge('A', 'B', 5, 1);
        assert.deepEqual(graph.getWeightedNeighbors('B'), [['A', 1]]);
      }

    },
    bfs: {
      'should do a bfs' : () => {
        graph.addVertex('A');
        graph.addVertex('A1');
        graph.addVertex('B');
        graph.addVertex('B1');
        graph.addVertex('B2');

        graph.addEdge('A', 'A1');
        graph.addEdge('A', 'B');
        graph.addEdge('B', 'B1');
        graph.addEdge('B', 'B2');

        const arr = [];

        const cb = node => arr.push(node);
        graph.bfs('A', cb);
        assert.deepEqual(arr, ['A', 'A1', 'B', 'B1', 'B2']);
      },
      'should do a bfs starting at a diff node' : () => {
        graph.addVertex('A');
        graph.addVertex('A1');
        graph.addVertex('B');
        graph.addVertex('B1');
        graph.addVertex('B2');

        graph.addEdge('A', 'A1');
        graph.addEdge('A', 'B');
        graph.addEdge('B', 'B1');
        graph.addEdge('B', 'B2');

        const arr = [];

        const cb = node => arr.push(node);
        graph.bfs('B', cb);
        assert.deepEqual(arr, ['B', 'A', 'B1', 'B2', 'A1']);
      },
      'should not fail if no cb is given': () => {
        graph.addVertex('A');
        graph.bfs('A');
      }
    },
    dfs: {
      'should do a dfs' : () => {
        graph.addVertex('A');
        graph.addVertex('A1');
        graph.addVertex('B');
        graph.addVertex('B1');
        graph.addVertex('B2');

        graph.addEdge('A', 'A1');
        graph.addEdge('A', 'B');
        graph.addEdge('B', 'B1');
        graph.addEdge('B', 'B2');

        const arr = [];

        const cb = node => arr.push(node);
        graph.dfs('A', cb);
        assert.deepEqual(arr, ['A', 'A1', 'B', 'B1', 'B2']);
      },
      'should do a dfs starting at a diff node' : () => {
        graph.addVertex('A');
        graph.addVertex('A1');
        graph.addVertex('B');
        graph.addVertex('B1');
        graph.addVertex('B2');

        graph.addEdge('A', 'A1');
        graph.addEdge('A', 'B');
        graph.addEdge('B', 'B1');
        graph.addEdge('B', 'B2');

        const arr = [];

        const cb = node => arr.push(node);
        graph.dfs('B', cb);
        assert.deepEqual(arr, ['B', 'A', 'A1', 'B1', 'B2']);
      },
      'should not fail if no cb is given': () => {
        graph.addVertex('A');
        graph.dfs('A');
      }
    },
    print: {
      'should print a graph': () => {
        graph.addVertex('A');
        graph.addVertex('A1');
        graph.addVertex('B');
        graph.addVertex('B1');
        graph.addVertex('B2');

        graph.addEdge('A', 'A1');
        graph.addEdge('A', 'B');
        graph.addEdge('B', 'B1');
        graph.addEdge('B', 'B2');

        graph.print();
      }
    }
  }
};

module.exports = test;
