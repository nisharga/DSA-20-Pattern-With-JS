class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

// Example usage:
let stack = new Stack();
stack.push(5);
stack.push(10);
console.log(stack.peek()); // 10
console.log(stack.pop()); // 10
console.log(stack.isEmpty()); // false
