/**
 * A heap implemenation.
 */
class Heap {
  /**
   * constructor
   * @param {Function} compare
   */
  constructor(compare) {
    this.compare = compare || ((a, b) => a < b);

    this.elements = [];
  }

  /**
   * Push an element onto the heap.
   *
   * @param {*} n The element to push onto the heap.
   */
  push(n) {
    let i = this.elements.push(n) - 1;
    let parent = this._getParent(i);

    while(i !== 0 && this.compare(n, this.elements[parent])) {
      this._swap(i, parent);
      i = parent;
      parent = this._getParent(i);
    }
  }

  /**
   * Remove and return the ximum element in the heap.
   * @return {*} The ximum element on the heap.
   */
  pop() {
    const element = this.elements[0];
    this.elements[0] = this.elements.pop();
    const length = this.elements.length;

    const heapify = (i) => {
      let left = this._getLeft(i);
      let right = this._getRight(i);
      let top = i;

      top = left <= length && this.compare(this.elements[left], this.elements[i])
        ? left
        : top;
      top = right <= length && this.compare(this.elements[right], this.elements[i])
        ? right
        : top;

      if(top !== i) {
        this._swap(i, top);
        heapify(top);
      }
    };

    heapify(0);

    return element;
  }

  /**
   * Swap two elements of an array.
   *
   * @private
   * @param {Number} a The first element to swap.
   * @param {Number} b The second element to swap.
   */
  _swap(a, b) {
    let temp = this.elements[a];
    this.elements[a] = this.elements[b];
    this.elements[b] = temp;
  }

  /**
   * Get the parent index of an index in the binary heap.
   *
   * @private
   * @param {Number} index The index to get the parent for.
   * @return {Number} The parent index.
   */
  _getParent(index) {
    return Math.floor((index-1)/2);
  }

  /**
   * Get the left child index of the given index.
   *
   * @private
   * @param {Number} index The index.
   * @return {Number} The left childs index.
   */
  _getLeft(index) {
    return (2 * index) + 1;
  }

  /**
   * Get the right child index of the given index.
   *
   * @private
   * @param {Number} index The index.
   * @return {Number} The right childs index.
   */
  _getRight(index) {
    return (2 * index) + 2;
  }
}

module.exports = Heap;
