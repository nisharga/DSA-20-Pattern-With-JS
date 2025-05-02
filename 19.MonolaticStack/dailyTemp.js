function dailyTemperatures(temperatures) {
  const answer = new Array(temperatures.length).fill(0);
  const stack = []; // Stack to store indices

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return answer;
}
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
