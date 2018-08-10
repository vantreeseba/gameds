/**
 * An array that auto grows, and is preallocated.
 * It won't shrink, but will try to reuse empty elements if they have been removed.
 */
class ArrayList extends Array {
  /**
   * Constructor.
   */
  constructor(...items) {
    super(...items);
  }

  /**
   * Count how many defined values are in the array.
   * @return {Number} Array elements that aren't undefined.
   */
  get count() {
    return this.reduce((count, item) => count += item ? 1 : 0, 0);
  }

  /**
   * Get and remove the first existing value in the array.
   * @return {Mixed} Existing value.
   */
  pullExists() {
    let obj;

    for (let i = 0; i < this.length; i += 1) {
      if (this[i]) {
        obj = this[i];
        this[i] = undefined;
        return obj;
      }
    }

    return obj;
  }

  /**
   * Add an item to the array.
   * Either lengthens array, or uses an "empty" index.
   * @param {*} item The item to add to the array.
   */
  push(item) {
    let i = 0;

    for (; i < this.length; i += 1) {
      if (!this[i]) {
        return this[i] = item;
      }
    }

    return this[i] = item;
  }

  /**
   * Add an array to the array.
   * Either lengthens array or adds elements in "empty" indices.
   * @param {Array} array Array to add.
   */
  add(array) {
    let j = 0;

    for (; j < array.length; j += 1) {
      let item = array[j];
      if (item) {
        this.push(item);
      }
    }
  }

  /**
   * Removes elements from the array matching the fn (returns true).
   * @param {Function} fn Matcher to remove elements.
   */
  remove(fn, val) {
    let func;
    if(typeof fn === 'string' && val !== undefined) {
      func = (item) => {
        return item[fn] === val;
      };
    } else if(typeof fn !== 'function') {
      func = (item) => {
        return item === fn;
      };
    } else {
      func = fn;
    }
    for (let i = 0; i < this.length; i += 1) {
      if (this[i] && func(this[i])) {
        this[i] = undefined;
      }
    }
  }

  /**
   * Sets all current elements in array to undefined.
   */
  clear() {
    for (let i = 0; i < this.length; i += 1) {
      this[i] = undefined;
    }
  }
}

module.exports = ArrayList;
