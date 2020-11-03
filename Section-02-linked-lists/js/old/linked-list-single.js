const CreateNode = function (data) {
  return Object.create(null, {
    data: {
      writable: true,
      value: data
    },
    next: {
      writable: true,
      value: null
    }
  })
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  /**
   * search head to tail for node with matching data
   * @param data
   */
  findNode (data) {
    let currNode = this.head

    while (currNode) {
      if (currNode.data === data) return currNode
      currNode = currNode.next
    }
    return false
  }

  /**
   * insert new node at the beginning of list
   * @param data
   */
  prepend (data) {
    const newNode = CreateNode(data)
    newNode.next = this.head

    // if empty linked list
    if (!this.head) this.tail = newNode
    this.head = newNode
  }

  /**
   * insert new node at the ending of list
   * @param data
   */
  append (data) {
    const newNode = CreateNode(data)

    // if empty linked list
    if (!this.tail) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
  }

  insertAfter (prevNode, data) {
    const newNode = CreateNode(data)
    newNode.next = prevNode.next
    prevNode.next = newNode
  }
}

const linkedList = new LinkedList()

linkedList.prepend('A')
linkedList.prepend('B')
linkedList.append('C')

console.dir(linkedList)

/** @Ouput
v LinkedList
  v head:
      data: "B"
    v next:
        data: "A"
      v next:
          data: "C"
          next: null
  v tail:
      data: "C"
      next: null
> __proto__: Object
*/

const has = Object.prototype.hasOwnProperty

console.log(has.call(linkedList.head, 'data')) // true

console.log(linkedList.findNode('A'))

linkedList.insertAfter(linkedList.findNode('A'), 'Z')

console.dir(linkedList)


