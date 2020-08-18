function vertexFromName(name, vertices) {
    let currentNode = vertices[0]
    for (let i = 1; i < vertices.length; i++) {
        if (currentNode.name === name) {
            break
        }
        currentNode = vertices[i]
    }
    return currentNode
}

function findAdjacent(name, vertices, edges) {
    const adjacent = []
    edges.forEach(edge => {
        if (edge[0] === name) {
            if (!adjacent.includes(edge[1])) {
                adjacent.push(edge[1])
            }
        } else if (edge[1] === name) {
            if (!adjacent.includes(edge[0])) {
                adjacent.push(edge[0])
            }
        }
    })
    const adjacentNodes = []
    adjacent.forEach(nodeName => {
        const node = vertexFromName(nodeName, vertices)
        if (node.distance === null) {
            adjacentNodes.push(node)
        }
    })
    return adjacentNodes
}

function markDistanceAndPredecessor(predecessor, nodeArr) {
    return nodeArr.map(node => {
        node.distance = predecessor.distance + 1
        node.predecessor = predecessor
    })
}

function bfs(rootNode, vertices, edges){
    let nodeArr = [rootNode]
    let queue = [rootNode]
    rootNode.distance = 0
    while (queue.length != 0) {
        let currentNode = queue.shift()
        let adjacent = findAdjacent(currentNode.name, vertices, edges)
        markDistanceAndPredecessor(currentNode, adjacent)
        queue = queue.concat(adjacent)
        nodeArr = nodeArr.concat(adjacent)
    }
    return nodeArr
}
