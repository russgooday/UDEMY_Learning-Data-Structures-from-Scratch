// Refactored tutor's script to use classes

class BST {

  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }

  // Curried traversal methods

  containsWith (needle) {
    return function traverse ({ value, left, right }) {

      if (needle === value) return true
      const node = (needle <= value) ? left : right
      return (node === null) ? false : traverse(node)
    }
  }

  preOrderWith (iteratorFn) {
    return function traverse ({ value, left, right }) {

      iteratorFn(value)
      if (left) traverse(left)
      if (right) traverse(right)
    }
  }

  inOrderWith (iteratorFn) {
    return function traverse ({ value, left, right }) {

      if (left) traverse(left)
      iteratorFn(value)
      if (right) traverse(right)
    }
  }

  postOrderWith (iteratorFn) {
    return function traverse ({ value, left, right }) {

      if (left) traverse(left)
      if (right) traverse(right)
      iteratorFn(value)
    }
  }

  // User methods

  insert (value) {
    let node = (value <= this.value) ? 'left' : 'right'

    if (this[node] === null) this[node] = new BST(value)
    else this[node].insert(value)
  }

  contains (value) {
    return this.containsWith(value)(this)
  }

  depthFirstTraversal (iteratorFn, order = 'in-order') {

    const methods = {
      'pre-order': this.preOrderWith,
      'in-order': this.inOrderWith,
      'post-order': this.postOrderWith
    }

    if (methods[order]) methods[order](iteratorFn)(this)
  }

  breadthFirstTraversal (iteratorFn) {
    const queue = [this]

    while (queue.length) {
      const {value, left, right} = queue.shift()

      iteratorFn(value)
      if (left) queue.push(left)
      if (right) queue.push(right)
    }
  }
}

module.exports = BST
