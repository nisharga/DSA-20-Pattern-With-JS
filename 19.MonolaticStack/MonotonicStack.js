function nextGreaterElements(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }

    if (stack.length) {
      result[i] = stack[stack.length - 1];
    }

    stack.push(nums[i]);
  }

  return result;
}

// Example
console.log(nextGreaterElements([2, 1, 2, 4, 3])); // Output: [4, 2, 4, -1, -1]
