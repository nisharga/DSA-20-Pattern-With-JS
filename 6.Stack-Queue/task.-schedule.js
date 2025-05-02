// Implementing Queue Class
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

// Implementing TaskScheduler Class
class TaskScheduler {
  constructor() {
    this.queue = new Queue(); // Using our Queue class
  }

  // Method to add tasks to the queue
  addTask(task) {
    this.queue.enqueue(task);
  }

  // Method to process tasks in the queue
  processTasks() {
    while (!this.queue.isEmpty()) {
      const task = this.queue.dequeue();
      console.log(`Processing task: ${task.name} for ${task.time} seconds`);
      this.simulateTaskCompletion(task.time);
    }
  }

  // Simulate task completion (sleeping for the task time)
  simulateTaskCompletion(time) {
    console.log(`Task completed in ${time} seconds`);
  }
}

// Testing the TaskScheduler
const scheduler = new TaskScheduler();
scheduler.addTask({ name: "Task 1", time: 3 });
scheduler.addTask({ name: "Task 2", time: 2 });
scheduler.addTask({ name: "Task 3", time: 5 });

scheduler.processTasks();
