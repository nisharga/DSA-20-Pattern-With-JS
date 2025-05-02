class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue: Add an element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue: Remove an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Peek: Get the front element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // IsEmpty: Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size: Get the number of elements in the queue
  size() {
    return this.items.length;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // 10 (First in, First out)
console.log(queue.peek()); // 20 (Next element in the queue)
console.log(queue.size()); // 2 (After dequeue, 2 items remain)
