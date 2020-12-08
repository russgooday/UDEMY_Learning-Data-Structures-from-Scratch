class BST {

  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }

  // User methods

  insert (value) {
    const node = (value <= this.value) ? 'left' : 'right'

    if (this[node] === null) this[node] = new BST(value)
    else this[node].insert(value)
  }

  contains (value) {
    return containsWith(value)(this)
  }

  depthFirstTraversal (iteratorFn, order = 'in-order') {

    const orderFn = {
      'pre-order': preOrderWith,
      'in-order': inOrderWith,
      'post-order': postOrderWith
    }[order]

    if (orderFn) orderFn(iteratorFn)(this)
  }

  breadthFirstTraversal (iteratorFn) {
    const queue = [this]

    while (queue.length) {
      const { value, left, right } = queue.shift()

      iteratorFn(value)
      if (left) queue.push(left)
      if (right) queue.push(right)
    }
  }

  getMinValue () {
    let node = this

    while (node.left !== null) node = node.left
    return node.value
  }

  getMaxValue () {
    let node = this

    while (node.right !== null) node = node.right
    return node.value
  }
}

// Curried traversal private methods

const containsWith = (needle) =>
  function traverse ({ value, left, right }) {

    if (needle === value) return true
    const node = (needle <= value) ? left : right
    return (node === null) ? false : traverse(node)
  }

const preOrderWith = (iteratorFn) =>
  function traverse ({ value, left, right }) {

    iteratorFn(value)
    if (left) traverse(left)
    if (right) traverse(right)
  }

const inOrderWith = (iteratorFn) =>
  function traverse ({ value, left, right }) {

    if (left) traverse(left)
    iteratorFn(value)
    if (right) traverse(right)
  }


const postOrderWith = (iteratorFn) =>
  function traverse ({ value, left, right }) {

    if (left) traverse(left)
    if (right) traverse(right)
    iteratorFn(value)
  }

module.exports = BST
