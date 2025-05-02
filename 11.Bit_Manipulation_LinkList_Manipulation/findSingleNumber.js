function findSingleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num; // XOR all elements
  }
  return result;
}
console.log(findSingleNumber([4, 1, 2, 1, 2])); // Output: 4
