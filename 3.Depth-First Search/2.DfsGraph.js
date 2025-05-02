function dfsGraph(node, adjList, visited = new Set()) {
    if (visited.has(node)) return; // Avoid cycles

    console.log(node); // Process the node
    visited.add(node); // Mark as visited

    for (let neighbor of adjList[node]) {
        dfsGraph(neighbor, adjList, visited);
    }
}

// Example Graph
const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5, 6],
    3: [1],
    4: [1],
    5: [2],
    6: [2]
};

dfsGraph(0, graph);
// Output: 0, 1, 3, 4, 2, 5, 6 (Order may vary)
