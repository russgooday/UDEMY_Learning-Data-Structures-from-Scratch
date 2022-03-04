const BST = require('./bst')

// tests
const bst = new BST(50)
const boundInsert = bst.insert.bind(bst);

[30, 70, 20, 45, 60, 100, 10, 35, 59, 85, 105].forEach(boundInsert)

test('left left node value equals 20', () => {
    expect(bst.left.left.value).toBe(20)
})

test('left right node value equals 45', () => {
    expect(bst.left.right.value).toBe(45)
})

test('right right node value equals 100', () => {
    expect(bst.right.right.value).toBe(100)
})

test('contains value 59 equals true', () => {
    expect(bst.contains(59)).toBe(true)
})

test('contains value 33 equals false', () => {
    expect(bst.contains(33)).toBe(false)
})

test('contains value 35 equals true', () => {
    expect(bst.contains(35)).toBe(true)
})

// Depth First Traversal 'pre-order' found values Test
const DFTPreOrderExp = [50, 30, 20, 10, 45, 35, 70, 60, 59, 100, 85, 105]
const DFTPreOrderRes = []

bst.depthFirstTraversal(value => DFTPreOrderRes.push(value), 'pre-order')

test(`depthFirst 'pre-order' equals ${DFTPreOrderExp}`, () => {
    expect(DFTPreOrderRes).toEqual(DFTPreOrderExp)
})

// Depth First Traversal 'in-order' found values Test
const DFTInOrderExp = [10, 20, 30, 35, 45, 50, 59, 60, 70, 85, 100, 105]
const DFTInOrderRes = []

bst.depthFirstTraversal(value => DFTInOrderRes.push(value), 'in-order')

test(`depthFirst 'in-order' equals ${DFTInOrderExp}`, () => {
    expect(DFTInOrderRes).toEqual(DFTInOrderExp)
})

// Depth First Traversal 'post-order' found values Test
const DFTPostOrderExp = [10, 20, 35, 45, 30, 59, 60, 85, 105, 100, 70, 50]
const DFTPostOrderRes = []

bst.depthFirstTraversal(value => DFTPostOrderRes.push(value), 'post-order')

test(`depthFirst 'post-order' equals ${DFTPostOrderExp}`, () => {
    expect(DFTPostOrderRes).toEqual(DFTPostOrderExp)
})


// Breadth First Traversal found values Test
const BFTExp = [50, 30, 70, 20, 45, 60, 100, 10, 35, 59, 85, 105]
const BFTRes = []

bst.breadthFirstTraversal(value => BFTRes.push(value))

test(`breadthFirst equals ${BFTExp}`, () => {
    expect(BFTRes).toEqual(BFTExp)
})

// Binary Search Tree independent exercise tests
test('Max value is 105', () => {
    expect(bst.getMaxValue()).toBe(105)
})

test('Min value is 10', () => {
    expect(bst.getMinValue()).toBe(10)
})

/*
Test Results:
  √ left left node value equals 20
  √ left right node value equals 45
  √ right right node value equals 100
  √ contains value 59 equals true
  √ contains value 33 equals false
  √ contains value 35 equals true
  √ depthFirst 'pre-order' equals 50,30,20,10,45,35,70,60,59,100,85,105
  √ depthFirst 'in-order' equals 10,20,30,35,45,50,59,60,70,85,100,105
  √ depthFirst 'post-order' equals 10,20,35,45,30,59,60,85,105,100,70,50
  √ breadthFirst equals 50,30,70,20,45,60,100,10,35,59,85,105
  √ breadthFirst Max value is 105
  √ breadthFirst Min value is 10
  Test Suites: 1 passed, 1 total
  Tests:       12 passed, 10 total
*/
