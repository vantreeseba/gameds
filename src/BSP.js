/**
 * BSP
 */
class BSP {
  /**
   * constructor
   *
   * @param {Number} height
   * @param {Number} width
   */
  constructor({height, width, minH, minW, depth, ratio} = {}) {
    this.height = height || 64;
    this.width = width || 64;
    this.minH = minH || 10;
    this.minW = minW || 10;
    this.depth = depth || 10;
    this.ratio = ratio || 0.55;

    this.rootNode = this.makeNode(0, 0, this.height, this.width);
    this.makeTree(this.rootNode);
  }

  /**
   * Create a node to put into the BSP.
   *
   * @param {Number} x X position of node.
   * @param {Number} y Y position of node.
   * @param {Number} w Width of node.
   * @param {Number} h Height of node.
   * @param {Node} l The left child of this node.
   * @param {Node} r The right child of this node.
   * @return {Node}
   */
  makeNode(x, y, w, h, l, r){
    return {x, y, w, h, l, r};
  }

  /**
   * Create a tree.
   *
   * @param {Node} node The node to generate the tree starting at.
   * @param {Number} level The current depth of the generation.
   */
  makeTree(node, level = 0) {
    if (node && level < this.depth) {
      this.split(node);
      this.makeTree(node.l, level + 1);
      this.makeTree(node.r, level + 1);
    }
  }

  /**
   * Split the given node into two child nodes.
   *
   * @param {Node} node The node to split.
   */
  split(node) {
    const tooSmall = node.h < this.minH * 2 || node.w < this.minW * 2;
    if (tooSmall) {
      return;
    }
    let splitHeight;
    let wider = node.w >= node.h * this.ratio;
    let taller = node.h >= node.w * this.ratio;

    if(!wider && !taller || (wider && taller)) {
      splitHeight = Math.random() > 0.5;
    }

    if(!wider && taller) {
      splitHeight = true;
    }

    if(!taller && wider) {
      splitHeight = false;
    }

    if (splitHeight) {
      let splitAt = Math.floor(Math.random() * (node.h - this.minH * 2 + 1)) + this.minH;
      let rHeight = node.h - splitAt;
      node.l = this.makeNode(node.x, node.y, node.w, splitAt);
      node.r = this.makeNode(node.x, node.y + splitAt, node.w, rHeight);
    } else {
      let splitAt = Math.floor(Math.random() * (node.w - this.minW * 2 + 1)) + this.minW;
      let rWidth = node.w - splitAt;
      node.l = this.makeNode(node.x, node.y, splitAt, node.h);
      node.r = this.makeNode(node.x + splitAt, node.y, rWidth, node.h);
    }
  }

  /**
   * Traverse the tree in order.
   * @param {Function} cb Function to call per node.
   */
  traverseInOrder(cb) {
    const traverse = (node) => {
      if(!node) {
        return;
      }
      traverse(node.l);
      cb(node);
      traverse(node.r);
    };

    traverse(this.rootNode);
  }

  /**
   * Traverse the tree pre order.
   * @param {Function} cb Function to call per node.
   */
  traversePreOrder(cb) {
    const traverse = (node) => {
      if(!node) {
        return;
      }
      cb(node);
      traverse(node.l);
      traverse(node.r);
    };

    traverse(this.rootNode);
  }

  /**
   * Traverse the tree post order.
   * @param {Function} cb Function to call per node.
   */
  traversePostOrder(cb) {
    const traverse = (node) => {
      if(!node) {
        return;
      }
      traverse(node.l);
      traverse(node.r);
      cb(node);
    };

    traverse(this.rootNode);
  }
}

module.exports = BSP;
