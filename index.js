
function bfs(rootNode, vertices, edges) {
    rootNode.distance = 0
    let queue = [rootNode]
    let explored = [rootNode]
    while(queue.length != 0){
      let currentNode = queue.shift()
      let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
      explored = explored.concat(adjacentNodes)
      markDistanceAndPredecessor(currentNode, adjacentNodes)
      queue = queue.concat(adjacentNodes)
    }
    return explored
}


function findAdjacent(nodeName, vertices, edges) {
    let edgesWithNode = edges.filter(edge => edge.includes(nodeName))
    let vertexNames = edgesWithNode.map(edge => edge.filter(node => node != nodeName)[0])
    return vertexNames.map(name => findNode(name, vertices)).filter(node => node.distance == null)
}

function findNode(nodeName, vertices){
    return vertices.find(vertex => vertex.name == nodeName)
  }

function markDistanceAndPredecessor(currentNode, adjacentNodes) {
    return adjacentNodes.map(node=>{
        node.distance = currentNode.distance + 1
        node.predecessor = currentNode
      })
}
