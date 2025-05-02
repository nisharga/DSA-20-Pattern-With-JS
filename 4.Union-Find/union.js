class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i); // Each node is its own parent
    this.rank = Array(size).fill(1); // Rank (size of tree)
  }

  // Find the root of a node with Path Compression
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  // Union by Rank
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX !== rootY) {
      // Attach smaller tree under larger tree
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX] += 1; // Increase rank if equal
      }
    }
  }

  // Check if two elements are in the same set
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// Test Union-Find
let uf = new UnionFind(7);
uf.union(1, 2);
uf.union(2, 3);
uf.union(4, 5);

console.log(uf.connected(1, 3)); // true (1 and 3 are connected)
console.log(uf.connected(1, 4)); // false (1 and 4 are not connected)

uf.union(3, 4);
console.log(uf.connected(1, 5)); // true (Now 1 and 5 are connected)
