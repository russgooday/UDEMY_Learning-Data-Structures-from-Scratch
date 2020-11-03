const CreateNode = function (data, next = null, prev = null) {
  return Object.create(null, {
    data: {
      writable: true,
      value: data
    },
    next: {
      writable: true,
      value: next
    },
    prev: {
      writable: true,
      value: prev
    }
  })
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

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

  /**
   * return node at index
   * @param index
   */
  getNode (index) {
    let currNode = this.head
    let i = 0

    while (currNode && i < index) {
      currNode = currNode.next
      i++
    }
    return currNode
  }

  /**
   * return value at index
   * @param index
   */
  getValue (index) {
    const node = this.getNode(index)
    return node ? node.data : null
  }

  /**
   * find node equal to value
   * @param searchValue
   */
  findNode (searchValue) {

    let currNode = this.head

    while (currNode && searchValue !== currNode.data) {
      currNode = currNode.next
    }

    return currNode
  }

  /**
   * insert new node at the beginning of list
   * @param data
   */
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

  /**
   * insert new node at the ending of list
   * @param data
   */
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

  /**
   * insert node after index
   * @param index
   * @param data
   */
  insertAfter (index, data) {
    const prevNode = this.getNode(index)

    if (prevNode) {
      const newNode = CreateNode(data, prevNode.next, prevNode)

      prevNode.next.prev = newNode
      prevNode.next = newNode
    }
  }

  /**
   * Generator to enable for of loop
   */

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

// Tests

const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.prepend(5)
list.insertAfter(2, 25)

for (const num of list) {
  console.log(num)
}

/* Output
5
10
20
25
30
*/

console.log('Found Node', list.findNode(50)) // null
console.log('Found Node', list.findNode(20)) // {data: 20, next...}

console.log('Old Tail', list.removeTail()) // 30
console.log('Old Head', list.removeHead()) // 5

console.dir(list)
/* Output

LinkedList
head:
  data: 10
  next:
    data: 20
    next:
      data: 25
      next: null
      prev: {data: 20, next: {…}, prev: {…}}
    prev: {data: 10, next: {…}, prev: null}
  prev: null

tail:
  data: 25
  next: null
  prev:
    data: 20
    next: {data: 25, next: null, prev: {…}}
    prev:
      data: 10
      next: {data: 20, next: {…}, prev: {…}}
      prev: null
__proto__: Object

*/
