// Helper functions

/**
   * find index and node value equal to callback's expression
   * @param {Value or Function} searchValue
   * @return {Object} found node with index
   */
function find (linkedList, searchFn) {

  let currNode = linkedList.head
  let index = 0

  while (currNode && !searchFn(currNode.data, index)) {
    currNode = currNode.next
    index++
  }

  return {
    ...currNode,
    ...(
      (currNode !== null)
        ? { index }
        : { data: undefined, index: -1 }
    )
  }
}

/**
     * find all nodes with data equal to callback's expression
     * @param {Value or Function} searchValue
     * @return {Array}
     */
function filter (linkedList, searchFn) {

  let currNode = linkedList.head
  let index = 0
  const results = []

  while (currNode) {

    if (searchFn(currNode.data, index) === true) {
      results.push({ ...currNode, index })
    }
    currNode = currNode.next
    index++
  }

  return results
}

export { find, filter }
