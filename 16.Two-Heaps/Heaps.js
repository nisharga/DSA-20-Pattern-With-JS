class MedianFinder {
  constructor() {
    this.maxHeap = []; // Max-Heap (smaller half)
    this.minHeap = []; // Min-Heap (larger half)
  }

  addNum(num) {
    // Insert into Max-Heap
    if (this.maxHeap.length === 0 || num <= -this.maxHeap[0]) {
      this.maxHeap.push(-num); // Invert num for max-heap behavior
      this.heapifyUp(this.maxHeap);
    } else {
      this.minHeap.push(num);
      this.heapifyUp(this.minHeap);
    }

    // Balance the heaps
    if (this.maxHeap.length > this.minHeap.length + 1) {
      const val = -this.maxHeap.pop();
      this.minHeap.push(val);
      this.heapifyUp(this.minHeap);
    } else if (this.minHeap.length > this.maxHeap.length) {
      const val = this.minHeap.pop();
      this.maxHeap.push(-val);
      this.heapifyUp(this.maxHeap);
    }
  }

  findMedian() {
    if (this.maxHeap.length > this.minHeap.length) {
      return -this.maxHeap[0]; // Max-Heap root
    } else {
      return (-this.maxHeap[0] + this.minHeap[0]) / 2; // Average of both roots
    }
  }

  // Helper function to maintain heap property (ascending order for min-heap, descending for max-heap)
  heapifyUp(heap) {
    let idx = heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (heap[idx] < heap[parentIdx]) {
        [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
}

const medianFinder = new MedianFinder();

medianFinder.addNum(1);
console.log(medianFinder.findMedian()); // Should print 1

medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // Should print 1.5 (average of 1 and 2)

medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Should print 2

medianFinder.addNum(4);
console.log(medianFinder.findMedian()); // Should print 2.5 (average of 2 and 3)

medianFinder.addNum(5);
console.log(medianFinder.findMedian()); // Should print 3
