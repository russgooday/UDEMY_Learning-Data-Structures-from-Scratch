const { HashTable, HashNode } = require('./hash-table')

const hashTable = new HashTable(30)
const buckets = hashTable.buckets

test('hashTable size to be 30', () => {
    expect(hashTable.size).toBe(30)
})

const jenny = hashTable.hash('Jenny') // 6
const bob = hashTable.hash('Bob') // 5
const dan = hashTable.hash('Dan') // 5

describe('hash tests', () => {

    test('hash for key \'Jenny\' to be 6', () => {
        expect(jenny).toBe(6)
    })

    test('hash for key \'Bob\' to be 5', () => {
        expect(bob).toBe(5)
    })

    test('hash for key \'Dan\' to be 5', () => {
        expect(dan).toBe(5)
    })
})

describe('hash table insertion test', () => {

    const bobNode = new HashNode('Bob', 'bob@gmail.com')
    hashTable.insert(bobNode.key, bobNode.value)

    test('hashNode at buckets index 5 to equal bobNode', () => {
        expect(buckets[5]).toEqual(bobNode)
    })
})

describe('hash table insertion and collision test', () => {
    let danNode = new HashNode('Dan', 'dan@hotmail.com')

    test('hashNode at buckets index 5 not to equal danNode', () => {
        hashTable.insert(danNode.key, danNode.value)
        expect(buckets[5]).not.toEqual(danNode)
    })

    test('next hashNode inline at buckets index 5 to equal danNode', () => {
        expect(buckets[5].next).toEqual(danNode)
    })

    test('danNode email to be \'dan@hotmail.com\'', () => {
        danNode = buckets[5].next
        expect(danNode.value).toBe('dan@hotmail.com')
    })

    test('danNode email after insertion to be \'dan@gmail.com\'', () => {
        hashTable.insert('Dan', 'dan@gmail.com')
        expect(danNode.value).toBe('dan@gmail.com')
    })
})

/* Test Result

√ hashTable size to be 30
  hash tests
    √ hash for key 'Jenny' to be 6
    √ hash for key 'Bob' to be 5
    √ hash for key 'Dan' to be 5
  hash table insertion test
    √ hashNode at buckets index 5 to equal bobNode
  hash table insertion and collision test
    √ hashNode at buckets index 5 not to equal danNode
    √ next hashNode inline at buckets index 5 to equal danNode
    √ danNode email to be 'dan@hotmail.com'
    √ danNode email after insertion to be 'dan@gmail.com'

*/



