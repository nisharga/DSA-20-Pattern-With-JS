class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n).fill(0);
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

  query(node, start, end, L, R) {
    if (start > R || end < L) return 0; // No overlap
    if (start >= L && end <= R) return this.tree[node]; // Complete overlap

    let mid = Math.floor((start + end) / 2);
    let leftSum = this.query(2 * node + 1, start, mid, L, R);
    let rightSum = this.query(2 * node + 2, mid + 1, end, L, R);
    return leftSum + rightSum;
  }

  update(node, start, end, index, value) {
    if (start === end) {
      this.tree[node] = value; // Update the value at the index
    } else {
      let mid = Math.floor((start + end) / 2);
      if (index <= mid) {
        this.update(2 * node + 1, start, mid, index, value);
      } else {
        this.update(2 * node + 2, mid + 1, end, index, value);
      }
      this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2]; // Update the sum
    }
  }

  getSum(L, R) {
    return this.query(0, 0, this.n - 1, L, R);
  }

  updateValue(index, value) {
    this.update(0, 0, this.n - 1, index, value);
  }
}

// Example Usage
const transactions = [100, 200, 300, 400, 500, 600];
const segTree = new SegmentTree(transactions);

console.log(segTree.getSum(1, 3)); // Sum from index 1 to 3 => 200 + 300 + 400 = 900

segTree.updateValue(2, 350); // Update index 2 from 300 to 350

console.log(segTree.getSum(1, 3)); // New sum => 200 + 350 + 400 = 950
