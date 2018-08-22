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
      this.adjList.set(v, new Map());
    }
  }

  /**
   * Add an edge between src and dest.
   *
   * @param {*} src The source node.
   * @param {*} dest The destination node.
   */
  addEdge(src, dest, sdweight = 0, dsweight = sdweight) {
    this.addVertex(src);
    this.addVertex(dest);

    this.adjList.get(src).set(dest, sdweight);
    this.adjList.get(dest).set(src, dsweight);
  }

  /**
   * Get the neighbors of the given node.
   *
   * @param {*} v The node to get neighbors for.
   * @return {Array} The array of neighbor nodes.
   */
  getNeighbors(v) {
    if(this.adjList.has(v)) {
      return Array.from(this.adjList.get(v).keys());
    }

    return [];
  }

  /**
   * Get the neighbor and wieights of the given node.
   *
   * @param {*} v The node to get neighbors for.
   * @return {Array} The array of neighbor nodes.
   */
  getWeightedNeighbors(v) {
    if(this.adjList.has(v)) {
      return Array.from(this.adjList.get(v).entries());
    }

    return [];
  }


  /**
   * A breath first search through the graph, starting at the given node.
   *
   * @param {*} startingNode The node to start the search at.
   * @param {Function} cb A callback for each node in the search.
   */
  bfs(startingNode, cb) {
    var q = [startingNode];
    var visited = new Set(q);

    const addVisitedNeighbor = neighbor => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        q.push(neighbor);
      }
    };

    while (q.length) {
      var node = q.shift();

      if (typeof cb === 'function') {
        cb(node);
      }

      this.getNeighbors(node).forEach(addVisitedNeighbor);
    }
  }

  /**
   * A depth first search through the graph.
   *
   * @param {*} startingNode The node to start at.
   * @param {Function} cb A callback for each node in the search.
   */
  dfs(startingNode, cb) {
    var visited = new Set();

    const search = (node) => {
      visited.add(node);

      if(typeof cb === 'function'){
        cb(node);
      }

      this.getNeighbors(node)
        .filter(neighbor => !visited.has(neighbor))
        .forEach(search);
    };

    search(startingNode);
  }

  /**
   * For debugging, prints adjacency list.
   */
  print() {
    // iterate over the vertices
    this.adjList.forEach((val, key) => {
      const connections = this.getNeighbors(key).reduce((cons, cur) => cons += `${cur} `,
        `${key} -> `);

      console.log(connections);
    });
  }
}

module.exports = Graph;
