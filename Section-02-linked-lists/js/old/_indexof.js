class Node {
  constructor (value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  addToHead (value) {
    const newNode = new Node(value, this.head, null)

    if (this.head) this.head.prev = newNode
    else this.tail = newNode
    this.head = newNode
  }

  addToTail (value) {
    const newNode = new Node(value, null, this.tail)

    if (this.tail) this.tail.next = newNode
    else this.head = newNode
    this.tail = newNode
  }

  removeHead () {
    if (!this.head) return null

    const value = this.head.value

    this.head = this.head.next
    if (this.head) this.head.prev = null
    else this.tail = null
    return value
  }

  removeTail () {
    if (!this.tail) return null

    const value = this.tail.value

    this.tail = this.tail.prev
    if (this.tail) this.tail.next = null
    else this.head = null
    return value
  }

  search (searchValue) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === searchValue) return currentNode.value
      currentNode = currentNode.next
    }
    return null
  }

  indexOf (needle) {
    const matches = []
    let currentNode = this.head
    let i = 0

    do {
      if (currentNode.value === needle) matches.push(i)
    } while ((currentNode = currentNode.next) && ++i)

    return matches
  }
}

const ll = new LinkedList()
ll.addToHead(10)
ll.addToHead(20)
ll.addToHead(30)
ll.addToHead(10)
ll.addToHead(10)
console.log('indexes of 10', ll.indexOf(10)) // [0, 1, 4]
