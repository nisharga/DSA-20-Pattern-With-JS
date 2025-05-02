class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n).fill(0); // 4*N space is enough
    this.build(arr, 0, 0, this.n - 1);
  }

  build(arr, node, start, end) {
    if (start === end) {
      this.tree[node] = arr[start]; // Leaf node stores array value
    } else {
      let mid = Math.floor((start + end) / 2);
      this.build(arr, 2 * node + 1, start, mid); // Left child
      this.build(arr, 2 * node + 2, mid + 1, end); // Right child
      this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2]; // Merge step (sum)
    }
  }
}

const arr = [1, 3, 5, 7, 9, 11];

const segTree = new SegmentTree(arr);

console.log(segTree.tree);
