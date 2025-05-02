function shortestPath(graph, start, target) {
  let queue = [[start]]; // Queue stores paths
  let visited = new Set();

  while (queue.length > 0) {
    let path = queue.shift(); // Dequeue the first path
    let node = path[path.length - 1];

    if (node === target) return path; // If target found, return path

    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        queue.push([...path, neighbor]); // Create new path and enqueue
      }
    }
  }

  return null; // No path found
}

// Graph representation
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"],
};

console.log(shortestPath(graph, "A", "E")); // Output: ['A', 'B', 'E']
