function findMissingNumber(nums, n) {
  let result = 0;
  // XOR all numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    result ^= i;
  }
  // XOR all elements in the array
  for (let num of nums) {
    result ^= num;
  }
  return result;
}
console.log(findMissingNumber([1, 2, 4, 5], 5)); // Output: 3
