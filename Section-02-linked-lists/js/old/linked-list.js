class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  addToHead (value) {
    const newNode = new Node(value, this.head)

    if (this.head) {
      this.head.prev = newNode
    } else {
      this.tail = newNode
    }
    this.head = newNode
  }
}

class Node {
  constructor (value, next = null, prev = null) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

const ll = new LinkedList()
ll.addToHead(100)
console.log(ll)
ll.addToHead(200)
console.log(ll)
ll.addToHead(300)
console.log(ll)
