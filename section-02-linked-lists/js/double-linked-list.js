// CreateNode Factory
const CreateNode = (data, next = null, prev = null) =>
  ({ data, next, prev })

class LinkedList {

  constructor () {
    this.head = null
    this.tail = null
  }

  // ---- Append Nodes ----

  // insert new node at the beginning of list
  prepend (data) {
    const newNode = CreateNode(data, this.head)

    // if empty linked list
    if (!this.head) {
      this.tail = newNode
    } else {
      this.head.prev = newNode
    }
    this.head = newNode
  }

  // insert new node at the ending of list
  append (data) {
    const newNode = CreateNode(data, null, this.tail)

    // if empty linked list
    if (!this.tail) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
  }

  // insert node after index
  insertAfter (index, data) {
    const prevNode = this.getNode(index)

    if (prevNode) {
      const newNode = CreateNode(data, prevNode.next, prevNode)

      prevNode.next.prev = newNode
      prevNode.next = newNode
    }
  }

  // ---- Remove Nodes ----

  removeHead () {
    if (!this.head) return null

    const value = this.head.data

    this.head = this.head.next
    if (this.head) this.head.prev = null
    else this.tail = null
    return value
  }

  removeTail () {
    if (!this.tail) return null

    const value = this.tail.data

    this.tail = this.tail.prev
    if (this.tail) this.tail.next = null
    else this.head = null
    return value
  }

  // ---- Getters ----

  getNode (index) {
    return [...this.nodes()][index]
  }

  getValue (index) {
    return [...this][index]
  }

  // ---- Search methods ----

  indexOf (searchValue) {
    return [...this].indexOf(searchValue)
  }

  find (searchValue) {
    return [...this].find(searchValue)
  }

  findIndex (searchValue) {
    return [...this].findIndex(searchValue)
  }

  // ---- Filter methods ----

  // @param {Function} expression to match
  // @returns {Array} returns matching node values
  filter (searchValue) {
    return [...this].filter(searchValue)
  }

  // @param {Function} expression to match
  // @returns {Array} returns matching nodes
  filterNodes (searchValue) {
    return [...this.nodes()].filter(searchValue)
  }

  // @param {Function} expression to match
  // @returns {Array} returns matching node indexes
  filterIndex (searchValue) {
    return [...this]
      .reduce((nodes, node, i) => (
        searchValue(node) ? (nodes.push(i), nodes) : nodes
      ), [])
  }

  // Generator to iterate nodes
  // @returns {Object} returns node
  * nodes () {
    let currNode = this.head

    while (currNode) {
      yield currNode
      currNode = currNode.next
    }
  }

  // Generator to iterate nodes
  // @returns {Value} returns node value
  * values () {
    let currNode = this.head

    while (currNode) {
      yield currNode.data
      currNode = currNode.next
    }
  }

  [Symbol.iterator] () {
    return this.values()
  }
}

export { LinkedList }
