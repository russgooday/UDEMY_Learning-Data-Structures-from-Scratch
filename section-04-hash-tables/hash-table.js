class HashNode {
    constructor (key, value, next = null) {
        this.key = key
        this.value = value
        this.next = next
    }
}

class HashTable {

    constructor (size) {
        this.size = size
        this.buckets = Array(size)
    }

    hash (key) {
        const len = key.length
        let total = 0

        for (let i = 0; i < len; i++) {
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    get (key) {
        const index = this.hash(key)
        let currentNode = this.buckets[index]

        while (currentNode) {
            if (currentNode.key === key) return currentNode.value
            currentNode = currentNode.next
        }

        return null
    }

    insert (key, value) {
        const index = this.hash(key)
        let currentNode = this.buckets[index]

        // if an empty bucket
        if (!currentNode) {
            this.buckets[index] = new HashNode(key, value)
            return // return early
        }

        let next = true

        while (next) {
            // if amending an existing key
            if (currentNode.key === key) {
                currentNode.value = value
                return
            }
            next = currentNode.next
            if (next) currentNode = next
        }

        currentNode.next = new HashNode(key, value)
    }

    retrieveAll () {
        return this.buckets.flatMap(currentNode => {
            const nodes = []

            while (currentNode) {
                nodes.push({ key: currentNode.key, value: currentNode.value })
                currentNode = currentNode.next
            }

            return nodes
        })
    }
}

module.exports = {
    HashNode,
    HashTable
}


