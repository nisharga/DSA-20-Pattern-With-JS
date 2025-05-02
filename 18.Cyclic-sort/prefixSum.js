function buildPrefixSum(arr) {
  const prefixSum = [];
  prefixSum[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  return prefixSum;
}

function rangeSum(prefixSum, left, right) {
  if (left === 0) return prefixSum[right];
  return prefixSum[right] - prefixSum[left - 1];
}

// Example usage:
const arr = [2, 4, 6, 8, 10];
const prefixSum = buildPrefixSum(arr);

console.log(rangeSum(prefixSum, 1, 3)); // Output: 18 (4+6+8)
console.log(rangeSum(prefixSum, 0, 4)); // Output: 30 (full sum)
