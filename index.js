function bfs(startingNode, vertices, edges) {
    startingNode.distance = 0;
    let discovered = [startingNode];
    let discoverOrder = [startingNode];
    while (discovered.length != 0) {
      let currentNode = discovered.shift();
      let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
      discoverOrder = discoverOrder.concat(adjacentNodes);
      markDistanceAndPredecessor(currentNode, adjacentNodes);
      discovered = discovered.concat(adjacentNodes);
    }
    return discoverOrder;
  }

function findAdjacent(rootNode, vertices, edges){
    let adjacentNodeNames = edges.filter(edge => edge.includes(rootNode)
    ).flat().filter(name => name !== rootNode);
    let adjacentNodes =  vertices.filter(vertice => adjacentNodeNames.includes(vertice.name));
    return adjacentNodes.filter(function(node) {
        return node.distance == null;
      });

   

}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
    adjacentNodes.map(function(node) {
      node.distance = predecessor.distance + 1;
      node.predecessor = predecessor;
    });
}
