function twoSum(nums, target) {
  let hashSet = new Map(); // Hash map to store visited numbers

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (hashSet.has(complement)) {
      return [hashSet.get(complement), i]; // Return indices of pair
    }

    hashSet.set(nums[i], i); // Store number with its index
  }

  return []; // If no pair found
}

// Test Cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
