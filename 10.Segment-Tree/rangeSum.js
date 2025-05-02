class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n).fill(0);
    this.build(arr, 0, 0, this.n - 1);
  }

  build(arr, node, start, end) {
    if (start === end) {
      this.tree[node] = arr[start];
    } else {
      let mid = Math.floor((start + end) / 2);
      this.build(arr, 2 * node + 1, start, mid);
      this.build(arr, 2 * node + 2, mid + 1, end);
      this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
    }
  }

  query(node, start, end, L, R) {
    if (start > R || end < L) return 0;
    if (start >= L && end <= R) return this.tree[node];

    let mid = Math.floor((start + end) / 2);
    let leftSum = this.query(2 * node + 1, start, mid, L, R);
    let rightSum = this.query(2 * node + 2, mid + 1, end, L, R);
    return leftSum + rightSum;
  }

  update(node, start, end, index, value) {
    if (start === end) {
      this.tree[node] = value;
    } else {
      let mid = Math.floor((start + end) / 2);
      if (index <= mid) {
        this.update(2 * node + 1, start, mid, index, value);
      } else {
        this.update(2 * node + 2, mid + 1, end, index, value);
      }
      this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
    }
  }

  sumRange(L, R) {
    return this.query(0, 0, this.n - 1, L, R);
  }

  updateValue(index, value) {
    this.update(0, 0, this.n - 1, index, value);
  }
}

class NumArray {
  constructor(nums) {
    this.segTree = new SegmentTree(nums);
  }

  update(index, val) {
    this.segTree.updateValue(index, val);
  }

  sumRange(left, right) {
    return this.segTree.sumRange(left, right);
  }
}

// Example Usage:
const numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2)); // Output: 9
numArray.update(1, 2);
console.log(numArray.sumRange(0, 2)); // Output: 8
