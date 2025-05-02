function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  const prefixSumMap = new Map();

  // Base case: we’ve seen a sum of 0 once
  prefixSumMap.set(0, 1);

  for (let num of nums) {
    sum += num;

    // Check if (sum - k) exists
    if (prefixSumMap.has(sum - k)) {
      count += prefixSumMap.get(sum - k);
    }

    // Update map with current sum
    prefixSumMap.set(sum, (prefixSumMap.get(sum) || 0) + 1);
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2)); //2
