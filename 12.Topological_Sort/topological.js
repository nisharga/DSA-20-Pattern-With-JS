var findOrder = function (numCourses, prerequisites) {
  const inDegree = Array(numCourses).fill(0);
  const graph = Array(numCourses)
    .fill(0)
    .map(() => []);

  for (let [v, u] of prerequisites) {
    graph[u].push(v);
    inDegree[v]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const result = [];

  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current);

    for (let neighbor of graph[current]) {
      inDegree[neighbor]--;

      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  if (result.length !== numCourses) return [];

  return result;
};

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
); // [ 0, 1, 2, 3 ]
