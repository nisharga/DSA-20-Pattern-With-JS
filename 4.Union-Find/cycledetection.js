class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(1);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return false; // Cycle detected

    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    return true;
  }
}

function hasCycle(n, edges) {
  let uf = new UnionFind(n);

  for (let [u, v] of edges) {
    if (!uf.union(u, v)) {
      return true; // Cycle detected
    }
  }
  return false;
}

// Test Case
console.log(
  hasCycle(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
  ])
); // Output: true
console.log(
  hasCycle(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ])
); // Output: false
