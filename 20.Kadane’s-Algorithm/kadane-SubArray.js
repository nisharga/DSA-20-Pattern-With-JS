var maxSubarraySumCircular = function (nums) {
  let totalSum = 0;
  let maxSum = nums[0];
  let minSum = nums[0];
  let curMax = 0;
  let curMin = 0;

  for (let num of nums) {
    totalSum += num;

    curMax = Math.max(num, curMax + num);
    maxSum = Math.max(maxSum, curMax);

    curMin = Math.min(num, curMin + num);
    minSum = Math.min(minSum, curMin);
  }

  return maxSum < 0 ? maxSum : Math.max(maxSum, totalSum - minSum);
};

// Example 1: Input: nums = [1,-2,3,-2] Output: 3
// Explanation: Subarray [3] has maximum sum 3.
