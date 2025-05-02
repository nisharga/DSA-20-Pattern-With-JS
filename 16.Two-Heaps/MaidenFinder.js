// Helper Classes
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  add(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  poll() {
    if (this.size() === 0) return null;
    const val = this.heap[0];
    const end = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return val;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const current = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= current) break;
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }
    this.heap[index] = current;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const current = this.heap[0];

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let swap = null;

      if (leftIndex < length) {
        if (this.heap[leftIndex] < current) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        if (
          (swap === null && this.heap[rightIndex] < current) ||
          (swap !== null && this.heap[rightIndex] < this.heap[leftIndex])
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = current;
  }
}

class MaxHeap extends MinHeap {
  add(val) {
    super.add(-val);
  }

  peek() {
    return -super.peek();
  }

  poll() {
    return -super.poll();
  }
}

// Main Class
var MedianFinder = function () {
  this.maxHeap = new MaxHeap(); // for the smaller half
  this.minHeap = new MinHeap(); // for the larger half
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.size() === 0 || num <= this.maxHeap.peek()) {
    this.maxHeap.add(num);
  } else {
    this.minHeap.add(num);
  }

  // balance the heaps
  if (this.maxHeap.size() > this.minHeap.size() + 1) {
    this.minHeap.add(this.maxHeap.poll());
  } else if (this.minHeap.size() > this.maxHeap.size()) {
    this.maxHeap.add(this.minHeap.poll());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size() === this.minHeap.size()) {
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  } else {
    return this.maxHeap.peek();
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const mf = new MedianFinder();
mf.addNum(5);
mf.addNum(15);
mf.addNum(1);
mf.addNum(3);
console.log(mf.findMedian()); // Output: 4
