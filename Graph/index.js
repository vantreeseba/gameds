/**
 * A graph data structure.
 * Undirected and using an adjacency list.
 */
class Graph {
  /**
   * constructor
   */
  constructor() {
    this.adjList = new Map();
  }

  /**
   * Add a vertex to the graph.
   * If it already exists, it does nothing.
   *
   * @param {*} v The vertex to add to the graph.
   * @return {*} The added vertex.
   */
  addVertex(v) {
    if(!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  /**
   * Add an edge between src and dest.
   *
   * @param {*} src The source node.
   * @param {*} dest The destination node.
   */
  addEdge(src, dest) {
    this.addVertex(src);
    this.addVertex(dest);

    this.adjList.get(src).push(dest);
    this.adjList.get(dest).push(src);
  }

  /**
   * A breath first search through the graph, starting at the given node.
   *
   * @param {*} startingNode The node to start the search at.
   */
  bfs(startingNode, cb) {
    var visited = new Set();
    visited.add(startingNode);

    var q = [];
    q.push(startingNode);

    const addVisitedNeighbor = neighbor => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        q.push(neighbor);
      }
    };

    while (q.length) {
      var current = q.shift();

      if (typeof cb === 'function') {
        cb(current);
      }

      this.adjList.get(current).forEach(addVisitedNeighbor);
    }
  }

  /**
   * For debugging, prints adjacency list.
   */
  print() {
    // iterate over the vertices
    this.adjList.forEach((val, key) => {
      const connections = this.adjList.get(key).reduce((cons, cur) => cons += `${cur} `,
        `${key} -> `);

      console.log(connections);
    });
  }
}

module.exports = Graph;
