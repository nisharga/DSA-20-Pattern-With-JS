function bfs(graph, startNode) {
  let queue = [startNode]; // Queue to track nodes to visit
  let visited = new Set(); // Set to track visited nodes

  visited.add(startNode);

  while (queue.length > 0) {
    let node = queue.shift(); // Dequeue the first node
    console.log(node); // Process the node

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor); // Enqueue unvisited neighbors
      }
    }
  }
}

// Example Graph as an Adjacency List
const graph = {
  0: [1, 2],
  1: [0, 3, 4],
  2: [0, 5, 6],
  3: [1],
  4: [1],
  5: [2],
  6: [2],
};

// Running BFS from node 0
bfs(graph, 0);
